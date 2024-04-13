import React, { useEffect, useState } from "react";
import { useFonts } from 'expo-font';
import { StyleSheet, View } from "react-native";
import * as Animatable from 'react-native-animatable';
import { splashStyle } from "@/styles/splash.styles";

const SplashScreen = ({ navigation }) => {
    const [isLoaded] = useFonts({
        Irish: require('@/assets/fonts/IrishGrover-Regular.ttf')
    });

    const [isTimeUp, setTimeUp] = useState(false);
    const [shouldNavigate, setShouldNavigate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeUp(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isTimeUp && isLoaded) {
            setShouldNavigate(true);
        }
    }, [isTimeUp, isLoaded]);

    useEffect(() => {
        if (shouldNavigate) {
            navigation.navigate('Home Screen');
        }
    }, [shouldNavigate, navigation]);

    if (!isLoaded || !isTimeUp) {
        return (
            <View style={splashStyle.container}>
                <Animatable.Image
                    animation="bounceIn"
                    source={require('@/assets/Splash.png')}
                    style={splashStyle.logo}
                    resizeMode="contain"
                />
                <Animatable.Text animation="fadeIn" style={splashStyle.text}>
                    Bem vindo {'\n'} ao {'\n'} TGuitar
                </Animatable.Text>
            </View>
        );
    }
    return null;
};

export default SplashScreen;
