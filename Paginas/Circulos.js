import React, { useEffect, useRef } from 'react';
import { StyleSheet, Animated, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const Circulos = React.memo(() => {
    const animatedValues = {
        circle1: new Animated.Value(windowHeight),
        circle2: new Animated.Value(windowHeight),
        circle3: new Animated.Value(windowHeight),
        circle4: new Animated.Value(windowHeight),
        circle5: new Animated.Value(windowHeight),
        circle6: new Animated.Value(windowHeight),
        circle7: new Animated.Value(windowHeight),
        circle8: new Animated.Value(windowHeight),
        circle9: new Animated.Value(windowHeight),
        circle10: new Animated.Value(windowHeight),
        circle11: new Animated.Value(windowHeight),
        circle12: new Animated.Value(windowHeight),
    };

    const startAnimation=()=>{
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValues.circle1, {
                    toValue: -200,
                    duration: Math.floor(Math.random() * 7000) + 3000,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValues.circle1, {
                    toValue: windowHeight,
                    duration: 0,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValues.circle2, {
                    toValue: -200,
                    duration: Math.floor(Math.random() * 7000) + 3000,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValues.circle2, {
                    toValue: windowHeight,
                    duration: 0,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValues.circle3, {
                    toValue: -200, 
                    duration: Math.floor(Math.random() * 7000) + 3000,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValues.circle3, {
                    toValue: windowHeight,
                    duration: 0,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValues.circle4, {
                    toValue: -200,
                    duration: Math.floor(Math.random() * 7000) + 3000,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValues.circle4, {
                    toValue: windowHeight,
                    duration: 0,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValues.circle5, {
                    toValue: -200,
                    duration: Math.floor(Math.random() * 7000) + 3000,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValues.circle5, {
                    toValue: windowHeight,
                    duration: 0,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValues.circle6, {
                    toValue: -200,
                    duration: Math.floor(Math.random() * 7000) + 3000,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValues.circle6, {
                    toValue: windowHeight,
                    duration: 0,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValues.circle7, {
                    toValue: -200,
                    duration: Math.floor(Math.random() * 7000) + 3000,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValues.circle7, {
                    toValue: windowHeight,
                    duration: 0, 
                    useNativeDriver: true,
                }),
            ]),
        ).start();
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValues.circle8, {
                    toValue: -200,
                    duration: Math.floor(Math.random() * 7000) + 3000,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValues.circle8, {
                    toValue: windowHeight,
                    duration: 0,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValues.circle9, {
                    toValue: -200,
                    duration: Math.floor(Math.random() * 7000) + 3000,
                    useNativeDriver: true, 
                }),
                Animated.timing(animatedValues.circle9, {
                    toValue: windowHeight,
                    duration: 0,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValues.circle10, {
                    toValue: -200,
                    duration: Math.floor(Math.random() * 7000) + 3000,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValues.circle10, {
                    toValue: windowHeight,
                    duration: 0,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValues.circle11, {
                    toValue: -200,
                    duration: Math.floor(Math.random() * 7000) + 3000,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValues.circle11, {
                    toValue: windowHeight,
                    duration: 0,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValues.circle12, {
                    toValue: -200,
                    duration: Math.floor(Math.random() * 7000) + 3000,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValues.circle12, {
                    toValue: windowHeight,
                    duration: 0,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
    }

    useEffect(() => {
        startAnimation();
    }, []);

    return ( 
        <>
            <Animated.View style={[styles.circuloChico, styles.circulo1, { transform: [{ translateY: animatedValues.circle1 }] }]}></Animated.View>
            <Animated.View style={[styles.circuloGrande, styles.circulo2, { transform: [{ translateY: animatedValues.circle2 }] }]}></Animated.View>
            <Animated.View style={[styles.circuloChico, styles.circulo3, { transform: [{ translateY: animatedValues.circle3 }] }]}></Animated.View>
            <Animated.View style={[styles.circuloGrande, styles.circulo4, { transform: [{ translateY: animatedValues.circle4 }] }]}></Animated.View>
            <Animated.View style={[styles.circuloGrande, styles.circulo5, { transform: [{ translateY: animatedValues.circle5 }] }]}></Animated.View>
            <Animated.View style={[styles.circuloChico, styles.circulo6, { transform: [{ translateY: animatedValues.circle6 }] }]}></Animated.View>
            <Animated.View style={[styles.circuloChico, styles.circulo6, { transform: [{ translateY: animatedValues.circle6 }] }]}></Animated.View>
            <Animated.View style={[styles.circuloChico, styles.circulo7, { transform: [{ translateY: animatedValues.circle7 }] }]}></Animated.View>
            <Animated.View style={[styles.circuloChico, styles.circulo8, { transform: [{ translateY: animatedValues.circle8 }] }]}></Animated.View>
        </>
    );
});

const styles = StyleSheet.create({
    cont: {
        width: 130,
        height: 130,
        alignItems: "center",
        borderRadius: 20,
        justifyContent: "space-between"
    },
    contenedor: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: "center"
    },
    circulo1: {
        left: -50,
        opacity: 0.8
    },
    circulo2: {
        left: -50,
        opacity: 0.7
    },
    circulo3: {
        right: -50,
        opacity: 0.6
    },
    circulo4: {
        right: 0,
        opacity: 0.5
    },
    circulo5: {
        left: -10,
        opacity: 0.4
    },
    circulo6: {
        left: "45%",
        opacity: 0.3
    },
    circulo7: {
        left: "55%",
        opacity: 0.2
    },
    circulo8: {
        left: "65%",
        opacity: 0.3
    },
    circulo9: {
        left: "75%",
        opacity: 0.4
    },
    circulo10: {
        right: "10%",
        opacity: 0.5
    },
    circulo11: {
        right: -30,
        opacity: 0.6
    },
    circulo12: {
        right: -80,
        opacity: 0.7
    },
    circuloGrande: {
        width: 180,
        height: 180,
        backgroundColor: "#30BFBF99",
        borderRadius: 2000,
        position: "absolute",
    },
    circuloChico: {
        width: 80,
        height: 80,
        backgroundColor: "#30BFBF99",
        borderRadius: 2000,
        position: "absolute",
    },
    inicio: {
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "#fff",
        justifyContent: "space-evenly",
        overflow: "hidden",
        alignItems: "center",
        padding: 20,
        paddingHorizontal: 100
    },
    icon: {
        width: 170,
        height: 170,
        marginBottom: 20,
        borderRadius: 5
    },
    title: {
        width: "100%",
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: "center"
    },
    subtitle: {
        fontSize: 30,
        marginBottom: 20,
        textAlign: "center"
    },
    input: {
        width: 300,
        height: 50,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 1,
        backgroundColor: "#fff",
        marginBottom: 10,
        position: "relative",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,
    },
    button: {
        backgroundColor: '#30BFBF',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 10,
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 20
    },
});

export default Circulos;