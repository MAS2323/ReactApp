import React from 'react';
import {View, StyleSheet, Text, Image, TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topImageContainer}>
                <Image source={require("../assets/topVector.png")} style={styles.topImage}/>
            </View>
            <View style={styles.helloContainer}>
                <Text style={styles.helloText}>
                    Hello
                </Text>
            </View>
            <View>
                <Text style={styles.signInText}>Sign in to your account</Text>
            </View>
            <View style={styles.inputContainer}>
              <FontAwesome name="user" size={24} color="#9A9A9A" style={styles.inputIcon} />  
              <TextInput style={styles.TextInput} placeholder='Email'/>
            </View>
             <View style={styles.inputContainer}>
              <FontAwesome name="lock" size={24} color="#9A9A9A" style={styles.inputIcon} />           
              <TextInput style={styles.TextInput} placeholder='Contraseña' secureTextEntry/>
            </View>
            <Text style={styles.forgotPasswordText}>Olvidaste la contraseña?</Text>

            <View style={styles.signInButtonContainer}>
                <Text style={styles.signIn}>Sign in</Text>
            <LinearGradient
                // Button Linear Gradient
                colors={['#F97794', '#623AA2']}
                style={styles.LinearGradient}>
                <FontAwesome name="long-arrow-right" size={24} color="white" />
            </LinearGradient>
            </View>
            <Text style={styles.footerText}>No tiene una cuenta? 
            <Text style={{textDecorationLine: 'underline'}}>Crear cuenta</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#F5F5F5',
        flex: 1
    },
    topImageContainer:{
    

    },
    topImage: {
        width: '100%',
        height: 160
    },
    helloContainer:{
        
    },
    helloText:{
       textAlign: 'center',
       fontSize: 70,
       fontWeight: '500',
       color: '#262626'
    },
    signInText:{
        textAlign: 'center',
        fontSize: 18,
        color: '#262626',
        marginBottom: 30
    },
    inputContainer:{
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderRadius: 20,
        marginHorizontal: 40,
        elevation: 10,
        marginVertical: 20,
        alignItems: 'center',
        height: 50
    },
    inputIcon: {
        marginLeft: 15,
        marginRight: 5
    },
    TextInput:{
        flex: 1
    },
    forgotPasswordText:{
        color: '#BEBEBE',
        textAlign: 'right',
        width:'90%',
        fontSize: 15
    },
    signInButtonContainer:{
        flexDirection: 'row',
        marginTop:120,
        justifyContent: 'center',
        width: '90%',
        justifyContent: 'flex-end'

    },
    LinearGradient:{
        height: 34,
        width: 56,
        borderRadius: 17,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    signIn:{
        color: '#262626',
        fontSize: 25,
        fontWeight: 'bold'
    },
    footerText:{
        color: '#262626',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 120
    }
})

export default LoginScreen;
