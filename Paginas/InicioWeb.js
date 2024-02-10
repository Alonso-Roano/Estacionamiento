import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Slide from './Slider';

const InicioWeb = () => {
  const navigation = useNavigation();
  const [side, setSide] = useState(false);

  let datos = [
    { Fecha: "21/1/2004", Hora: "9:45", Activo: true, Lote:1},
    { Fecha: "21/1/2004", Hora: "10:45", Activo: false, Lote:2},
    { Fecha: "21/1/2004", Hora: "9:05", Activo: false, Lote:3},
    { Fecha: "21/1/2004", Hora: "8:07", Activo: true, Lote:4},
    { Fecha: "21/1/2004", Hora: "9:59", Activo: true, Lote:5},
    { Fecha: "21/1/2004", Hora: "9:00", Activo: false, Lote:6},
    { Fecha: "21/1/2004", Hora: "7:00", Activo: true, Lote:7},
    { Fecha: "21/1/2004", Hora: "6:09", Activo: false, Lote:8},
    { Fecha: "21/1/2004", Hora: "18:45", Activo: false, Lote:9},
    { Fecha: "21/1/2004", Hora: "12:25", Activo: true, Lote:10},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>setSide(true)}><Icon name="menu" size={45} color="#000" /></TouchableOpacity>
        <Text style={styles.title}>Parking Academy</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Inicio")}>
          <Icon name="account-circle" size={45} color="#000" />
        </TouchableOpacity>
      </View>
      { side ?
      <>
      <Slide></Slide>
      <TouchableOpacity style={styles.fondo} onPress={()=>setSide(false)}></TouchableOpacity>
      </>
      :
      <></>
      }
      
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        
        {datos.map((lista) => (
          <View style={styles.auto}>
            <Icon name="directions-car-filled" size={"100px"} color={lista.Activo?"#f00":color="#0f0"} />
            <View style={styles.columna}>
              { lista.Activo?
              <><Text style={[styles.texto1,styles.texto]}>Fecha de entrada: {lista.Fecha}</Text> 
              <Text style={[styles.texto1,styles.texto]}>Hora de entrada: {lista.Hora}</Text></>
              :<></>
              }
              
              <Text style={[styles.texto1,styles.texto]}>Lote numero {lista.Lote}: {lista.Activo?"Ocupado":"Libre"}</Text>
            </View>
          </View>
          
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Text></Text>
        <Text style={styles.title2}><Icon name="open-in-browser" size={25} color="#fff" /> Abrir plumilla</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Inicio")}>
          <Icon name="settings" size={45} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InicioWeb;

const styles = StyleSheet.create({
  columna:{
    flexDirection:"column",
    flexGrow:1,
    height:"100%",
    justifyContent:"center",
    alignContent:"center"
  },
  texto:{
    color:"#403532",
    fontSize:"20px",
    fontWeight:"bold"
  },
  texto1:{
    width:"100%",
    textAlign:"center"
  },
  fila:{
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-around",
    height:"50%",
    alignItems:"center"
  },
  fondo:{
    position:"absolute",
    width:"100%",
    height:"100%",
    backgroundColor:"#0005",
    zIndex:50
  },
  container: {
    position:"relative",
    flex: 1
  },
  scrollViewContent: {
    flexGrow: 1,
    height:10,
    paddingVertical:10,
  },
  header: {
    height: 60,
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
  },
  title2: {
    fontSize: 25,
    fontWeight: "bold",
    alignContent:"center",
    justifyContent:"center",
    color:"#fff"
  },
  auto: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle:"solid",
    borderWidth:2,
    borderColor:"#0000",
    borderBottomColor:"#403532",
    height:"120px"
  },
});