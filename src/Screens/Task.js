import React, { useEffect, useState } from 'react'
import { Alert, View, Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import styles from '../../AppStyles';
import { CustomButton } from '../CustomComponents'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch, useSelector } from 'react-redux';
import { setTask} from '../Redux/actions';
import {useNavigation} from '@react-navigation/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ColorPalete } from '../CustomComponents';

const Task = () => {
  const navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [color, setColor] = useState('white')
  const [done, setDone] = useState(false);

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

  // const displayTask = () => {
  //   const Task = tasks.find(task => task.ID === taskID)
  //   if(Task) {
  //     setTitle(Task.title);
  //     setDesc(Task.desc);
  //     setDone(Task.done);
  //     setColor(Task.color)
  //   }
  // }

  // useEffect(() => {
  //   displayTask()
  // }, [])

  const saveTask = () => {
    if(title.length === 0){
      Alert.alert('Warning!','PROVIDE TITLE')
    } else {
        try {
          var task = {
            ID: taskID,
            title: title,
            desc: desc,
            color: color,
            done: done
          }
          let newTask = [...tasks, task]

          //ADD DATA TO LOCAL STORAGE
          AsyncStorage.setItem('Tasks', JSON.stringify(newTask, getCircularReplacer()))
          .then(() => {
            dispatch(setTask(newTask)) //ADD DATA IN REDUX[STATE MANAGEMENT]
            Alert.alert('Success', 'Your task saved')
            navigation.goBack(); 
          })
          .catch(error => console.log(error))
        } catch(error) {
            console.log(error)
        }
    }
  }

  return (
    <View style={styles.taskBody}>
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

    {/* <View style={styles.checkBoxBody}>
      <CheckBox 
        tintColors={{
          true: '#eab308'
        }}
        value={done}
        onValueChange={(newValue) => setDone(newValue)}
      />
      <Text style={[styles.checkBoxText, styles.fonts]}>Is done</Text>
    </View> */}

    <CustomButton
      title= 'Save Task'
      color= '#eab308'
      onPressHandler = {saveTask}
    />

    </View>
  )
}

export default Task;