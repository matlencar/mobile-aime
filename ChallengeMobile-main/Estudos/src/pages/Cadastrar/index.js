import { useNavigation } from "@react-navigation/core";
import React,  { useState } from "react";
import { View, Text, StyleSheet, TextInput,TouchableOpacity } from "react-native";
import DatePicker from "react-datepicker";

import * as Animatable from 'react-native-animatable'

export default function CadastrarScreen() {
   
    const navigateToOtherScreen = () => {
        navigation.navigate('Login');
      };
      const navigation = useNavigation();
      
        const [nome, setNome] = useState('');
        const [email, setEmail] = useState('');
        const [rg, setRg] = useState('');
        const [cpf, setCpf] = useState('');
        const [dataNascimento, setDataNascimento] = useState('')
        const [senha, setSenha] = useState("");
       

        
    
        async function handleRegister () {
          try {
              const response = await fetch('', {
                method: 'POST',
                headers: {
                  
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome, email , rg, cpf, dataNascimento, senha}),
              })
    
              if (response.status === 201) { 
                const data = await response.json();
                setNome(data.nome);
                setEmail(data.email);
                setRg(data.rg);
                setCpf(data.cpf);
                setDataNascimento(data.DataNascimento);
                setSenha(data.Senha);
                
                console.log("Cadastro realizado com sucesso - 201", data);
                alert("Cadastro realizado com sucesso - 201");
                navigation.navigate("Login", { nome, email, rg, cpf, dataNascimento, senha,});
                } else {
                alert('Erro - 400, tente novamente', response.status);
                }
                } catch(error) {
                console.log("erro durante a requisição ", error);
                alert("Ocorreu um erro durante a requisição")
                }
            
        }
    
    return (
        <View style = {styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Cadastro</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Nome</Text>
                <TextInput
                    placeholder="Digite seu nome" style={styles.input} onChangeText={(text) => setNome(text)}
                />

                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite seu email" style={styles.input} onChangeText={(text) => setEmail(text)}
                />
                <Text style={styles.title}>RG</Text>
                <TextInput
                    placeholder="Digite seu RG"
                    style={styles.input} onChangeText={(text) => setRg(text)}
                />
                <Text style={styles.title}>CPF</Text>
                <TextInput
                    placeholder="Digite seu cpf"
                    style={styles.input} onChangeText={(text) => setCpf(text)}
                />
                <Text style= {styles.title}>Data de Nascimento</Text>
                <DatePicker style={styles.dataStyle}
                    
                    selected={dataNascimento}
                    onChange={date => setDataNascimento(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholder="Data de nascimento"
                    
                />
                <Text style= {styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite uma Senha"
                    style={styles.input} 

                />
                

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={navigateToOtherScreen}>
                    <Text style={styles.RegisterText}>Possui uma conta? faça o login</Text>
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
    },
    dataStyle:{
        borderBottomWidth:1,
        height:40,
        marginBottom:12,
        fontSize:16,
        color:'#FFF'
    }
})