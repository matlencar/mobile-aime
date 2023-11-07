import React from "react";
import { View, Text , StyleSheet , Image , TouchableOpacity} from "react-native";

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'
import logo from '../../assets/Logo.png';

export default function Welcome(){
    const navigateToOtherScreen = () => {
        navigation.navigate('Login');
      };
    const navigation = useNavigation();

    return(
      <View style = {styles.container}>

        <View style = {styles.containerLogo}>
            <Image
            source={logo}
            style={{width:'100%'}}
            resizeMode="contain"/>
        </View>

        <Animatable.View delay={600} animation= "fadeInUp" style = {styles.containerForm}>
            <Text style = {styles.title}> Seja bem vindo a sua plataforma de compras inteligente!</Text>
            <Text style = {styles.text}> Faça o login para começar!</Text>

            <TouchableOpacity style={styles.button} onPress={navigateToOtherScreen}>
                <Text style= {styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </Animatable.View> 
      </View>  
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#313338'
    },
    containerLogo:{
        flex:2,
        backgroundColor:'#313338',
        justifyContent:'center',
        alignItems:'center'
    },
    containerForm:{
        flex:1,
        backgroundColor: '#e42b37',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        fontWeight:'bold',
        marginTop:28,
        marginBottom: 12,
    },
    text:{
        color:'#C4C4C4'
    },
    button:{
        position:'absolute',
        backgroundColor:'#313338',
        borderRadius:50,
        paddingVertical:8,
        width:'60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        fontSize:18,
        color:'#FFF',
        fontWeight:'bold'
    },
})