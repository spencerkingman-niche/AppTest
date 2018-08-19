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
                    value={this.state.username}
                />
                <Text style={styles.label}>Enter Username</Text>

                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({passwrd: text})}
                    value={this.state.passwrd}
                    secureTextEntry={true}
                />
                <Text style={styles.label}>Enter Password</Text>
                
                <TouchableHighlight onPress={this.loginUser} underlayColor='#31e982'>
                    <Text style={styles.buttons}>
                        Login
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight onPress={this.cancelLogin} underlayColor='#31e982'>
                    <Text style={styles.buttons}>
                        Cancel 
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        paddingBottom: '45%',
        paddingTop: '10%',
        backgroundColor: '#efa337',
    },
    heading: {
        fontSize: 24,
        flex: 1,
        marginLeft: '10%',
        // paddingLeft: 10,
        color: '#ffffff',
    },
    inputs: {
        backgroundColor: '#ffffff',
        flex: 1,
        height: 24,
        marginLeft: '10%',
        width: '80%',
    },
    buttons: {
        backgroundColor: '#ddccde',
        fontSize: 16,
        padding: 10,
        marginLeft: '10%',
        marginTop: 5,
        shadowColor: '#666666',
        shadowOpacity: 0.3,
        width: '100%',
    },
    label: {
        color: '#ffffff',
        marginLeft: '10%',
        paddingBottom: 5,
        // paddingLeft: 10,
        paddingTop: 3,
    }
})