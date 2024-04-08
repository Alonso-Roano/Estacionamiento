import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Button, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Slide from './Slider';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import Detalles from './Detalles';
import io from "socket.io-client";

const Estacionamiento = () => {
    const navigation = useNavigation();
    const [showDetalles, setShowDetalles] = useState(false);
    const toggleDetalles = () => {
        setShowDetalles(!showDetalles);
    };
    const [sensorData, setSensorData] = useState([{"id": "8f28bd13-f0c6-4e42-bedf-d98de66907a8", "isOccupied": false, "last_time": null, "sensorId": "sensor1"}, {"id": "c0320128-d4bf-4f89-a1c8-6634d01500ba", "isOccupied": false, "last_time": null, "sensorId": "sensor2"}, {"id": "5c8d7ca8-de0f-4ce4-96ae-17ac949314ad", "isOccupied": false, "last_time": null, "sensorId": "sensor3"}, {"id": "c1e75f29-2b48-4745-a27b-bd60feb49dd8", "isOccupied": false, "last_time": null, "sensorId": "sensor4"}, {"id": "962b48fd-0bc3-4174-adcc-7320514edb3a", "isOccupied": false, "last_time": null, "sensorId": "sensor5"}, {"id": "4d475675-8067-492b-ac8c-7588012461e0", "isOccupied": false, "last_time": "2024-04-06T18:53:13.000Z", "sensorId": "sensor6"}, {"id": "4dee7af8-fee0-4a4c-ae66-5e022b6f59f4", "isOccupied": false, "last_time": null, "sensorId": "sensor7"}, {"id": "09f32fb9-cb3f-4953-a6f5-92977b8ba9dc", "isOccupied": false, "last_time": "2024-04-06T18:35:29.000Z", "sensorId": "sensor8"}, {"id": "77adb75d-4989-4507-88f1-4ad890a03c84", "isOccupied": false, "last_time": null, "sensorId": "sensor9"}, {"id": "e20b5c71-6d84-41ff-a30d-af5359756fef", "isOccupied": false, "last_time": "2024-04-06T18:42:07.000Z", "sensorId": "sensor10"}]);

    useEffect(() => {
        const socket = io("http://10.10.50.96:3000");
    
        socket.on("updateData", (updatedData) => {
            const sortedData = updatedData.sort((a, b) => {
                const sensorIdANum = parseInt(a.sensorId.replace('sensor', ''), 10);
                const sensorIdBNum = parseInt(b.sensorId.replace('sensor', ''), 10);
                return sensorIdANum - sensorIdBNum;
            });

            const replacedData = sortedData.map(item => ({
                ...item,
                sensorId: item.sensorId.replace('sensor', 'Espacio ')
            }));
        
            setSensorData(replacedData);
            console.log(replacedData);
        });
    
        socket.emit("getData");
    
        return () => {
            socket.disconnect();
        };
    }, []);
    
    const renderEspacio = (espacio, index, sensorData) => (
        <View key={espacio.sensorId} 
              style={[
                  styles.cupo,
                  espacio.sensorId === 'Espacio 8' && styles.penultimo,
                  ((index === sensorData.length - 1)&&!(espacio.sensorId === 'Espacio 9')) && styles.ultimo, 
              ]}>
            <View style={styles.lineacupo}>
                <Text style={styles.lineacupop}>{espacio.sensorId}</Text>
            </View>
            {espacio.isOccupied && (
                <TouchableOpacity onPress={() => navigation.navigate("Detalles", { mensajes: espacio.sensorId })} 
                                  style={styles.boton}>
                    <Image source={require('../assets/auto.png')} 
                           style={sensorData.length === 2 ? styles.image2 : styles.image} />
                </TouchableOpacity>
            )}
        </View>
    ); 
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Parking Academy</Text>
            </View>

            <View style={styles.Estacionamiento}>
                <View style={styles.Espacios}>
                    <View style={styles.slots}>
                    {sensorData.slice(0, 6).reverse().map(renderEspacio)}
                    </View>
                    <View style={styles.pasillo}>
                        <View style={styles.lineas}>

                        </View>
                    </View>
                    <View style={styles.slots}>
                        {sensorData.slice(8).reverse().map(renderEspacio)}
                        <View style={[styles.cupo, styles.ultimo, styles.salida]}>
                            <View style={[styles.lineacupo, styles.salida2]}><Text style={styles.lineacupop}>Salida</Text></View>
                        </View>
                        <View style={[styles.cupo, styles.ultimo, styles.salida]}>
                            <View style={[styles.lineacupo, styles.salida2]}><Text style={styles.lineacupop}>Entrada</Text></View>
                        </View>
                        {sensorData.slice(6, 8).reverse().map(renderEspacio)}
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
    titulo: {
        position: "absolute",
        zIndex: 200,
        backgroundColor: "#000",
        color: "#fff"
    }
});