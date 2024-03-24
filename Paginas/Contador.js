import React, { useEffect, useState } from 'react';
import { Text, StyleSheet } from 'react-native';

const Contador = ({ fecha, hora }) => {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        const tiempoInicio = new Date(`${fecha}T${hora}`).getTime() / 1000;

        const actualizarContador = () => {
            const tiempoActual = Math.floor(Date.now() / 1000);
            const tiempoTranscurrido = tiempoActual - tiempoInicio;
            setContador(tiempoTranscurrido);
            requestAnimationFrame(actualizarContador);
        };

        const idIntervalo = requestAnimationFrame(actualizarContador);

        return () => {
            cancelAnimationFrame(idIntervalo);
        };
    }, [fecha, hora]);

    const formatTiempo = (segundos) => {
        if (segundos === 0) {
            return '0s';
        }

        const dias = Math.floor(segundos / (3600 * 24));
        const horas = Math.floor((segundos % (3600 * 24)) / 3600);
        const minutos = Math.floor((segundos % 3600) / 60);
        const segundosRestantes = Math.floor(segundos % 60);
        const mensajes = [];
        if (dias > 0) mensajes.push(`${dias}${dias === 1 ? 'd' : 'd'}`);
        if (horas > 0) mensajes.push(`${horas}${horas === 1 ? 'h' : 'h'}`);
        if (minutos > 0) mensajes.push(`${minutos}${minutos === 1 ? 'm' : 'm'}`);
        if (segundosRestantes > 0) mensajes.push(`${segundosRestantes}${segundosRestantes === 1 ? 's' : 's'}`);
        if (mensajes.length === 0) {
            return '0s';
        } else if (mensajes.length === 1) {
            return mensajes[0];
        } else if (mensajes.length === 2) {
            return mensajes.join(':');
        } else {
            const ultimo = mensajes.pop();
            return `${mensajes.join(':')}:${ultimo}`;
        }
    };

    return (
        <Text style={styles.Hora}>
            {formatTiempo(contador)}
        </Text>
    );
};

const styles = StyleSheet.create({
    Hora: {
        fontSize: 38,
        color: "#fff",
        fontWeight: "bold",
    },
});

export default Contador;