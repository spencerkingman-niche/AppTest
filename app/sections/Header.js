import React from 'react';
import { AsyncStorage, Alert, StyleSheet, Text, View, Image } from 'react-native'
import { Font } from 'expo'

export class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            loggedUser: false,
            loading: true,
        }
    }

    toggleUser = () => {
        if (this.state.isLoggedIn) {
            AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                this.setState({
                    isLoggedIn: false, 
                    loggedUser: false
                })
                Alert.alert('User logged out')
            })
        } else {
            this.props.navigate('LoginRT')
        }
    }

    async componentWillMount() {
        await Font.loadAsync({
            'open-sans-semi-bold': require('../../assets/fonts/Open_Sans/OpenSans-SemiBold.ttf'),
        })
        this.setState({ loading: false });
    }

    componentDidMount(){
        AsyncStorage.getItem('userLoggedIn', (err, result) => {
            console.log(result)
            if (result==='none'){
                console.log('NONE')
            } else if (result === null) {
                AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                    console.log('Set user to NONE')
                })
            } else {
                this.setState({
                    isLoggedIn: true, 
                    loggedUser: result,
                })
            }
        })
    }
    
    render() {
        let display = this.state.isLoggedIn ? this.state.loggedUser : this.props.message
        if (this.state.loading) {
            return(
                <View style={ styles.container }>
                    <Text>Loading...</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.headStyle}>
                    <Image
                        style={styles.logoStyle}
                        source={ require('./img/tv.jpg')}
                    />
                    <Text
                        style={styles.headText}
                        onPress={this.toggleUser}>{display}
                    </Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    headText: {
        textAlign: 'right', 
        color: '#ffffff',
        fontFamily: 'open-sans-semi-bold',
        fontSize: 20,
        flex: 1
    },
    headStyle: {
        paddingTop: 40,
        paddingRight: 10,
        backgroundColor: '#356076',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#000000'
    },
    logoStyle: {
        width: 30,
        height: 30,
        marginLeft: 10,
    }
})