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

export class Login extends Component {

    static navigationOptions = {
        header: null
    }    

    constructor(props) {
        super(props)
        this.state = {
            username: '', 
            passwrd: '',
        }
    }

    cancelLogin = () => {
        Alert.alert('Login cancelled')
        this.props.navigation.navigate('HomeRT')
    }

    loginUser = () => {
        if (!this.state.username) {
            Alert.alert('Please enter a username')
        } else if (!this.state.passwrd) {
            Alert.alert('Please enter a password')
        } else {
            AsyncStorage.getItem('userLoggedIn', (err, result) => {
                if (result !== 'none'){
                    Alert.alert('Someone already logged on')
                    this.props.navigation.navigate('HomeRT')
                } else {
                    AsyncStorage.getItem(this.state.username, (err, result) => {
                        if (result!==null) {
                            if (result!==this.state.passwrd) {
                                Alert.alert('Password incorrect')
                            } else {
                                AsyncStorage.setItem('userLoggedIn', this.state.username, (err, result) => {
                                    Alert.alert(`${this.state.username} Logged in`)
                                    this.props.navigation.navigate('HomeRT')
                                })
                            }
                        } else {
                            Alert.alert(`No account for ${this.state.username}`)
                        }
                    })
                }
            })
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.heading}>Login</Text>

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
                
                <View style={styles.buttonContainer}>
                    <Button onPress={this.cancelLogin} label="Cancel" raised> </Button>
                    <Button onPress={this.loginUser} label="Login" raised> </Button>
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
    }
})