import React, { useEffect, useState } from 'react'
import { Alert, View, Text, TouchableOpacity, Modal } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import styles from '../../AppStyles';
import { CustomButton } from '../CustomComponents'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch, useSelector } from 'react-redux';
import { setTask} from '../Redux/actions';
import {useNavigation} from '@react-navigation/native'
import CheckBox from '@react-native-community/checkbox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ColorPalete } from '../CustomComponents';
import PushNotification from 'react-native-push-notification';

const Edit = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [done, setDone] = useState(false);
  const [color, setColor] = useState('white');
  const [notify, setNotify] = useState(false);
  const [notifyTime, setNotifyTime] = useState('1');

  const navigation = useNavigation();

  const {tasks, taskID} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
    if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
            return;
        }
        seen.add(value);
    }
    return value;
    };
};

  const setReminder = () => {
    PushNotification.localNotificationSchedule({
      channelId: 'task-channel',
      title: title,
      message: desc,
      date: new Date(Date.now() + parseInt(notifyTime) * 60 * 1000),
      allowWhileIdle: true
    })
  }

  const displayTask = () => {
    const Task = tasks.find(task => task.ID === taskID)
    if(Task) {
      setTitle(Task.title);
      setDesc(Task.desc);
      setDone(Task.done);
      setColor(Task.color)

    }
  }

  useEffect(() => {
    displayTask();
  }, [])

  const updateTask = () => {
    if(title.length === 0){
      Alert.alert('Warning!','PROVIDE TITLE')
    } else {
        try {
          var task = {
            ID: taskID,
            title: title,
            desc: desc,
            done: done,
            color: color
          }
          //check the Id already exist if YES then just update it
          const index = tasks.findIndex(task => task.ID === taskID); // if index not fount it returns -1
          let newTask = [];
          if(index > -1){
            newTask = [...tasks];
            newTask[index] = task
          } 
          else {
            newTask = [...tasks, task]
          }

          AsyncStorage.setItem('Tasks', JSON.stringify(newTask, getCircularReplacer()))
          .then(() => {
            dispatch(setTask(newTask))
            Alert.alert('Success', 'Your task updated')
            navigation.goBack(); 
          })
          .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    }
  }

  return (
    <View style={styles.taskBody}>

      <Modal
        visible={notify}
        transparent
        onRequestClose={() => setNotify(false)}
        animationType='slide'
        hardwareAccelerated
      >
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <View style={styles.modalBody}>

              <Text style={[styles.modalHeadings, styles.fonts]}>Set Reminder for</Text>
              <TextInput 
                style={styles.modalText} 
                keyboardType= 'numeric'
                value={notifyTime}
                onChangeText={(value) => setNotifyTime(value)}
              />
              <Text style={[styles.modalHeadings, styles.fonts]}>Minute(s)</Text>
            </View>
            
            <View style={styles.modalBtn}>
              <TouchableOpacity 
                style={styles.modalCancelBtn} 
                onPress={() => setNotify(false)}>
                <Text style={[styles.modalHeadings, styles.fonts]}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.modalOkBtn} 
                onPress={() => {
                  setNotify(false)
                  setReminder()
                  }}
              >
                <Text style={[styles.modalHeadings, styles.fonts]}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <TextInput 
        style={[styles.taskInput, styles.fonts]}
        placeholder= 'Title'
        value={title}
        onChangeText={(value) => setTitle(value)}
      />

    <TextInput 
        style={[styles.taskInput, styles.fonts]}
        placeholder= 'Description'
        value={desc}
        multiline
        onChangeText={(value) => setDesc(value)}
      />

    {/* <View style={styles.colorBar}>
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
    </View> */}
    <ColorPalete color={color} setColor={setColor}/>

    <View style={styles.notify}>
      <TouchableOpacity 
        style={styles.notifyBtn} 
        onPress={() => {
          setNotify(true) 
          }}
        >
        <FontAwesome5 
          name='bell'
          size= {30}
          color= '#ffffff'

        />
      </TouchableOpacity>
    </View>

    <View style={styles.checkBoxBody}>
      <CheckBox 
        tintColors={{
          true: '#eab308'
        }}
        value={done}
        onValueChange={(newValue) => setDone(newValue)}
      />
      <Text style={[styles.checkBoxText, styles.fonts]}>Is done</Text>
    </View>

    <CustomButton
      title= 'Update Task'
      color= '#eab308'
      onPressHandler = {updateTask}
    />

    </View>
  )
}

export default Edit;