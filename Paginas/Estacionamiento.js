import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Button, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Slide from './Slider';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import Detalles from './Detalles';

const Estacionamiento = () => {
    const navigation = useNavigation();
    const [showDetalles, setShowDetalles] = useState(false);
    const toggleDetalles = () => {
        setShowDetalles(!showDetalles);
    };
    const [espacios, setEspacios] = useState([
        { id: "P-1", estado: false, },
        { id: "E-1", estado: true },
        { id: "E-2", estado: false },
        { id: "E-3", estado: true },
        { id: "E-4", estado: true },
        { id: "E-5", estado: true },
        { id: "M-1", estado: true },
        { id: "M-2", estado: true },
        { id: "M-3", estado: true },
        { id: "M-4", estado: false },
    ]);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Parking Academy</Text>
            </View>

            <View style={styles.Estacionamiento}>
                <View style={styles.Espacios}>
                    <View style={styles.slots}>
                        <View style={styles.cupo}>
                            <View style={styles.lineacupo}><Text style={styles.lineacupop}>E-5</Text></View>
                            {espacios[5].estado ? <TouchableOpacity onPress={() => navigation.navigate("Detalles", { mensaje: "E-5" })} style={styles.boton}><Image source={require('../assets/auto.png')} style={styles.image} /></TouchableOpacity> : <></>}
                        </View>
                        <View style={styles.cupo}>
                            <View style={styles.lineacupo}><Text style={styles.lineacupop}>E-4</Text></View>
                            {espacios[4].estado ? <TouchableOpacity onPress={() => navigation.navigate("Detalles", { mensaje: "E-4" })} style={styles.boton}><Image source={require('../assets/auto.png')} style={styles.image} /></TouchableOpacity> : <></>}
                        </View>
                        <View style={styles.cupo}>
                            <View style={styles.lineacupo}><Text style={styles.lineacupop}>E-3</Text></View>
                            {espacios[3].estado ? <TouchableOpacity onPress={() => navigation.navigate("Detalles", { mensaje: "E-3" })} style={styles.boton}><Image source={require('../assets/auto.png')} style={styles.image} /></TouchableOpacity> : <></>}
                        </View>
                        <View style={styles.cupo}>
                            <View style={styles.lineacupo}><Text style={styles.lineacupop}>E-2</Text></View>
                            {espacios[2].estado ? <TouchableOpacity onPress={() => navigation.navigate("Detalles", { mensaje: "E-2" })}style={styles.boton}><Image source={require('../assets/auto.png')} style={styles.image} /></TouchableOpacity> : <></>}
                        </View>
                        <View style={styles.cupo}>
                            <View style={styles.lineacupo}><Text style={styles.lineacupop}>E-1</Text></View>
                            {espacios[1].estado ? <TouchableOpacity onPress={() => navigation.navigate("Detalles", { mensaje: "E-1" })} style={styles.boton}><Image source={require('../assets/auto.png')} style={styles.image} /></TouchableOpacity> : <></>}
                        </View>
                        <View style={[styles.cupo, styles.ultimo]}>
                            <View style={styles.lineacupo}><Text style={styles.lineacupop}>P-1</Text></View>
                            {espacios[0].estado ? <TouchableOpacity onPress={() => navigation.navigate("Detalles", { mensaje: "P-1" })} style={styles.boton}><Image source={require('../assets/auto.png')} style={styles.image} /></TouchableOpacity> : <></>}
                        </View>
                    </View>
                    <View style={styles.pasillo}>
                        <View style={styles.lineas}>

                        </View>
                    </View>
                    <View style={styles.slots}>
                        <View style={styles.cupo}>
                            <View style={styles.lineacupo}><Text style={styles.lineacupop}>M-4</Text></View>
                            {espacios[6].estado ? <TouchableOpacity onPress={() => navigation.navigate("Detalles", { mensaje: "M-4" })} style={styles.boton}><Image source={require('../assets/auto.png')} style={styles.image2} /></TouchableOpacity> : <></>}
                        </View>
                        <View style={styles.cupo}>
                            <View style={styles.lineacupo}><Text style={styles.lineacupop}>M-3</Text></View>
                            {espacios[7].estado ? <TouchableOpacity onPress={() => navigation.navigate("Detalles", { mensaje: "M-3" })} style={styles.boton}><Image source={require('../assets/auto.png')} style={styles.image2} /></TouchableOpacity> : <></>}
                        </View>
                        <View style={[styles.cupo, styles.ultimo, styles.salida]}>
                            <View style={[styles.lineacupo, styles.salida2]}><Text style={styles.lineacupop}>Salida</Text></View>
                        </View>
                        <View style={[styles.cupo, styles.ultimo, styles.salida]}>
                            <View style={[styles.lineacupo, styles.salida2]}><Text style={styles.lineacupop}>Entrada</Text></View>
                        </View>
                        <View style={[styles.cupo, styles.penultimo]}>
                            <View style={styles.lineacupo}><Text style={styles.lineacupop}>M-2</Text></View>
                            {espacios[8].estado ? <TouchableOpacity onPress={() => navigation.navigate("Detalles", { mensaje: "M-2" })} style={styles.boton}><Image source={require('../assets/auto.png')} style={styles.image2} /></TouchableOpacity> : <></>}
                        </View>
                        <View style={[styles.cupo, styles.ultimo]}>
                            <View style={styles.lineacupo}><Text style={styles.lineacupop}>M-1</Text></View>
                            {espacios[9].estado ? <TouchableOpacity onPress={() => navigation.navigate("Detalles", { mensaje: "M-1" })} style={styles.boton}><Image source={require('../assets/auto.png')} style={styles.image2} /></TouchableOpacity> : <></>}
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Inicio")}>
                <LinearGradient colors={['#30BFBF', '#1F7E7E']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.footer}>
                    <Text></Text>
                    <Text style={styles.title2}><Icon name="open-in-browser" size={25} color="#fff" /> Cerrar sesion</Text>
                    <TouchableOpacity>
                    </TouchableOpacity>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};

