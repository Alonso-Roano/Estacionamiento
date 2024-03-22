import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import {  useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import  Constants  from 'expo-constants';

const InicioAndroid = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        console.log('Email: ', email, 'Password: ', password);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inicio}>
                <View style={[styles.circuloGrande, styles.circulo1]}></View>
                <View style={[styles.circuloGrande, styles.circulo2]}></View>
                <View style={[styles.circuloGrande, styles.circulo3]}></View>
                <View style={[styles.circuloMediano]}></View>
                <View style={[styles.circuloChico, styles.circulo4]}></View>
                <View style={[styles.circuloChico, styles.circulo5]}></View>
                <View style={[styles.circuloChico, styles.circulo6]}></View>
                <View style={styles.cont}>
                    <Image
                        source={require('../assets/logo-estacionamiento.png')}
                        style={styles.icon}
                    />
                </View>
                <View >
                    <Text style={styles.title}>Bienvenido</Text>
                    <Text style={styles.subtitle}>Parking Academy</Text>
                </View>

                <View style={styles.contenedor}>
                    <Icon name="email" size={45} color="#000" />
                    <TextInput
                        style={styles.input}
                        placeholder="Correo electrónico"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Icon name="lock" size={45} color="#000" />
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Dashboard")}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    cont: {
        width: 130,
        height: 130,
        alignItems: "center",
        borderRadius: 20,
        justifyContent: "space-between"
    },
    contenedor: {
        width:"100%",
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: "center"
    },
    circulo1: {
        top: -50,
        left: -50
    },
    circulo2: {
        bottom: -50,
        left: -50
    },
    circulo3: {
        bottom: 50,
        right: -50
    },
    circuloGrande: {
        width: 180,
        height: 180,
        backgroundColor: "#30BFBF",
        borderRadius: 2000,
        position: "absolute",
    },
    circuloMediano: {
        width: 130,
        height: 130,
        backgroundColor: "#30BFBF",
        borderRadius: 2000,
        position: "absolute",
        top: "30%",
        right: -10
    },
    circuloChico: {
        width: 80,
        height: 80,
        backgroundColor: "#30BFBF",
        borderRadius: 2000,
        position: "absolute",
    },
    circulo4: {
        top: 10,
        right: 0
    },
    circulo5: {
        top: "35%",
        left: -10
    },
    circulo6: {
        bottom: 10,
        left: "45%"
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
    container: {
        marginTop:Constants.statusBarHeight,
        minHeight:800,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 170,
        height: 170,
        marginBottom: 20,
        borderRadius: 5
    },
    title: {
        width:"100%",
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

export default InicioAndroid;