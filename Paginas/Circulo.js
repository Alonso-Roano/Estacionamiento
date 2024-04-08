import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

const CircleLoader = ({ paused }) => {
    const sizeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animation = Animated.loop(
            Animated.timing(sizeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false
            })
        );

        if (!paused) {
            animation.start();
        } else {
            animation.stop();
        }

        return () => animation.stop();
    }, [sizeAnim, paused]);

    const size1 = sizeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 100],
        extrapolate: 'clamp'
    });
    const size2 = sizeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 200],
        extrapolate: 'clamp'
    });
    const size3 = sizeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [200, 300],
    });
    const size4 = sizeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [300, 400],
    });
    const size5 = sizeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [400, 500],
    });
    const size6 = sizeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [500, 600],
    });
    const size7 = sizeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [600, 700],
    });
    const size8 = sizeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [700, 800],
    });

    const opacity1 = size1.interpolate({
        inputRange: [0, 700],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    });
    const opacity2 = size2.interpolate({
        inputRange: [0, 700],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    });
    const opacity3 = size3.interpolate({
        inputRange: [0, 700],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    });
    const opacity4 = size4.interpolate({
        inputRange: [0, 700],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    });
    const opacity5 = size5.interpolate({
        inputRange: [0, 700],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    });
    const opacity6 = size6.interpolate({
        inputRange: [0, 700],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    });
    const opacity7 = size7.interpolate({
        inputRange: [0, 700],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    });
    const opacity8 = size8.interpolate({
        inputRange: [0, 700],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    });

    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    ...styles.circle,
                    width: size1,
                    height: size1,
                    borderRadius: 1000,
                    opacity: opacity1
                }}
            />
            <Animated.View
                style={{
                    ...styles.circle,
                    width: size2,
                    height: size2,
                    borderRadius: 1000,
                    opacity: opacity2
                }}
            />
            <Animated.View
                style={{
                    ...styles.circle,
                    width: size3,
                    height: size3,
                    borderRadius: 1000,
                    opacity: opacity3
                }}
            />
            <Animated.View
                style={{
                    ...styles.circle,
                    width: size4,
                    height: size4,
                    borderRadius: 1000,
                    opacity: opacity4
                }}
            />
            <Animated.View
                style={{
                    ...styles.circle,
                    width: size5,
                    height: size5,
                    borderRadius: 1000,
                    opacity: opacity5
                }}
            />
            <Animated.View
                style={{
                    ...styles.circle,
                    width: size6,
                    height: size6,
                    borderRadius: 1000,
                    opacity: opacity6
                }}
            />
            <Animated.View
                style={{
                    ...styles.circle,
                    width: size7,
                    height: size7,
                    borderRadius: 1000,
                    opacity: opacity7
                }}
            />
            <Animated.View
                style={{
                    ...styles.circle,
                    width: size8,
                    height: size8,
                    borderRadius: 1000,
                    opacity: opacity8
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position:"absolute"
    },
    circle: {
        position: "absolute",
        backgroundColor: "#0000",
        borderWidth: 1,
        borderColor: "#fff",
    },
});

export default CircleLoader;
