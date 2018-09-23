import React from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';

export default class LoginForm extends React.Component {
    render() {
        return (
            <View>
                <Text>Login</Text>
                <Button 
                    title="Go back"
                    onPress={() => {
                        this.props.changeView()
                    }}
                />
            </View>
        )
    }
}