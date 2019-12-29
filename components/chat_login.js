//file:///C:/Users/alpha/Downloads/xbbmox_abstract-wallpapers-good-background-images-for-login-page.html
import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,TextInput,Image,ImageBackground,ScrollView,AsyncStorage} from 'react-native'
import firebaseSvc from '../firebaseSDK'


export default class Login extends Component{
    
    static navigationOptions = {
        title: 'Scv Chatter',
      };
    constructor(){
     super()
      this.state = {
        name: '',
        email: '',
        password: '',
       user_Data:'',
       uid:'',
       username:'',
       uemail:''
      };
    }

  onPressLogin = async () => {
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            avatar: this.state.avatar,
          }
        const response = firebaseSvc.login(
            user,
            this.loginSuccess,
            this.loginFailed,
          )
        this.Data_match()
      }
    
  Data_match=()=>{
      firebaseSvc.loginData().then((solve)=>{
          this.setState({user_Data:solve})
        }).then(()=>{
          let x=this.state.user_Data
          this.setState({
              uid:x.uid,
              userName:x.displayName,
              uemail:x.email
            })
          /* AsyncStorage.setItem('uid', x.uid)
          AsyncStorage.setItem('userName', x.displayName)
          AsyncStorage.setItem('email', x.email) */
        }).catch((fail)=>{
          console.log('not getting data..............................................')
        }) 
      }
    
  loginSuccess = async () => {
    this.props.navigation.navigate('Users', {
        name: this.state.name,
        email: this.state.email,
        avatar: this.state.avatar,
        uid:this.state.uid,
        userName:this.state.userName,
        uemail:this.state.email
      })
        console.log(
          'uid=> '+this.state.uid+
          '  username=> '+this.state.userName+
          '  useremail=> '+this.state.uemail
        )
        console.log('this is the name==>  ')
      }
      loginFailed = () => {
        console.log('login failed ***');
        alert('Login failure. Please tried again.');
      }
  onChangeTextEmail = email => this.setState({ email });
  onChangeTextPassword = password => this.setState({ password });
    
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
                                        secureTextEntry
                                        onChangeText={this.onChangeTextPassword}
                                        value={this.state.password}
                                        /> 
                            
                            <TouchableOpacity style={styles.buttonContainer} onPress={this.onPressLogin}>
                                <Text  style={styles.buttonText}>LOGIN</Text>
                            </TouchableOpacity> 
                                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate("Sinup")}>
                                    <Text  style={styles.buttonText}>CREATE ACCOUNT NOW</Text>
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
        buttonPadding: {
        padding: 10,
        },
    input:{
           height: 40,
           backgroundColor: '#e3f8fa',
           marginBottom: 10,
           padding: 10,
           color: '#000505'
       },
    buttonContainer:{
        paddingTop:20,
           backgroundColor: '#2980b6',
           paddingVertical: 15,
           marginBottom: 15,
       },
    buttonText:{
           color: '#fff',
           textAlign: 'center',
           fontWeight: '700'
       }
})