import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Button, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import CircleLoader from './Circulo';

const Detalles = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [mensaje, setMensaje] = useState(route.params?.mensaje);
    const scrollViewRef = useRef(null);
    const [espacios, setEspacios] = useState({
        "P-1": { nombre: "P-1", fecha: "2024-03-21", hora: "08:00", estado: false, seleccionado: true },
        "E-1": { nombre: "E-1", fecha: "2024-03-21", hora: "09:00", estado: true, seleccionado: false },
        "E-2": { nombre: "E-2", fecha: "2024-03-21", hora: "10:00", estado: false, seleccionado: false },
        "E-3": { nombre: "E-3", fecha: "2024-03-21", hora: "11:00", estado: true, seleccionado: false },
        "E-4": { nombre: "E-4", fecha: "2024-03-21", hora: "12:00", estado: true, seleccionado: false },
        "E-5": { nombre: "E-5", fecha: "2024-03-21", hora: "13:00", estado: true, seleccionado: false },
        "M-1": { nombre: "M-1", fecha: "2024-03-21", hora: "14:00", estado: false, seleccionado: false },
        "M-2": { nombre: "M-2", fecha: "2024-03-21", hora: "15:00", estado: true, seleccionado: false },
        "M-3": { nombre: "M-3", fecha: "2024-03-21", hora: "16:00", estado: true, seleccionado: false },
        "M-4": { nombre: "M-4", fecha: "2024-03-21", hora: "17:00", estado: true, seleccionado: false },
    });
    const [paused, setPaused] = useState(false);
    const [slot, setSlot] = useState(null);
    const [tiempoTranscurrido, setTiempoTranscurrido] = useState(0);
 
    useEffect(() => {
        if (mensaje && espacios.hasOwnProperty(mensaje)) {
            setSlot(espacios[mensaje]);
            if (espacios[mensaje].estado) {
                setPaused(false);
            } else {
                setPaused(true)
            }
            if (mensaje && espacios[mensaje]) {
                const { fecha, hora } = espacios[mensaje];
                const tiempoInicio = new Date(`${fecha}T${hora}`).getTime() / 1000; 
                const tiempoActual = Math.floor(Date.now() / 1000);
                const tiempoTranscurrido = tiempoActual - tiempoInicio; 
                setTiempoTranscurrido(tiempoTranscurrido);
            }
        } else {
            setSlot(null);
        }
        resetSeleccionado(mensaje)
    }, [mensaje]);
    useEffect(() => {
        scrollToElement(mensaje);
        
    }, [])

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
    const togglePause = () => {
        setPaused(!paused);
    };


    const renderEspacios = () => {
        return Object.keys(espacios).map((key, index) => {
            const espacio = espacios[key];
            const isFirst = index === 0;
            const isLast = index === Object.keys(espacios).length - 1;
            const prevEspacio = Object.values(espacios)[index - 1];
            const nextEspacio = Object.values(espacios)[index + 1];
            return (
                <View
                    key={key}
                    style={[
                        styles.opcion,
                        (isFirst) ? null : (isFirst || (prevEspacio && prevEspacio.seleccionado)) ? styles.borderRadiusIzquierda : null,
                        (isLast) ? null : (isLast || (nextEspacio && nextEspacio.seleccionado)) ? styles.borderRadiusDerecha : null,
                    ]}
                >

                    <TouchableOpacity activeOpacity={1} onPress={() => setMensaje(espacio.nombre)}>
                        <View style={[
                            styles.opcion,
                            espacio.seleccionado ? styles.seleccionado : styles.borde,
                            (isFirst) ? null : (isFirst || (prevEspacio && prevEspacio.seleccionado)) ? styles.borderRadiusIzquierda : null,
                            (isLast) ? null : (isLast || (nextEspacio && nextEspacio.seleccionado)) ? styles.borderRadiusDerecha : null,
                        ]}>
                            <View style={styles.girar}><Text style={[styles.textoVista1, espacio.seleccionado ? styles.blanco : null]}>{espacio.nombre}</Text><Text style={[styles.textoVista2, espacio.seleccionado ? styles.blanco : null]}>{espacio.estado ? "Ocupado" : "Disponible"}</Text></View>
                        </View></TouchableOpacity>
                </View>

            );
        });
    };

    const scrollToElement = (elementKey) => {
        const elementOffsetY = (Object.keys(espacios).indexOf(elementKey) * 110) - 110;
        scrollViewRef.current.scrollTo({ y: elementOffsetY, animated: true });
    };
    const formatTiempo = (segundos) => {
        const dias = Math.floor(segundos / (3600 * 24));
        const horas = Math.floor((segundos % (3600 * 24)) / 3600);
        const minutos = Math.floor((segundos % 3600) / 60);
        const segundosRestantes = Math.floor(segundos % 60);
        const mensajes = [];
        if (dias > 0) mensajes.push(`${dias} ${dias === 1 ? '' : ''}`);
        if (horas > 0) mensajes.push(`${horas} ${horas === 1 ? '' : ''}`);
        if (minutos > 0) mensajes.push(`${minutos} ${minutos === 1 ? '':''}`);
        if (segundosRestantes > 0) mensajes.push(`${segundosRestantes} ${segundosRestantes === 1 ? '' : ''}`);
        if (mensajes.length === 1) {
            return mensajes[0];
        } else if (mensajes.length === 2) {
            return mensajes.join('m:');
        } else if (mensajes.length > 2) {
            const ultimo = mensajes.pop();
            return `${mensajes.join('h: ')}m: ${ultimo}s`;
        } else {
            return 'Menos de un segundo';
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ScrollView
                    horizontal
                    ref={scrollViewRef}
                    contentContainerStyle={{ flexGrow: 1, backgroundColor: "#30BFBF" }}
                >
                    {renderEspacios()}
                </ScrollView>
            </View>

            <LinearGradient colors={['#30BFBF', '#008BB9']} style={styles.Estacionamiento}>
                <CircleLoader paused={paused} />
                {slot && (
                    <View style={styles.Espacios}>
                        {slot.estado ? <><Image source={require('../assets/auto.png')} style={styles.image} />
                            <Text style={styles.Hora}>{formatTiempo(tiempoTranscurrido)}</Text></> : <><Image source={require('../assets/auto.png')} style={[styles.image, styles.ocultar]} />
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