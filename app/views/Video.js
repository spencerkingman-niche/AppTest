import React from 'react';
import { Text, View, FlatList, Image, TouchableWithoutFeedback } from 'react-native'
import { YOU_TUBE_API_KEY } from '../../development.config.js'
export class Video extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state={listLoaded: false}
    }

    componentDidMount(){
        return fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=PLjsNGJnIwfSdghWVTqjpKd-j8nJPbMQh2&key=${YOU_TUBE_API_KEY}`)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                listLoaded: true,
                videoList: Array.from(responseJson.items)
            })
        })
        .catch((error) => {
            console.error(error)
        })
    }

    render() {
        const { navigate } = this.props.navigation
        return(
            <View>
                { this.state.listLoaded && (
                    <View style={{ paddingTop:30}}>
                        <FlatList 
                            data={ this.state.videoList }
                            keyExtractor={(item, i) => i.toString()}
                            renderItem={({item}) => 
                                <TubeItem
                                    key={item.id.videoId}
                                    navigate={navigate}
                                    id={item.id.videoId}
                                    title={item.snippet.title}
                                    imageSrc={item.snippet.thumbnails.high.url}
                                /> 
                            }
                        />
                    </View>
                )}

                { !this.state.listLoaded && (
                    <View style={{ paddingTop: 30}}>
                        <Text> LOADING </Text>
                    </View>
                )}

            </View>
        )
    }
}

export class TubeItem extends React.Component {

    onPress = () => {
        this.props.navigate('VideoDetailRT', {ytubeId: this.props.id} )
    }

    render() {
        return(
            <TouchableWithoutFeedback onPress={this.onPress}>
                <View style={{ paddingTop: 20, alignItems: 'center'}}>
                    <Image
                        style={{width: '80%', height: 200}}
                        source={{ uri: this.props.imageSrc }}
                    />
                    <Text style={{width: '80%', padding: 5, fontSize: 14,}}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}