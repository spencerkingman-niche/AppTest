import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native'
import { Font } from 'expo'

export class Menu extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: true,
        }
    }

    async componentWillMount() {
        await Font.loadAsync({
            'open-sans-semi-bold': require('../../assets/fonts/Open_Sans/OpenSans-SemiBold.ttf'),
        })
        this.setState({ loading: false });
    }

    onPress = () => {
        Alert.alert('You tapped the button!')
    }

    render() {
        if (this.state.loading) {
            return(
                <View style={ styles.container }>
                    <Text>Loading...</Text>
                </View>
            )
        } else {
            return(
                <View style={ styles.container }>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigate('SongsRT')}>
                            <Text style={styles.buttonText}>SONGS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigate('RegisterRT')}>
                            <Text style={styles.buttonText}>REGISTER</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigate('BlogRT')}>
                            <Text style={styles.buttonText}>BLOG</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyles} onPress={() =>  this.props.navigate('ContactRT')}>
                            <Text style={styles.buttonText}>CONTACT</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigate('GameRT')}>
                            <Text style={styles.buttonText}>GAME</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigate('AboutRT')}>
                            <Text style={styles.buttonText}>ABOUT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )   

        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: '#35605a'
    },
    buttonRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1,
    },
    buttonStyles: {
        backgroundColor: '#35605a',
        width: '50%',
        height: '50%',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans-semi-bold',
        fontSize: 18,
    }
})
