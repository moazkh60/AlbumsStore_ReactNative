import React, {Component} from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{

    // To set initial state
    constructor(props){
        super(props);

        this.state = {albums: []}
    }

    // Method called as soon as the album list is about to mount on screen
    componentWillMount(){
        console.log('testing');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({albums: response.data}));
    }

    // Set albums to screen
    renderAlbums(){
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album}></AlbumDetail>);
    }

    // For rendering album list class
    render(){
        return (
            <ScrollView>
               {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;