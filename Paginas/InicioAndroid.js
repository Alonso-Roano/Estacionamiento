import React, { useState, useEffect, } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Animated, Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Constants from 'expo-constants';
import swal from "sweetalert2";
import axios from "axios";
import Circulos from './Circulos';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
const windowHeight = Dimensions.get('window').height;
import { FontAwesome } from '@expo/vector-icons';

const InicioAndroid = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const [showAlert, setShowAlert] = useState(false);
    const [showAlert2, setShowAlert2] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleInicioSesion = async () => {
        if (!email || !password) {
            setShowAlert(true)
            return;
        }
        
        try {
            const respuesta = await axios.post(`http://10.10.50.96:3000/api/auth/login`,
                {
                    email: email,
                    password: password,
                });
            if (respuesta.data) {
                console.log(respuesta.data)
                setEmail("");
                setPassword("");
                navigation.navigate("Dashboard")
            }
        } catch (error) {
            setShowAlert2(true);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.inicio}>
                <Circulos></Circulos>
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
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <View style={styles.contenedor}>
                    <Icon name="lock" size={45} color="#000" />
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                    <TouchableOpacity style={styles.togglePassword} onPress={toggleShowPassword}>
                        <FontAwesome name={showPassword ? 'eye-slash' : 'eye'} size={30} color="black" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => handleInicioSesion()}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
            <Dialog
                visible={showAlert}
                onTouchOutside={() => setShowAlert(false)}
                dialogStyle={styles.alertDialog}
            >
                <DialogContent style={styles.alertContent}>
                    <Text style={styles.alertTitle}>Error</Text>
                    <Text style={styles.alertText}>Por favor, complete todos los campos.</Text>
                    <TouchableOpacity style={styles.alertButton} onPress={() => setShowAlert(false)}>
                        <Text style={styles.alertButtonText}>Aceptar</Text>
                    </TouchableOpacity>
                </DialogContent>
            </Dialog>
            <Dialog
                visible={showAlert2}
                onTouchOutside={() => setShowAlert2(false)}
                dialogStyle={styles.alertDialog}
            >
                <DialogContent style={styles.alertContent}>
                    <Text style={styles.alertTitle}>Error</Text>
                    <Text style={styles.alertText}>Correo o contraseña incorrectos.</Text>
                    <TouchableOpacity style={styles.alertButton} onPress={() => setShowAlert2(false)}>
                        <Text style={styles.alertButtonText}>Aceptar</Text>
                    </TouchableOpacity>
                </DialogContent>
            </Dialog>
        </View>
    );
};

const styles = StyleSheet.create({
    togglePassword: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    alertDialog: {
        backgroundColor: 'transparent',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    alertTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#f00', // Color del título
    },
    alertContent: {
        backgroundColor:"#fff",
        padding:15,
        borderRadius:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    alertText: {
        fontSize: 22,
        textAlign: 'center',
        color: '#555', // Color del texto
    },
    alertButton: {
        backgroundColor: '#30BFBF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    alertButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cont: {
        width: 130,
        height: 130,
        alignItems: "center",
        borderRadius: 20,
        justifyContent: "space-between"
    },
    contenedor: {
        width: 300,
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
    container: {
        marginTop: Constants.statusBarHeight,
        minHeight: 650,
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
        flexGrow:1,
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

