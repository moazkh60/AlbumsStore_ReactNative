import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, buttonText}) => {
    const {buttonStyle, textStyle} = style;

    return(
        <TouchableOpacity onPress={onPress} style = {buttonStyle}>
            <Text style = {textStyle} >{buttonText}</Text>
        </TouchableOpacity>
    );
}

const style = {
    textStyle: {
        alignSelf: 'center',
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }, 

    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#ff4d4d',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ff4d4d',
        marginLeft: 5,
        marginRight: 5
    }
}

export default Button;