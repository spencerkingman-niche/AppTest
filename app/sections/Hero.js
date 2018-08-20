import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Swiper from 'react-native-swiper'

export class Hero extends React.Component {
    render() {
        return(
            <View style={{flex: 8}}>
            <Swiper
                style={styles.wrapper}
                height={240}
                index={Math.floor(Math.random() * Math.floor(2))}
                onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                dot={
                    <View 
                        style={{
                            backgroundColor: 'rgba(0,0,0,.2)',
                            width: 4,
                            height: 4,
                            borderRadius: 2,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 3
                        }}
                    />}
                activeDot={
                    <View 
                        style={{
                            backgroundColor: '#ca0',
                            width: 6,
                            height: 6,
                            borderRadius: 3,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 3
                        }} 
                    />}
                paginationStyle={{
                    bottom: 10,
                    left: null,
                    right: 10
                }} 
                loop>
                <Image
                    style={styles.heroImage}
                    source={ require('./img/theda.jpg')}
                />
                <Image
                    style={styles.heroImage}
                    source={ require('./img/sidera.jpg')}
                />
                <Image
                    style={styles.heroImage}
                    source={ require('./img/ramona.jpg')}
                />
            </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    heroImage: {
        width: undefined,
        height: undefined,
        flex: 1,
    },
    wrapper: {

    }
})