import React, { Component } from "react";
import { View, Text } from "react-native";
// import the firebase third party lib
import firebase from "firebase";
// Custom Components to be used in the app
import {
Header,
CustomButton,
CardSection,
Card,
Spinner
} from "./components/common";
// Import our LoginForm component to be displayed on the screen
import LoginForm from "./components/LoginForm";

class App extends Component {
state = { loggedIn: null };
// Life cycle method to init the firebase
componentWillMount() {
firebase.initializeApp({
    apiKey: "AIzaSyBUBtpfUqDBq2wpjDUJxNjy2FtYkJg9OJI",
    authDomain: "exam-c8e95.firebaseapp.com",
    databaseURL: "https://exam-c8e95.firebaseio.com",
    projectId: "exam-c8e95",
    storageBucket: "",
    messagingSenderId: "830528922780",
    appId: "1:830528922780:web:610f11260179f281"
});

//Handle the Application when it's logged in or logged out
firebase.auth().onAuthStateChanged(user => {
if (user) {
this.setState({ loggedIn: true });
} else {
this.setState({ loggedIn: false });
}
});
}

renderContent() {
switch (this.state.loggedIn) {
case true:
return (
<Card>
<CardSection>
<CustomButton onPress={() => firebase.auth().signOut()}>
Logout
</CustomButton>
</CardSection>
</Card>
);
case false:
return <LoginForm />;
default:
return <Spinner size="large" />;
}
}
render() {
return (
<View>
<Header headerText="Signup and login" />
<Text>
            Name: M.Yasir Shakeel
            experience: Fresh
            Education:
            Matric: The Karachi Boys Academy
            College: SM science College
            University : Maju
          </Text>
{this.renderContent()}
{/* 
Before the renderContent Handling
<LoginForm /> */}
</View>
);
}
}

export default App;