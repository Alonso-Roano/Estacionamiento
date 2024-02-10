import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import {  useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';

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
                        source={{ uri: 'https://pngbuy.com/wp-content/uploads/2023/06/picsart-logo-png-hdlogo-picsart-png.png-2.png' }} // Reemplaza con la URL de tu icono
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
        display: "flex",
        alignItems: "center",
        borderRadius: "50%",
        alignContent: "space-between"
    },
    contenedor: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent:"center"
      },
    circulo1: {
        top: "-50px",
        left: "-50px"
    },
    circulo2: {
        bottom: "-50px",
        left: "-50px"
    },
    circulo3: {
        bottom: "50px",
        right: "-50px"
    },
    circuloGrande: {
        width: "180px",
        height: "180px",
        backgroundColor: "#30BFBF",
        borderRadius: "50%",
        position: "absolute",
    },
    circuloMediano: {
        width: "130px",
        height: "130px",
        backgroundColor: "#30BFBF",
        borderRadius: "50%",
        position: "absolute",
        top: "30%",
        right: "-10px"
    },
    circuloChico: {
        width: "80px",
        height: "80px",
        backgroundColor: "#30BFBF",
        borderRadius: "50%",
        position: "absolute",
    },
    circulo4: {
        top: "10px",
        right: "0px"
    },
    circulo5: {
        top: "35%",
        left: "-10px"
    },
    circulo6: {
        bottom: "10px",
        left: "45%"
    },
    inicio: {
        width: "100%",
        height: "100%",
        backgroundColor: "#f00",
        position: "relative",
        backgroundColor: "#fff",
        justifyContent: "space-evenly",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        padding: "20px",
        paddingHorizontal: "100px"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 170,
        height: 170,
        marginBottom: 20,
        borderRadius: "50px"
    },
    title: {
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
        width: '300px',
        height: "50px",
        marginLeft:"10px",
        borderWidth: 0,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: "10px",
        backgroundColor: "#fff",
        marginBottom: 10,
        borderStyle: "none",
        position: "relative",
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0, // Estos son los ejes X y Y
            height: 0, // para la sombra
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
            width: 0, // Estos son los ejes X y Y
            height: 0, // para la sombra
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: "20px"
    },
});

export default InicioAndroid;