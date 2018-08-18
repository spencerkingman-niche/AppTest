import React from 'react'
import { StyleSheet, ScrollView, Text, Image } from 'react-native'

const aboutGlobo = 'February 1998, the Serbian province of Kosovo descended into civil war. For two years, the Albanian nationalist Kosovo Liberation Army (KLA) had conducted a low-level guerilla campaign against Serbian military police in the province. In response, Serbian forces gradually escalated their counterinsurgency efforts, targeting villages in remote rural regions and along the Albanian border.'

const whatGlobo = 'As police raids, assaults, and executions against suspected KLA sympathizers increased, support for the once-marginal guerilla group grew.'

export class About extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return ( 
            <ScrollView style={styles.container}>
                <Image style={styles.pics} source={require('../sections/img/arch640.jpg')}/>

                <Text style={styles.aboutTitle}>Who We Are</Text>
                <Text style={styles.aboutText}>{aboutGlobo}</Text>

                <Image style={styles.pics} source={require('../sections/img/computer640.jpg')}/>

                <Text style={styles.aboutTitle}>What We Do</Text>
                <Text style={styles.aboutText}>{whatGlobo}</Text>
                <Text onPress={() => this.props.navigation.goBack()} style={styles.backButton}>GO BACK</Text>
            </ScrollView>     
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 30,
        backgroundColor: '#ffffff',
    },
    pics: {
        height: 300,
        alignSelf: 'center',
    },
    aboutText: {
        paddingBottom: 30,
    },
    aboutTitle: {
        fontSize: 20,
        paddingTop: 10,
        textAlign: 'center',
    },
    backButton: {
        paddingBottom: 50,
        textAlign: 'center',
    }
})