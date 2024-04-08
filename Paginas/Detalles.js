import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Button, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import CircleLoader from './Circulo';
import io from "socket.io-client";
import Contador from './Contador';

const Detalles = () => {
    const navigation = useNavigation();
    const [useEffectFinished, setUseEffectFinished] = useState(false);
    const route = useRoute();
    const [mensaje, setMensaje] = useState(route.params?.mensajes);
    const scrollViewRef = useRef(null);
    const [sensorData, setSensorData] = useState([]);
    const [paused, setPaused] = useState(false);
    const [tiempoTranscurrido, setTiempoTranscurrido] = useState();

    const scrollToElement = (elementKey) => {
        const elementOffsetY = (Object.keys(espacios).indexOf(elementKey) * 110) - 110;
        scrollViewRef.current.scrollTo({ y: elementOffsetY, animated: true });
    };

    useEffect(() => {
        const socket = io("http://10.10.50.96:3000");
        console.log(mensaje) 
        socket.on("updateData", (updatedData) => {
            const sortedData = updatedData.sort((a, b) => {
                const sensorIdANum = parseInt(a.sensorId.replace('sensor', ''), 10);
                const sensorIdBNum = parseInt(b.sensorId.replace('sensor', ''), 10);
                return sensorIdANum - sensorIdBNum;
            });
    
            const newData = sortedData.reduce((acc, data) => {
                const lastTime = new Date(data.last_time);
                const fecha = `${lastTime.getFullYear()}-${String(lastTime.getMonth() + 1).padStart(2, '0')}-${String(lastTime.getDate()).padStart(2, '0')}`;
                const hora = `${String(lastTime.getHours()).padStart(2, '0')}:${String(lastTime.getMinutes()).padStart(2, '0')}:${String(lastTime.getSeconds()).padStart(2, '0')}`;
                const sensorIdReplaced = data.sensorId.replace('sensor', 'Espacio ');
                acc[sensorIdReplaced] = {
                    nombre: sensorIdReplaced,
                    estado: data.isOccupied,
                    fecha: fecha,
                    hora: hora,
                    seleccionado: sensorIdReplaced === route.params?.mensajes,
                };
                return acc;
            }, {});
    
            setEspacios(newData);
            if (newData[mensaje].estado) {
                setPaused(false);
            } else {
                setPaused(true);
            }
            if (newData[mensaje]) {
                const { fecha, hora } = newData[mensaje];
                const tiempoInicio = new Date(`${fecha}T${hora}`).getTime() / 1000;
                const tiempoActual = Math.floor(Date.now() / 1000);
                const tiempoTranscurrido = tiempoActual - tiempoInicio;
                setTiempoTranscurrido(tiempoTranscurrido);
            }
        });
    
        socket.emit("getData");
    
        return () => {
            socket.disconnect();
        };
    }, []);
    

    const [espacios, setEspacios] = useState({"Espacio 1": {"estado": false, "fecha": "1969-12-31", "hora": "19:00", "nombre": "Espacio 1", "seleccionado": false}, "Espacio 2": {"estado": false, "fecha": "1969-12-31", "hora": "19:00", "nombre": "Espacio 2", "seleccionado": false}, "Espacio 3": {"estado": false, "fecha": "1969-12-31", "hora": "19:00", "nombre": "Espacio 3", "seleccionado": false}, "Espacio 4": {"estado": false, "fecha": "1969-12-31", "hora": "19:00", "nombre": "Espacio 4", "seleccionado": false}, "Espacio 5": {"estado": false, "fecha": "1969-12-31", "hora": "19:00", "nombre": "Espacio 5", "seleccionado": false}, "Espacio 6": {"estado": false, "fecha": "2024-04-06", "hora": "13:53", "nombre": "Espacio 6", "seleccionado": false}, "Espacio 7": {"estado": false, "fecha": "1969-12-31", "hora": "19:00", "nombre": "Espacio 7", "seleccionado": false}, "Espacio 8": {"estado": false, "fecha": "2024-04-06", "hora": "13:35", "nombre": "Espacio 8", "seleccionado": false}, "Espacio 9": {"estado": false, "fecha": "1969-12-31", "hora": "19:00", "nombre": "Espacio 9", "seleccionado": false}, "Espacio 10": {"estado": false, "fecha": "2024-04-06", "hora": "13:42", "nombre": "Espacio 10", "seleccionado": false}});

    useEffect(() => {
        if (mensaje && espacios.hasOwnProperty(mensaje)) {
            if (espacios[mensaje].estado) {
                setPaused(false);
            } else {
                setPaused(true);
            }
            if (espacios[mensaje]) {
                const { fecha, hora } = espacios[mensaje];
                const tiempoInicio = new Date(`${fecha}T${hora}`).getTime() / 1000;
                const tiempoActual = Math.floor(Date.now() / 1000);
                const tiempoTranscurrido = tiempoActual - tiempoInicio;
                setTiempoTranscurrido(tiempoTranscurrido);
            }
        } 

        setUseEffectFinished(true);
        resetSeleccionado(route.params?.mensajes);
    }, [mensaje]);

    useEffect(() => {
        if (useEffectFinished && mensaje) {
            scrollToElement(mensaje);
        }
    }, [useEffectFinished]);

    const resetSeleccionado = (nombreEspacio) => {
        setEspacios(prevEspacios => {
            const nuevosEspacios = {};
            for (const key in prevEspacios) {
                if (prevEspacios.hasOwnProperty(key)) {
                    nuevosEspacios[key] = { ...prevEspacios[key], seleccionado: key === nombreEspacio };
                }
            }
            return nuevosEspacios;
        });
    };

    

    const renderizarEspacios = () => {
        const elementos = [];
    
        Object.keys(espacios).forEach((key, index) => {
            const espacio = espacios[key];
            const isFirst = index === 0;
            const isLast = index === Object.keys(espacios).length - 1;
            const prevEspacio = Object.values(espacios)[index - 1];
            const nextEspacio = Object.values(espacios)[index + 1];
    
            elementos.push(
                <View
                    key={key}
                    style={[
                        styles.opcion,
                        (isFirst) ? null : (isFirst || (prevEspacio && prevEspacio.nombre===route.params?.mensajes)) ? styles.borderRadiusIzquierda : null,
                        (isLast) ? null : (isLast || (nextEspacio && nextEspacio.nombre === route.params?.mensajes)) ? styles.borderRadiusDerecha : null,
                    ]}
                >
                    <TouchableOpacity activeOpacity={1} onPress={() => { setMensaje(espacio.nombre); navigation.setParams({ mensajes: espacio.nombre }); }}>
                        <View style={[
                            styles.opcion,
                            espacio.nombre===route.params?.mensajes ? styles.seleccionado : styles.borde,
                            (isFirst) ? null : (isFirst || (prevEspacio && prevEspacio.nombre===route.params?.mensajes)) ? styles.borderRadiusIzquierda : null,
                            (isLast) ? null : (isLast || (nextEspacio && nextEspacio.nombre===route.params?.mensajes)) ? styles.borderRadiusDerecha : null,
                        ]}>
                            <View style={styles.girar}>
                                <Text style={[styles.textoVista1, espacio.nombre===route.params?.mensajes ? styles.blanco : null]}>{espacio.nombre}</Text>
                                <Text style={[styles.textoVista2, espacio.nombre===route.params?.mensajes ? styles.blanco : null]}>{espacio.estado ? "Ocupado" : "Disponible"}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            );
        });

        return elementos;
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ScrollView
                    horizontal
                    ref={scrollViewRef}
                    contentContainerStyle={{ flexGrow: 1, backgroundColor: "#30BFBF" }}
                >
                    {renderizarEspacios()}
                </ScrollView>
            </View>

            <LinearGradient colors={['#30BFBF', '#008BB9']} style={styles.Estacionamiento}>
                <CircleLoader paused={paused} />
                {espacios[mensaje] && (
                    
                    <View style={styles.Espacios}>
                        {espacios[mensaje].estado ? <><Image source={require('../assets/auto.png')} style={styles.image} />
                        <Contador fecha={espacios[mensaje].fecha} hora={espacios[mensaje].hora} /></> : <><Image source={require('../assets/auto.png')} style={[styles.image, styles.ocultar]} />
                            <Text style={styles.Hora}>00:00</Text></>}
                        <Text style={styles.info}>Lote 1, Plaza {mensaje}</Text>
                    </View>
                )}
            </LinearGradient>

            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                    <View style={styles.footer}>
                        <Text></Text>
                        <Text style={styles.title2}>Volver</Text>
                        <TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default Detalles;

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
        flex: 1,
        backgroundColor: "#30BFBF"
    },
    scrollViewContent: {
        minHeight: 1000,
        flexGrow: 1,
        height: 10,
        paddingVertical: 10,
    },
    header: {
        height: 130,
        paddingTop: 20,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    footer: {
        height: 60,
        width: "100%",
        backgroundColor: "#fff",
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
    footer2: {
        height: 60,
        width: "100%",
        backgroundColor: "#fff",
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
    title2: {
        fontSize: 25,
        fontWeight: "semibold",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        color: "#000"
    },
    Estacionamiento: {
        minHeight: 60,
        flexGrow: 1,
        backgroundColor: "#fff",
        padding: 25,
        position: "relative",
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "hidden"
    },
    Espacios: {
        width: "95%",
        height: 380,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
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
        height: 380,
        width: 190,
        transform: [{ rotate: '180deg' }],
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
    opcion: {
        width: 100,
        position: "relative",
        backgroundColor: "#fff",
        height: 110,
    },
    borde: {
        borderRightWidth: 2,
        borderRightColor: "#DFE3E4"
    },
    seleccionado: {
        backgroundColor: "#30BFBF",
        borderTopEndRadius: 50,
        borderTopStartRadius: 50
    },
    borderRadiusIzquierda: {
        borderBottomLeftRadius: 35
    },
    borderRadiusDerecha: {
        borderBottomRightRadius: 35,
        borderRightWidth: 0
    },
    girar: {
        position: "absolute",
        width: 110,
        height: 100,
        paddingTop: 18,
        transform: [{ rotate: '270deg' }],
    },
    textoVista1: {
        fontSize: 20,
        color: "#000",
        fontWeight: "bold",
        width: "90%",
        textAlign: "center"
    },
    textoVista2: {
        fontSize: 15,
        color: "#30BFBF",
        fontWeight: "bold",
        width: "90%",
        textAlign: "center"
    },
    blanco: {
        color: "#fff"
    },
    Hora: {
        fontSize: 40,
        color: "#fff",
        fontWeight: "bold",
    },
    info: {
        fontSize: 22,
        paddingTop: 5,
        color: "#fff",
        fontWeight: "semibold",
    },
    ocultar: {
        opacity: 0
    }
});