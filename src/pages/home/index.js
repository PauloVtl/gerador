import { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native"
import Slider from '@react-native-community/slider'
import { ModalPassword } from '../../components/modal'

let charset = "abcdefghijklmopqrstuvwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ0123456789"

export function Home() {
    const [size, setSize] = useState(6)
    const [passwordValue, setPasswordValue] = useState("")
    const [modalVisible, setModalVisible] = useState(false);

    function generatePasword() {

        let password = "";

        for (let i = 0, n = charset.length; i < size; i++) {
            password += charset.charAt(Math.floor(Math.random() * n))
        }

        setPasswordValue(password)
        setModalVisible(true);

    }

    return (
        <View style={styles.container}>

            <Text style={styles.nameApp}>Gerador de senhas</Text>

            <Image source={require("../../assets/logo1.png")}
                style={styles.logo}>
            </Image>

            <Text style={styles.title}>{size} caracteres</Text>

            <View style={styles.area}>
                <Slider
                    style={{ height: 50 }}
                    minimumValue={6}
                    maximumValue={20}
                    maximumTrackTintColor="#ff0000"
                    minimumTrackTintColor="#000"
                    thumbTintColor="#392de9"
                    value={size}
                    onValueChange={(value) => setSize(value.toFixed(0))}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={generatePasword}>
                <Text style={styles.buttonText}>Gerar senha</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType='fade' transparent={true}>
                <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)} />
            </Modal>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F3F3",
        justifyContent: "center",
        alignItems: "center"
    },
    nameApp: {
        fontSize: 30,
        color: "#342de9",
        fontWeight: 'bold',
        marginBottom: 60,
    },
    logo: {
        marginBottom: 60
    },
    area: {
        marginTop: 14,
        marginBottom: 14,
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 6,
    },
    button: {
        backgroundColor: "#392de9",
        width: "80%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginBottom: 18
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    }
})