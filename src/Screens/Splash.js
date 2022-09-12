import React, { useEffect } from "react"
import { View, Text, Image } from 'react-native'
import styles from '../../AppStyles';
import { useNavigation} from '@react-navigation/native'
import PushNotification from 'react-native-push-notification'

const Splash = () => {

    const navigation = useNavigation();

    const createChannels = () => {
        PushNotification.createChannel({
          channelId: 'task-channel',
          channelName: 'task-channel'
        })
      }

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('My Tasks')
        }, 2000);
        createChannels();
    })

    return (
        <View style={styles.splashBody}>
            <Image 
                style={styles.splashImage}
                source={require('../NotesLogo.png')}
            />

            <Text style={[styles.fonts, 
                styles.splashText
                ]}>
                My To-Do List
            </Text>
        </View>
    )
}

export default Splash;