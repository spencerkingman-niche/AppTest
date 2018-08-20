import React, { Component } from 'react'
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert,
    AsyncStorage,
} from 'react-native'
import Button from './Button'

export class Register extends Component {

    static navigationOptions = {
        header: null
    }    

    constructor(props) {
        super(props)
        this.state = {
            username: '', 
            passwrd: '',
            passwrdConfirm: '',
        }
    }

    cancelRegister = () => {
        Alert.alert('Registration cancelled')
        this.props.navigation.navigate('HomeRT')
    }

    registerAccount = () => {
        if (!this.state.username){
            Alert.alert('Please enter a username')
        } else if (this.state.passwrd !== this.state.passwrdConfirm){
            Alert.alert('Passwords do not match')
        } else {
            AsyncStorage.getItem(this.state.username, (err, result) => {
                if(result!==null){
                    Alert.alert(`${this.state.username} already exists`)
                } else {
                    AsyncStorage.setItem(this.state.username, this.state.passwrd, (err, result) => {
                        Alert.alert(`${this.state.username} account created`)
                        this.props.navigation.navigate('HomeRT')
                    })
                }

            })
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Register Account</Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({username: text})}
                    underlineColorAndroid="transparent"
                    value={this.state.username}
                />
                <Text style={styles.label}>Enter Username</Text>

                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({passwrd: text})}
                    underlineColorAndroid="transparent"
                    value={this.state.passwrd}
                    secureTextEntry={true}
                />
                <Text style={styles.label}>Enter Password</Text>

                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({passwrdConfirm: text})}
                    underlineColorAndroid="transparent"
                    value={this.state.passwrdConfirm}
                    secureTextEntry={true}
                />
                <Text style={styles.label}>Confirm Password</Text>
                <View style={styles.buttonContainer}>
                    <Button onPress={this.cancelRegister} label="Cancel" raised> </Button>
                    <Button onPress={this.registerAccount} label="Login" raised> </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        paddingTop: 10,
    },
    container: {
        flex: 1,
        alignItems: 'flex-start',
        paddingBottom: '45%',
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '10%',
        backgroundColor: '#efa337',
    },
    heading: {
        fontSize: 24,
        color: '#ffffff',
        fontWeight: 'bold',
        height: 75,
    },
    inputs: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        height: 42,
        paddingLeft: 10,
        width: '100%',
    },
    label: {
        color: '#ffffff',
        paddingBottom: 5,
        // paddingLeft: 10,
        paddingTop: 3,
    },
})