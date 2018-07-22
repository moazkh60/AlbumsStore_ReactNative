import React, {Component} from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component{

    // Method called as soon as the album list is about to mount on screen
    componentWillMount(){
        console.log('testing');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => console.log("response is "+response));
    }

    // For rendering album list class
    render(){
        return (
            <View>
                <Text> AlbumList </Text>
            </View>
        );
    }
}

export default AlbumList;