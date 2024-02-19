import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Estilos de CSS no se aplican en React Native, se deben convertir a estilos de React Native

const menuItems = [
    {
        title: "Dashboard",
        subTitle: "Información general",
        href: "/dashboard",
        Icon: "dashboard",
    },
    {
        title: "Usuarios",
        subTitle: "Gestionar usuarios",
        href: "/PageFirstProject",
        Icon: "person-outline",
    },
    {
        title: "Registro de uso",
        subTitle: "Gestionar registro de uso",
        href: "/teams",
        Icon: "format-list-bulleted",
    },
];

const Slide = () => {
    const navigation = useNavigation();

    const logout = () => {
        // Implementación de logout
    };

    const handleMenuPress = (item) => {
        if (item.title === "Usuarios") {
            navigation.navigate("Usuarios"); // Reemplaza "UsuariosPage" con el nombre de tu pantalla de usuarios
        } else {
            // Manejar la navegación para otros elementos del menú si es necesario
        }
    };

    return (
        <View style={styles.menuContainer}>
            <View style={styles.logoSection}>
                <Image source={{ uri: "https://seeklogo.com/images/P/picsart-logo-CCC8D025B9-seeklogo.com.png" }} style={styles.logoImage} />
                <Text style={styles.logoTitle}>Parking Academy</Text>
            </View>

            <View style={styles.profileSection}>
                <Text style={styles.profileText}>Bienvenido,</Text>
                <TouchableOpacity style={styles.profileLink}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png" }} style={styles.profileImage} />
                    <Text style={styles.profileName}>Nombre de usuario</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.navSection}>
                {menuItems.map((item) => (
                    <>
                        <TouchableOpacity key={item.title} style={styles.auto} onPress={() => handleMenuPress(item)}>
                                <Icon name={item.Icon} size={35} color="#fff"/>
                            <View style={styles.columna}>
                                <Text style={styles.logoutText}>{item.title}</Text>
                                <Text style={styles.logoutSubText}>{item.subTitle}</Text>
                            </View>
                        </TouchableOpacity>
                    </>


                ))}

                {/* Logout */}
                
            </ScrollView>
            <TouchableOpacity onPress={() => logout()} style={styles.logoutLink}>
                    <View>
                        <Icon name="logout" size={45} color="#fff" />
                    </View>
                    <View style={styles.buttom}>
                        <Text style={styles.logoutText}>Salir</Text>
                        <Text style={styles.logoutSubText}>Cerrar sesión</Text>
                    </View>
                </TouchableOpacity>
        </View>
    );
};

export default Slide;

const styles = StyleSheet.create({
    columna:{
        flexDirection:"column",
        flexGrow:1,
        height:"100%",
        justifyContent:"center",
        alignContent:"center",
        marginLeft:10
      },
    auto: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height:"50px",
        marginBottom:"10px"
      },
    menuContainer: {
        flex: 1,
        position: "absolute",
        backgroundColor: '#191c40',
        height: "100%",
        maxWidth: "350px",
        width: "60%",
        padding: 20,
        zIndex: 100
    },
    logoSection: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    logoSgp: {
        maxWidth: '30%',
        height: 'auto',
    },
    logoTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: "30px",
        fontFamily:"sans-serif"
    },
    profileSection: {
        marginBottom: 30,
    },
    profileText: {
        fontSize: 16,
        color: '#646c8b',
    },
    profileLink: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    logoImage: {
        width: 100,
        height: 100,
        borderRadius: "50%",
        marginBottom: 5
    },
    profileName: {
        fontSize: 16,
        color: '#ffffff',
    },
    navSection: {
        flex: 1,
        flexGrow:1,
        height:"100%"
    },
    logoutLink: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    buttom: {
        marginLeft: 10,
    },
    logoutText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    logoutSubText: {
        color: '#94a3b8',
        fontSize: 16,
    },
});