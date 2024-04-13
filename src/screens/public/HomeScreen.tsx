import { menuItems } from "@/constants/constants";
import { homeStyle } from "@/styles/home.styles";
import { useFonts } from "expo-font";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Home = ({ navigation }) => {
  const [isLoaded] = useFonts({
    Irish: require('@/assets/fonts/IrishGrover-Regular.ttf')
  });

  return (
    <View style={homeStyle.container}>
      <Text style={homeStyle.headerTitle}>TGuitar</Text>
        <View style={homeStyle.menu}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => { navigation.navigate(`${item.screeNavigate}`) }}>
              <View style={homeStyle.itemMenu} key={index}>
                <Image style={homeStyle.imageItemMenu} source={{ uri: `${item.icon}` }} />
                <Text style={homeStyle.textItemMenu}>{ item.title }</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
    </View>
  );
};

export default Home;