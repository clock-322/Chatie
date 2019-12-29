//file:///C:/Users/alpha/Downloads/xbbmox_abstract-wallpapers-good-background-images-for-login-page.html
import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,TextInput,Image,ImageBackground,ScrollView} from 'react-native'
import firebaseSvc from '../firebaseSDK'

export default class Login extends Component{
    static navigationOptions = {
          title: 'Scv Chatter',
        }
      state = {
        name: 'Alex B',
        email: 'test3@gmail.com',
        password: 'test123',
      }
    
  onPressCreate = async () => {
    this.sinupData()
  }

  sinupData=()=>{
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }
    firebaseSvc.createAccount(user).then((solve)=>{
        console.log('this is sinup data==>  '+JSON.stringify(solve))
    }).catch((fail)=>{
      console.log('not getting data.....................')
    })
  }
    
  onChangeTextEmail = email => this.setState({ email });
  onChangeTextPassword = password => this.setState({ password });
  onChangeTextName = name => this.setState({ name });
    
  render(){
        return(
            <View style={styles.container}>
                <ImageBackground  style={styles.loginbox} source={require('../assets/back_screen.jpg')} >
                        <ScrollView>
                            <View style={styles.padding_btm}>
                                    <TextInput style = {styles.input} 
                                        keyboardType='email-address' 
                                        placeholder='Email or Mobile Num' 
                                        onChangeText={this.onChangeTextEmail}
                                        value={this.state.email}
                                    />
                                    <TextInput style = {styles.input}   
                                        placeholder='Password' 
                                        onChangeText={this.onChangeTextPassword}
                                        value={this.state.password}
                                        />
                                    <TextInput style = {styles.input}   
                                        placeholder='Name'
                                        onChangeText={this.onChangeTextName}
                                        value={this.state.name} 
                                        //secureTextEntry
                                        />
                                    <TouchableOpacity style={styles.buttonContainer} onPress={this.onPressCreate}>
                                        <Text  style={styles.buttonText}>CREATE ACCOUNT</Text>
                                    </TouchableOpacity> 
                            </View>
                        </ScrollView>   
            </ImageBackground>
        </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    }, 
    loginbox:{
         flex: 1,
        borderRadius: 4,
        paddingTop:200,
        paddingBottom:2   
      },
    padding_btm: {
        padding: 20,
        },
    input:{
           height: 40,
           backgroundColor: '#e3f8fa',
           marginBottom: 10,
           padding: 10,
           color: '#000505'
       },
    buttonContainer:{
           backgroundColor: '#2980b6',
           paddingVertical: 15
       },
    buttonText:{
           color: '#fff',
           textAlign: 'center',
           fontWeight: '700'
       }
})