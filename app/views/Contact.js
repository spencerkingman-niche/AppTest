import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native'
import { Header } from '../sections/Header.js'
import { stackNavigator } from 'react-navigation'
import Button from './Button'

export class Contact extends React.Component {
    
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state={
            msg: 'Enter Message',
            name: 'Enter Name',
            email: 'Enter your Email Address',
        }
    }

    cancel = () => {
        this.props.navigation.navigate('HomeRT')
    }

    clearFields = () => this.setState({name: '', msg: '', email: ''})

    sendMessage = () => {
        Alert.alert(this.state.name, this.state.msg)
        this.props.navigation.goBack()
    }

    render() {
        const { navigate } = this.props.navigation
        return(
            <View style={styles.mainContainer}>
                <Header navigate={navigate} message="Press to Login"/>
                <View style={styles.contentContainer}>
                    <Text style={styles.heading}>Contact Us</Text>
                    <TextInput
                        style={styles.inputs}
                        onChangeText={(text) => this.setState({name: text})}
                        underlineColorAndroid="transparent"
                        value={this.state.name}
                    />
                    <TextInput
                        style={styles.multiInput}
                        onChangeText={(text) => this.setState({msg: text})}
                        underlineColorAndroid="transparent"
                        value={this.state.msg}
                        multiline={true}
                        nmberOfLines={4}
                    />
                    <TextInput
                        style={styles.inputs}
                        onChangeText={(text) => this.setState({email: text})}
                        underlineColorAndroid="transparent"
                        value={this.state.email}
                    />
                    <View style={styles.buttonContainer}>
                        <Button onPress={this.cancel} label="Go Back" raised> </Button>
                        <Button onPress={this.clearFields} label="Reset Form" raised> </Button>
                        <Button onPress={this.sendMessage} label="Send Message" raised> </Button>
                    </View>
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
    contentContainer: {
        flex: 10,
        alignItems: 'flex-start',
        paddingBottom: '40%',
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: 15,
        backgroundColor: '#efa337',
    },
    heading: {
        fontSize: 24,
        color: '#ffffff',
        fontWeight: 'bold',
        height: 34,
    },
    inputs: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        color: 'rgba(0,0,0,0.3)',
        height: 42,
        marginBottom: 10,
        paddingLeft: 10,
        width: '100%',
    },
    mainContainer: {
        flex: 1,
    },
    multiInput: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        color: 'rgba(0,0,0,0.3)',
        flex: 2,
        marginBottom: 10,
        paddingLeft: 10,
        paddingTop: 10,
        textAlignVertical: 'top',
        width: '100%',
    },
})
