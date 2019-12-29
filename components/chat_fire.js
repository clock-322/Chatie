import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  Dimensions,
  TextInput,
  FlatList,
  Button,
  AsyncStorage
} from 'react-native';
import firebaseSvc from '../firebaseSDK'
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      f_id:'',
      f_name:'',
      f_email:'',
      u_id:'',
      u_name:'',
      u_email:'',
      text:'',
      chatData:[],
      data: [
        {id:1, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit amet"},
        {id:2, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit amet"} ,
        {id:3, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
        {id:4, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
        {id:5, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 
        {id:6, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 
        {id:7, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
        {id:8, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
        {id:9, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a mesaddsat"},
      ]
    }
  }

  componentWillMount=()=>{
      firebaseSvc.refOn().then((solve)=>{
        this.setState({chatData:solve})
      }).then(()=>{
        let data=this.state.chatData
      }).catch((fail)=>{
        console.log(fail)
      })
      this.retrieveData()
  }

  retrieveData = async() => {
      let fid = this.props.navigation.getParam('fid')
      let fname = this.props.navigation.getParam('fname')
      let femail = this.props.navigation.getParam('femail')
      let uid = this.props.navigation.getParam('uid')
      let uname = this.props.navigation.getParam('uname')
      let uemail = this.props.navigation.getParam('uemail')
      /*  const uid = await AsyncStorage.getItem('uid');
        const uname = await AsyncStorage.getItem('userName');
        const uemail = await AsyncStorage.getItem('email');
        */
      console.log('this is user data==>  '+uid+'   '+uname+'   '+'   '+uemail)
      this.setState({
        f_email:femail,
        f_id:fid,
        f_name:fname,
        u_id:uid,
        u_name:uname,
        u_email:uemail
      }) 
    }

  onSend=()=>{
        this.textInput.clear()
        firebaseSvc.send(
            this.state.f_id,
            this.state.f_email,
            this.state.text,
            this.state.u_id,
            this.state.u_email,
            this.state.u_name
          )
        console.log(
          'fid  '+this.state.f_id+
          '  femail  '+this.state.f_email+
          '  text '+this.state.text+
          '  uid  '+this.state.u_id+
          '  uemail  '+this.state.u_email+
          '  ename  '+this.state.u_name
        )
        firebaseSvc.refOn().then((solve)=>{
          this.setState({chatData:solve})
        }).then(()=>{
          let data=this.state.chatData
        }).catch((fail)=>{
          console.log(fail)
        })
    }

  renderDate = (date) => {
    return(
      <Text style={styles.time}>
        {date}
      </Text>
    );
  }

  render() {
    let Data=this.state.chatData 
    let chats=Data.map((c_data)=>{
          if(this.state.f_id==c_data.fid && this.state.u_id==c_data.user.uid || this.state.f_id==c_data.user.uid && this.state.u_id==c_data.fid){
              if(this.state.u_id==c_data.user.uid){
                  return(
                    <View   style={{
                      backgroundColor:"#91d0fb",
                      //padding:15,
                      marginLeft:'50%',
                      borderRadius:4,
                      marginBottom:20, 
                      width:'50%',
                      maxWidth: 500,
                      padding: 15,
                      borderRadius: 20,
                      }}>  
                    <Text style={{fontSize:16,color:"#000" }}> {c_data.text}</Text>
                    </View>
                  )
              }else{
                  return(
                    <View   style={{
                      backgroundColor:"#dedede",
                      //padding:15,
                      borderRadius:4,
                      marginBottom:20, 
                      width:'50%',
                      maxWidth: 500,
                      padding: 15,
                      borderRadius: 20,
                      }}>             
                          <Text style={{fontSize:16,color:"#000" }}> {c_data.text}</Text>
                    </View>
                  )
              }
          }
      }) 

    return (
        <View style={styles.container}>
            <View style={{
                height:screenHeight - 150,
                marginVertical: 20,
                flex: 1,
                flexDirection: 'row',
                backgroundColor:"#eeeeee",
                borderRadius:10,
                padding:0,
              }}>
              <ScrollView>       
                  {chats} 
              </ScrollView>
            </View>
            <View style={styles.footer}>
                <View style={styles.inputContainer}>
                  <TextInput style={styles.inputs}
                      placeholder="Write a message..."
                      underlineColorAndroid='transparent'
                      ref={input => { this.textInput = input }}
                      onChangeText={(msg) => this.setState({text:msg})}/>
                </View>
                <TouchableOpacity style={styles.btnSend} onPress={this.onSend}>
                    <Image source={{uri:"https://png.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  />
                </TouchableOpacity>
            </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  list:{
    paddingHorizontal: 17,
  },
  footer:{
    flexDirection: 'row',
    height:60,
    backgroundColor: '#eeeeee',
    paddingHorizontal:10,
    padding:5,
  },
  btnSend:{
    backgroundColor:"#00BFFF",
    width:40,
    height:40,
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
  },
  iconSend:{
    width:30,
    height:30,
    alignSelf:'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:40,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    marginRight:10,
  },
  inputs:{
    height:40,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  balloon: {
    maxWidth: 500,
    padding: 15,
    borderRadius: 20,
    
  },
  itemIn: {
    alignSelf: 'flex-start'
  },
  itemOut: {
    alignSelf: 'flex-end'
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize:12,
    color:"#808080",
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    backgroundColor:"#eeeeee",
    borderRadius:50,
    padding:5,
  },
})