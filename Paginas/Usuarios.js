import React from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import  Constants  from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

const Usuarios = () => {
  const navigation = useNavigation();
 

    const dataUsers=[
        { id:1,username: "John Doe", entryTime: "10:00 AM", lotNumber: "A23" },
        { id:2,username: "Alice Smith", entryTime: "11:30 AM", lotNumber: "B12" },
        { id:3,username: "John Doe", entryTime: "10:00 AM", lotNumber: "A23" },
        { id:4,username: "Alice Smith", entryTime: "11:30 AM", lotNumber: "B12" },
        { id:5,username: "John Doe", entryTime: "10:00 AM", lotNumber: "A23" },
        { id:6,username: "Alice Smith", entryTime: "11:30 AM", lotNumber: "B12" },
        { id:7,username: "John Doe", entryTime: "10:00 AM", lotNumber: "A23" },
        { id:8,username: "Alice Smith", entryTime: "11:30 AM", lotNumber: "B12" },
        { id:9,username: "John Doe", entryTime: "10:00 AM", lotNumber: "A23" },
        { id:10,username: "Alice Smith", entryTime: "11:30 AM", lotNumber: "B12" },
        { id:11,username: "John Doe", entryTime: "10:00 AM", lotNumber: "A23" },
        { id:12,username: "Alice Smith", entryTime: "11:30 AM", lotNumber: "B12" },
        { id:13,username: "John Doe", entryTime: "10:00 AM", lotNumber: "A23" },
        { id:14,username: "Alice Smith", entryTime: "11:30 AM", lotNumber: "B12" },
        { id:15,username: "John Doe", entryTime: "10:00 AM", lotNumber: "A23" },
        { id:16,username: "Alice Smith", entryTime: "11:30 AM", lotNumber: "B12" },
    ]
  return (
    <View style={styles.cont}>
    <ScrollView contentContainerStyle={{marginTop:Constants.statusBarHeight,flexGrow:1}}>
      <View style={styles.title}>
      <Text style={styles.word}>
        Lista de Usuarios
      </Text>
      </View>
      <View style={styles.container}>
        {dataUsers.map((user)=>(
          <View key={user.id} style={styles.column}>
            <Text style={styles.username}>{user.username}</Text>
      <Text style={styles.entryInfo}>Hora de entrada: {user.entryTime}</Text>
      <Text style={styles.entryInfo}>Lote número: {user.lotNumber}</Text>
        </View>
        ))}

        </View>
    </ScrollView>
        <TouchableOpacity style={styles.fixedButton} onPress={() => navigation.navigate("Dashboard")}>
                <Text style={styles.buttonText}>Regresar</Text>
            </TouchableOpacity>
        </View>
    
  );
};

const styles = StyleSheet.create({
  cont: {
      flex: 1,
      backgroundColor:"#cececece"
  },
  title:{
      padding:10,
      justifyContent:"center",
      alignItems:"center",
  },
  word:{
      fontSize:30,
      fontWeight: 'bold',
  },
  container:{
      flexDirection: 'row', // Establece la dirección del flexbox a horizontal
      flexWrap: 'wrap', // Permite que los elementos se envuelvan a la siguiente línea si no caben
      justifyContent: 'space-between', // Distribuye el espacio entre los elementos
      marginHorizontal: 10,
      marginBottom: 60,
  },
  column: {
      width: '48%',
      backgroundColor: '#ffffff',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#ccc',
  },
  username: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
  },
  entryInfo: {
      fontSize: 16,
      marginBottom: 3,
  },
  fixedButton: {
      position: 'absolute',
      bottom: 10, // Ajusta este valor para cambiar la posición vertical del botón fijo
      left: 10, // Ajusta este valor para cambiar la posición horizontal del botón fijo
      backgroundColor: '#3498db',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
  },
  buttonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
  },
});

export default Usuarios;
