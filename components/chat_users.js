import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    AsyncStorage,
   TextInput
  } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
import firebaseSvc from '../firebaseSDK'


export default class Users extends Component {
  constructor(){
    super()
    this.state={
      auth_data:[],
      uid:'',
      uname:'',
      uemail:''
    }
  }
  componentWillMount=()=>{
   this._retrieveData()  
    this.User_data()
  }

  _retrieveData = async () => {
    let u_id = this.props.navigation.getParam('uid')
    let u_name = this.props.navigation.getParam('userName')
    let u_email = this.props.navigation.getParam('uemail')
    this.setState({
          uid:u_id,
          uname:u_name,
          uemail:u_email
       })
    }

  componentDidMount=()=>{
    console.log(
      'uid2=> '+this.state.uid+
      '  username2=> '+this.state.uname+
      '  useremail2=> '+this.state.uemail
    )
  }


  User_data=()=>{
    firebaseSvc.usersData().then((solve)=>{
        this.setState({auth_data:solve})
    }).catch((fail)=>{
      console.log('not getting data')
    })
  }

  render() {
    let Data=this.state.auth_data
    let User=Data.map((u_data)=>{
        return(
          <View style={styles.backarrow}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('ChatRoom',{
                    uemail:this.state.uemail,
                    uid:this.state.uid,
                    uname:this.state.uname,
                    fid:u_data.uid,
                    fname:u_data.name,
                    femail:u_data.email
                })}>
                <View style={styles.list}  >
                      <View  style={ styles.forwidth_left}> 
                            <TouchableOpacity >
                                <Image style={{ 
                                  width: 70, 
                                  height: 70,
                                    borderRadius:87, 
                                    position:'absolute', 
                                    top:0, 
                                    left:0 
                                  }} source={require('../assets/images/no_image.jpg')} />
                            </TouchableOpacity>
                        </View>
                      <View style={ styles.forwidth_right}> 
                        <Text style={ styles.price}> {u_data.name}</Text>
                          <Text style={ styles.carname}> {u_data.email}</Text> 
                      </View>
                  </View>
              </TouchableOpacity>
            </View>

        )
      })
    return (
      <View style={styles.container}>
          <TouchableOpacity>
              <View style={styles.top_header}  >
                    <TouchableOpacity>
                      <Image style={styles.nav_icon} source={require('../assets/images/nav.png')} />
                    </TouchableOpacity> 
                    <TouchableOpacity>
                        <View style={styles.search_header} >
                            <Image style={styles.search_icon} source={require('../assets/images/search.png')} />
                            <TextInput  style={styles.search_box} 
                            keyboardType='web-search'
                            placeholder='search name'/>
                        </View> 
                    </TouchableOpacity> 
                </View>
          </TouchableOpacity>	
          <View style={styles.home_padding}>
              <ScrollView>
                  {User}
              </ScrollView>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  backarrow: {
    paddingBottom: 50,
    flexDirection: 'row',
  },
  top_header: {
    backgroundColor: "#ffffff",
    padding:10,
    flexDirection: 'row',
},
nav_icon: {
    width:40,
    height:40,
},
search_header: {
    width: screenWidth - 100,
    flexDirection: 'row',
},
search_icon: {
    width:30,
    height:30,
    margin:5,
},
search_box: {
    //height: 40,
    paddingTop: 10,
    //paddingBottom: 5,
    borderBottomColor: '#fff',
    color:'#000000',
    fontSize: 15,
    opacity:1,
    width: screenWidth - 200,
    borderBottomWidth: StyleSheet.hairlineWidth,
    //fontFamily:"Poppins"
},
home_padding: {
    padding:10,
    backgroundColor: "#ffffff",	
    flex: 1
},
list_img: {
    width:'100%',
    height:115,
    marginRight: 4,
    borderTopLeftRadius:8,
    borderTopRightRadius:8,
},
forwidth_left:{
         width:'30%',
         //paddingBottom:30
    },
    forwidth_right:
    {width:'50%'
},
price:{color: '#0b85bd',fontSize: 18, /* paddingTop:20 */}, 
carname:{color: '#010000',fontSize: 10,}, 
     list_img: {
		width:'100%',
		height:115,
		marginRight: 4,
		borderTopLeftRadius:8,
		borderTopRightRadius:8,
    },
    list:{
      width: '100%',
    flexDirection: 'row',
    borderBottomColor:'#e3e3e1',
     // borderBottomWidth:2 ,
     paddingTop:0,
    paddingBottom:0,
    
		//marginTop: 3,
		//width: screenWidth / 2 - 30,
		//marginRight: 20		
	},
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})