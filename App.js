import React,{Component} from 'react'
import { createStackNavigator } from "react-navigation-stack";
import {  createAppContainer } from "react-navigation";

import Login from './components/chat_login'
import Sinup from './components/chat_sinup'
import Users from './components/chat_users'
import ChatRoom from './components/chat_fire'

const AppNavigator = createStackNavigator(
	{   
    Login:Login,
	Sinup:Sinup,
    Users:Users,
    ChatRoom:ChatRoom,
	}, 
	{
		headerMode: 'none',
		navigationOptions: {
		headerVisible: false,
	}
	},
	{
		initialRouteName: "Login"
	}
);
const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component{
  render(){
    return <AppContainer/>
  }
}

