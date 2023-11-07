import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import * as Animatable from 'react-native-animatable'

export default function LoginScreen() {
    
    const navigateToOtherScreen = () => {
        navigation.navigate('Cadastro');
      };
      const navigation = useNavigation();
    
      const [email, setEmail] = useState("");
      const [senha, setSenha] = useState("");
    
      async function handleLogin() {
        try {
          const url = "http://192.168.15.11:8080/api/usuarios/login";
          const response = await fetch(
              url,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",

              },
              body: JSON.stringify({ email, senha }),
            }
          );
    
          if (response.status === 200) {
    
            const data = await response.json();
            setEmail(data.email);
            setSenha(data.senha);
            console.log("Login realizado com sucesso - 200", data);
            alert("Login realizado com sucesso - 200");
            navigation.navigate("TabNav", {email, senha});
    
          } else {
            alert('Erro - 400, tente novamente', response.status);
          }
        } catch (error) {
          console.log("erro durante a requisição ", error);
          alert("Ocorreu um erro durante a requisição")
        }
      }
    return (
        <View style = {styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem Vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite seu Email"
                    style={styles.input} onChangeText={(text) => setEmail(text)}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite sua Senha"
                    style={styles.input} secureTextEntry={true}
                    onChangeText={(text) => setSenha(text)}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={navigateToOtherScreen} >
                    <Text style={styles.RegisterText}>Não possui uma conta? cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#313338'
    },
    containerHeader:{
        marginTop:'14%',
        marginBottom:'8%',
        paddingStart:'5%'
    },
    message:{
        fontSize:28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm:{
        backgroundColor: '#e42b37',
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%',
    },
    input:{
        borderBottomWidth:1,
        height:40,
        marginBottom:12,
        fontSize:16,
        color:'#FFF'
    },
    button:{
        backgroundColor: '#313338',
        width:'100%',
        borderRadius:4,
        paddingVertical:8,
        marginTop:14,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        color:'#FFF',
        fontSize:18,
        fontWeight:'bold'
    },
    buttonRegister:{
        marginTop:14,
        alignSelf:'center'
    },
    RegisterText:{
        color:'#FFF'
    },
    title:{
        color:'#FFF'
    }
})