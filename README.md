## React Native expo
Expo is a framework and a platform for universal React applications. It is a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase.
The fastest way to build an app.With Expo tools, services, and React, you can build, deploy, and quickly iterate on native Android, iOS, and web apps from the same JavaScript codebase.
* Access to device capabilities like camera, location, notifications, sensors, haptics, and much more, all with universal APIs.
* Build service gives you app-store ready binaries and handles certificates, no need for you to touch Xcode or Android Studio.
* Over-the-air updates let you update your app at any time without the hassle and delays of submitting to the store.

# Chat System
This is the one to one chat system mobile application built on React native expo and google firebase.It is functional in both android and ios devices.To do this expo framework is used.

## How this chat system is different from other chat applications
* - [You will find chat system Tutorial built on react native expo with Google Firebase](https://blog.expo.io/how-to-build-a-chat-app-with-react-native-3ef8604ebb3c) on web but you can use that method  if you want ot make a group chat system you can not experience a one to one chat like whatsapp but in my application you can experience that feature you can talk to whom you want to talk with that can be completely a stranger or can be you friend.
* - Chat system is fast due to realtime updation of chat details you are getting and posting.
* - No heavy tool like Android Studio or any other tool is used to make this application you dont need to depend on these heavy tools which take extra efforts and this all because of react native expo.
* - It can be used in Android devices as well as in IOS devices.


## To make a chat app we will need a few things:
* 1> A server to store all the messages 
* 2> Sinup screen
* 3> Login screen
* 4> Home screen
* 5> Chat Screen
* 6> Post image page

### 1> A server to store all the messages
In this chat system google firebase is used to store the following data:-
#### * user details
* - Google firebase cloud firestore is used to store all the user details who is registering to this allplication
#### * Authentication
* - Google firebase authentication is used to authenticate the user detail.
#### * Chat details
* - Google firebase realtime database is used to store all chat details and realtime updation of chat going on whitin users.
#### * image storage
* - Google firebase storage is used to store all the image data with user details.

### 2> Sinup Screen
Firebase authentication and firebase cloud firestore is used to store all the user details who is registering in our application.
Firebase authentication is enough to make the authentication functionality of our application but i need the details of the user registering in our application on Homepage of our application that is "Home screen"  that's why i have used Firebase cloud firestore to store the details of the registered users.

### 3> Login Screen
Google firebase already contain a authentication module therefore i have used firebase authentication. Whenever a user try to login the application the firebase authentication module gives the output positive or negative.

### 4> Home Screen
On this page all the details of users will be shown who had registred to our application in a list form so a user have a choice to whom user want to chat that can be a friend or a stranger. The user list will be shown with there profile picture to get the profile picture i have used google firebase storage(...........this is part is in progress......).

### 5>Chat Screen
This page is rendered after we select any user to whom current user want to chat. This screen contain last chat details he had with that person and show that details on screen, a typing input box and a send button to send the message to other user he want to chat with. To get and post the details of chat of perticular user i have created a database structure to store all the data which is passing among the two users with there id's and to store all this chat data i have used Google Firebase Realtime Database.
#### And that's all a prototype of a one to one chat system in react native expo have been created...... 

### 6>Post Image Page
................This screen is in development so wait for version 2.0..............................

## RND Links
* [What is React Native Expo](https://docs.expo.io/versions/latest/)
* [Start from here](https://console.firebase.google.com/u/0/)
* [Firebase NPM](https://www.npmjs.com/package/firebase)
* [Firebase authentication](https://firebase.google.com/docs/auth)
* [Firebase Realtime database](https://firebase.google.com/docs/database)
* [Firebase Cloud Firestore ](https://firebase.google.com/docs/firestore)
* [Firebase Storage](https://firebase.google.com/docs/storage)

###..................(SOON A BLOG IS ALSO COMMING OUT IN WHICH I WILL TELL YOU HOW TO MAKE THIS APPICATION ON REACT NATIVE EXPO AND MAKE IT WORK)[https://medium.com/@alphaq1205]..........
