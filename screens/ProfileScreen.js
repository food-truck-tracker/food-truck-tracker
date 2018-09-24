import React from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

export default class ProfileScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            view: 'root'
        }
    }

    _changeView = view => {
        this.setState({ view })
    }

    _chooseRender = () => {
        if(this.state.view == 'register') {
            return (
                // <View>
                    // <Text>REGISTER</Text>
                // </View>
                <RegisterForm />
            )
        } else if (this.state.view == 'login') {
            return (
                <LoginForm changeView={this._changeView} />
            )
        } else {
            return (
                <View>
                    <Text>Profile</Text>
                    <Button 
                        title="Login"
                        onPress={ () => {
                            this.setState({ view: 'login' })
                        }}
                    />
                    <Button 
                        title="Register"
                        onPress={ () => {
                            this.setState({ view: 'register' })
                        }}
                    />
                </View>
            )
        }
    }

    render() {
        return (
            <View>
                { this._chooseRender() }
            </View>
        )
    }
}