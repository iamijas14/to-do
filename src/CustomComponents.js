//custom components
import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../AppStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const CustomButton = ({onPressHandler, title, color}) => {
  return (
        <TouchableOpacity
            style={[customStyles.button, {backgroundColor: color}]}
            onPress={onPressHandler}
        >
            <Text style={customStyles.text}>
                {title}
            </Text>
        </TouchableOpacity>
  )
};

export const ColorPalete = ({color, setColor}) => {
    return (
        <View style={styles.colorBar}>
        <TouchableOpacity style={styles.colorWhite} onPress={() => setColor('white')}>
            {color === 'white' && 
            <FontAwesome5
                name='check'
                size= {20}
                color= '#000000'
            />
            }
        </TouchableOpacity>
        <TouchableOpacity style={styles.colorRed} onPress={() => setColor('red')}>
            {color === 'red' && 
                <FontAwesome5
                name='check'
                size= {20}
                color= '#000000'
                />
            }
        </TouchableOpacity>
        <TouchableOpacity style={styles.colorBlue} onPress={() => setColor('blue')}>
            {color === 'blue' && 
                <FontAwesome5
                name='check'
                size= {20}
                color= '#000000'
                />
            }
        </TouchableOpacity>
        <TouchableOpacity style={styles.colorGreen} onPress={() => setColor('green')}>
            {color === 'green' && 
                <FontAwesome5
                name='check'
                size= {20}
                color= '#000000'
                />
            }
        </TouchableOpacity>
        </View>
    )
}

export const  ColorDisplay= ({item}) => {
  return (
    <View 
        style={[
            {
                backgroundColor: 
                item.color === 'red' ? 'red' :
                item.color === 'blue' ? '#aecbfa' :
                item.color === 'green' ? '#ccff90' : '#ffffff'
            },
        styles.itemColor]} />
  )
}

const customStyles = StyleSheet.create({

    text: {
        color: 'white',
        fontSize: 30,
        padding: 10,
        textAlign: 'center',
        fontFamily: 'Acme-Regular'
      },

    button: {
        width: 200,
        margin: 20,
        height: 55,
        alignItems:'center',
        borderRadius: 10
     },
})
