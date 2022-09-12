import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    fonts: {
        fontFamily: 'Acme-Regular'
    },

    //Splash

    splashBody: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    splashImage: {
        width: 250,
        height: 350,
    },

    splashText: {
        fontSize: 35,
        color: '#eab308',
        margin: 20
    },

    //Home -> To-do
    toDoBody: {
        flex: 1,
    },

    itemBody: {
        flex: 1,
        margin: 20,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        elevation: 5
    },

    itemRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    itemColor: {
        width: 20,
        height: 100,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },

    itemCheckBox:{
        margin: 5
    },

    itemTasks: {
        flex: 1
    },

    itemTitle: {
        fontSize: 30,
        color: 'black',
        marginBottom: 10
    },

    itemDesc: {
        fontSize: 25,
        color: '#999999',
    },

    deleteBtn: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    toDoButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#eab308',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        right: 10,
        elevation: 6,
    },

    //Home -> done
    doneBody: {
        flex: 1,
    },

    doneText: {
        fontSize: 40,
        color: '#eab308'
    },

    //To-do -> task
    taskBody: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },

    taskInput: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 30,
        padding: 10,
        textAlign: 'left',
        backgroundColor: '#ffffff',
        margin: 10,
        color: 'black'
    },

    //Edit 
    notify: {
        flexDirection: 'row',
        margin: 20
    },

    notifyBtn: {
        flex: 1,
        height: 50,
        width: 50,
        backgroundColor: '#eab308',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',

    },

    //Modal
    modal: {
        flex: 1,
        backgroundColor: '#00000099',
        justifyContent: 'center',
        alignItems: 'center'
    },

    modalView: {
        width: 330,
        height: 200,
        backgroundColor: '#ffffff',
        borderRadius: 15
    },

    modalBody: {
        flex:1, 
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalHeadings: {
        fontSize: 22,
        color: '#000000'
    },

    modalText: {
        width: 50,
        borderWidth: 1,
        borderRadius: 15,
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
        color: 'black'
    },

    modalBtn: {
        flexDirection: 'row',
        height: 50
    },

    modalCancelBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 15,
        backgroundColor: '#fde047'

    },

    modalOkBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 15,
        backgroundColor: '#eab308'
    },

    //color pallete
    colorBar:{
        flexDirection: 'row',
        height: 50,
        margin: 10,
        borderRadius: 15
    },

    colorWhite:{
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    colorRed:{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    colorBlue:{
        flex: 1,
        backgroundColor: '#aecbfa',
        justifyContent: 'center',
        alignItems: 'center'
    },
    colorGreen:{
        flex: 1,
        backgroundColor: '#ccff90',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },

    checkBoxBody: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center'
    },

    checkBoxText: {
        fontSize: 23,
        color: '#000000'
    }

});

export default styles;