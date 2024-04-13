import Home from '@/screens/public/HomeScreen';
import Splash from '@/screens/public/SplashScreen';
import Tips from '@/screens/public/TipsSreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash Screen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splash Screen' component={Splash} />
        <Stack.Screen name='Home Screen' component={Home} />
        <Stack.Screen name='Tips Screen' component={Tips} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;