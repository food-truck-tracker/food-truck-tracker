import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Button,
    TextInput
}  from 'react-native';

export default class Registerform extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            full_name: "",
            username: "",
            email: "",
            password: "",
            re_password: ""
        };
    }
    render(){
        return(
            <View>
                <Text>Name</Text>
                <TextInput
                    autoCorrect = {false}
                    placeholder = "Enter full name..."
                    value = {this.state.full_name}
                    onChangeText = {full_name => this.setState({full_name})}
                />
                <Text>Username</Text>
                <TextInput
                    autoCorrect = {false}
                    placeholder = "Enter username..."
                    value = {this.state.username}
                    onChangeText = {username => this.setState({username})}
                /> 
                <Text>Email</Text>
                <TextInput
                    autoCorrect = {false}
                    placeholder = "Enter email..."
                    value = {this.state.email}
                    onChangeText = {email => this.setState({email})}
                    />
                <Text>Password</Text>
                <TextInput
                    autoCorrect = {false}
                    placeholder = "Enter password..."
                    value = {this.state.password}
                    onChangeText = {password => this.setState({password})}
                />
                <Text>Reenter Password</Text>
                <TextInput
                    autoCorrect = {false}
                    placeholder = "Reenter password..."
                    value = {this.state.re_password}
                    onChangeText = {re_password => this.setState({re_password})}
                />

                 <Button
                  title="Go back"
                  onPress={() => {
                    this.props.changeView('root');
                  }}
                 />
            </View>

        );

    }
}


const styles = StyleSheet.create({
   container : {
       backgroundColor: '#455a64',
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   },
   
   inputBox: {
       width: 300,
       backgroundColor: 'rgba(255, 255, 255, 0.3)'
   }
});