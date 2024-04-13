import { tipsMenu } from "@/constants/constants";
import { tipsStyle } from "@/styles/tips.styles";
import { useFonts } from "expo-font";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const TipsScreen = ({ navigation }) => {
  const [isLoaded] = useFonts({
    Irish: require('@/assets/fonts/IrishGrover-Regular.ttf')
  });

  return (
    <View style={tipsStyle.container}>
      <View style={tipsStyle.header}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Text style={tipsStyle.textHeader}>{'<'}</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={tipsStyle.textBody}>Dicas</Text>

      <FlatList
        data={tipsMenu}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={tipsStyle.itemMenuTip}>
            <Text style={tipsStyle.textItemMenuTip}>{item.title}</Text>

            <FlatList 
                data={item.items}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                  <View style={tipsStyle.itemSubMenuTip}>
                    <Text style={tipsStyle.textItemSubMenuTip}>{item.title} {' ' + item.text}</Text>
                  </View>
                )}
            />
          </View>
        )}
        style={tipsStyle.listTips}
      />
    </View>
  );
};

export default TipsScreen;