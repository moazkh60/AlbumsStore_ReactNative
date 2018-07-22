import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// Album detail functional component to style individual albums
const AlbumDetail = ({album}) => {
    const { title, artist, thumbnail_image, image } = album;
    const { headerContentStyle,
         thumbnailStyle,
         thumbnaiContainerStyle,
         headerTextStyle,
         imageStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View style = {thumbnaiContainerStyle}>
                    <Image style = {thumbnailStyle}
                    source={{uri: thumbnail_image}} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{uri: image}} />
            </CardSection>
        </Card> 
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyConent: 'space-around'
    },

    headerTextStyle: {
        fontSize: 18
    },

    thumbnailStyle: {
        width: 50,
        height: 50
    },

    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },

    thumbnaiContainerStyle: {
        justifyConent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};

export default AlbumDetail;