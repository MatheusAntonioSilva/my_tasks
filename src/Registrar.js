import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity } from 'react-native'
import { GlobalStyles } from './styles/GlobalStyles'
import { addUser } from './service/register'

export default function Registrar({ navigation }) {
    const [data, setData] = useState({ nome: '', email: '', senha: '', confirmarSenha: '' })

    const field = (field) => {
        return (value) => setData({...data, [field]: value })
    }

    const addAction = () => {
        if (data.nome == '' || data.email == '' || data.senha == '' || data.confirmarSenha == '') { return }
        if (data.senha !== data.confirmarSenha) { return }
        
        addUser({name: data.nome, email: data.email, password: data.senha}).then(_resp => {
            navigation.navigate('Login')
            Alert.alert('Minhas Tarefas', 'Usuário criado com sucesso')
        }).catch(_err => {
            Alert.alert('Minhas Tarefas', 
                        'Ocorreu um erro ao criar seu usuário, tente novamente mais tarde.', 
                        [{ text: 'OK' }], 
                        { cancelable: true })
        })
    }

    return (
        <React.Fragment>
            <View style={GlobalStyles.container}>
                {/* <Text style={styles.tituloText}>Registre-se</Text> */}

                <TextInput placeholder="Nome" 
                    style={GlobalStyles.input} onChangeText={field('nome')}/>

                <TextInput placeholder="E-mail"
                    style={GlobalStyles.input} keyboardType="email-address" onChangeText={field('email')}/>

                <TextInput placeholder="Senha" 
                    style={GlobalStyles.input} secureTextEntry={true} onChangeText={field('senha')} />

                <TextInput placeholder="Confirmar senha"
                    style={GlobalStyles.input} secureTextEntry={true} onChangeText={field('confirmarSenha')} />

                <TouchableOpacity style={styles.btnRegistrar} onPress={addAction}>
                    <Text style={styles.btnRegistrarText}>Registrar</Text>
                </TouchableOpacity>

                {/* <View style={styles.buttons}>
                    <TouchableOpacity style={styles.btnCancelar} onPress={() => navigation.goBack()}>
                        <Text style={styles.btnCancelarText}>Cancelar</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    tituloText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        padding: 20
    },
    // buttons: {
    //     marginTop: 15
    // },
    btnRegistrar: {
        backgroundColor: '#059669',
        width: '90%',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        borderRadius: 5
    },
    btnRegistrarText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#D1FAE5'
    },
    // btnCancelar: {
    //     backgroundColor: '#059669',
    //     width: '40%',
    //     alignItems: 'center',
    //     padding: 10,
    //     marginTop: 10,
    //     borderRadius: 5
    // },
    // btnCancelarText: {
    //     fontSize: 14,
    //     fontWeight: '500',
    //     color: '#D1FAE5'
    // }
})