export default Estacionamiento;

const styles = StyleSheet.create({
    columna: {
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    texto: {
        color: "#403532",
        fontSize: 20,
        fontWeight: "bold"
    },
    texto1: {
        width: "100%",
        textAlign: "center"
    },
    fila: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        height: "50%",
        alignItems: "center"
    },
    fondo: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#0005",
        zIndex: 50
    },
    container: {
        marginTop: Constants.statusBarHeight,
        position: "relative",
        justifyContent: "center",
        flex: 1
    },
    scrollViewContent: {
        minHeight: 1000,
        flexGrow: 1,
        height: 10,
        paddingVertical: 10,
    },
    header: {
        height: 70,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        justifyContent: "center",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 10,
    },
    footer: {
        height: 60,
        backgroundColor: "#30BFBF",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#30BFBF"
    },
    title2: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        color: "#fff"
    },
    auto: {
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#0000",
        borderBottomColor: "#403532",
        height: 120
    },
    Estacionamiento: {
        minHeight: 60,
        flexGrow: 1,
        backgroundColor: "#fff",
        padding: 25
    },
    Espacios: {
        flexGrow: 1,
        flexDirection: "row",
        backgroundColor: "#333",
        borderWidth: 5,
        borderColor: '#ddd',
        borderStyle: 'solid',
    },
    slots: {
        width: "35%",
        flexGrow: 1,
        overflow: "hidden"
    },
    pasillo: {
        width: "30%",
        flexGrow: 1,
    },
    lineas: {
        borderRightWidth: 10,
        borderRightColor: '#ff0',
        borderStyle: 'dashed',
        flexGrow: 1,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cupo: {
        flexGrow: 1,
        borderBottomWidth: 5,
        width: "100%",
        borderColor: '#ddd',
        borderStyle: 'solid',
        position: "relative"
    },
    ultimo: { borderBottomWidth: 0 },
    lineacupo: {
        position: "absolute",
        height: "50%",
        width: "100%",
        borderBottomWidth: 5,
        width: "100%",
        borderColor: '#ff0',
        borderStyle: 'dashed',
        alignItems: "center",
        justifyContent: "center"
    },
    lineacupop: {
        color: "#fff",
        fontSize: 20
    },
    salida: {
        position: "relative",
        left: 30,
        alignItems: "",
    },
    salida2: {
        alignItems: "flex-start",
        marginRight: 10
    },
    penultimo: {
        borderTopWidth: 5,
        borderColor: '#ddd',
    },
    image: {
        height: 100,
        width: 50,
        transform: [{ rotate: '90deg' }],
    },
    image2: {
        height: 100,
        width: 50,
        transform: [{ rotate: '270deg' }],
    },
    boton: {
        position: "absolute",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    titulo:{
        position:"absolute",
        zIndex:200,
        backgroundColor:"#000",
        color:"#fff"
    }
});