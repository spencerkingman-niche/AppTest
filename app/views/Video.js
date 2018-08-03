import React from 'react';
import { Text, View, FlatList, Image, TouchableWithoutFeedback } from 'react-native'

export class Video extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state={listLoaded: false}
    }
}