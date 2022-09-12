import React, { useEffect } from 'react'
import styles from '../../AppStyles';
import { View, Text, TouchableOpacity, FlatList, Alert} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from 'react-redux';
import { setTask, setTaskID } from '../Redux/actions';
import CheckBox from '@react-native-community/checkbox';
import { ColorDisplay } from '../CustomComponents';

const ToDo = () => {

  const navigation = useNavigation();
  
  const { tasks } = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  const taskHandler = () => {
    navigation.navigate('Task')
  }

  const getTasks = () => {
    AsyncStorage.getItem('Tasks')
      .then(task => {
        const parsedTasks = JSON.parse(task)

        if(parsedTasks && typeof parsedTasks === 'object') {
          dispatch(setTask(parsedTasks))
        }
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getTasks();
  }, [])

  const checkTask = (id, newValue) => {
    const index = tasks.findIndex(task => task.ID === id)
    if(index > -1){
      let newTasks = [...tasks]
      newTasks[index].done = newValue

      AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
        .then(() => {
          dispatch(setTask(newTasks))
          Alert.alert('Succes', 'Task state changed')
        })
        .catch(error => console.log(error))
    }
  }

  const deleteTask = (id) => {
    const filterTasks = tasks.filter(task => task.ID !== id)
    AsyncStorage.setItem('Tasks', JSON.stringify(filterTasks))
      .then(() => {
        dispatch(setTask(filterTasks));
        Alert.alert('Success', 'Task deleted')
      })
      .catch(error => console.log(error))
  }

  return (
    <View style={styles.toDoBody}>
      <FlatList 
        data={tasks.filter(task => task.done === false)}
        renderItem={ ({ item }) => (
          <TouchableOpacity 
            style={styles.itemBody}
            onPress={() => {
              navigation.navigate('Edit')
              dispatch(setTaskID(item.ID))
            }}
          >
          <View style={styles.itemRow}> 

            <ColorDisplay item={item}/>
            
            <CheckBox 
              value={item.done} 
              style={styles.itemCheckBox}
              tintColors={{
                true: '#eab308'
              }}
              onValueChange={(newValue) =>{checkTask(item.ID, newValue)}}
              />

            <View style={styles.itemTasks}>
              <Text 
                style={[styles.itemTitle, styles.fonts]} 
                numberOfLines={1}
              >
                {item.title}
              </Text>

              <Text 
                style={[styles.itemDesc, styles.fonts]} 
                numberOfLines={1}
              >
                {item.desc}
              </Text>
            </View>

            <TouchableOpacity 
              style={styles.deleteBtn}
              onPress={() => deleteTask(item.ID)}  
            >
              <FontAwesome5 
                name='trash'
                size={25}
                color='#eab308'
              />
            </TouchableOpacity>
          </View> 

          </TouchableOpacity>
        )}
        keyExtractor= {(item, index) => index.toString()}
      />

      <TouchableOpacity 
        style={[styles.toDoButton]} 
        onPress={() => {
          dispatch(setTaskID(tasks.length + 1))
          taskHandler()
        }}
        >
        <FontAwesome5 
          name='plus'
          size = {26}
          color= '#ffffff'
        />
      </TouchableOpacity>
    </View>
  )
};

export default ToDo;


