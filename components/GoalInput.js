import { useState } from 'react';
import {StyleSheet, TextInput, View, Button, Modal, Image} from 'react-native';

function GoalInput(props) {
const [enteredGoalText, setEnteredText] = useState('');

function goalInputHandler(enteredText){
    setEnteredText(enteredText);
  }

function addGoalHandler(){
    props.onAddGoal(enteredGoalText);
    setEnteredText('');
}

    return(
      <Modal visible = {props.showModal} animationType= 'slide'>
        <View style = {styles.inputContainer}>
          <Image
          style={styles.goalImage} 
          source={require('../assets/images/goal.png')} />
            <TextInput
            style = {styles.textInput}
            placeholder='Your course goal!'
            onChangeText={goalInputHandler}
            value={enteredGoalText}
            />
            <View style = {styles.buttonContainer}>
              <View style = {styles.button}>              
              <Button title='Add goal' onPress={addGoalHandler} />
              </View>
              <View style = {styles.button}>
              <Button title='Cancel' onPress={props.onCancel} color="#f31282"/>
              </View>
            </View>
        </View>
      </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        flex: 1,
        padding: 16,
        backgroundColor:'#FEFBD8',
      },
      goalImage:{
        width: 120,
        height: 120,
        margin: 30,
      },
      textInput:{
        borderWidth: 1,
        borderColor: '#E3E1D9',
        backgroundColor:"#E3E1D9",
        borderRadius: 10,
        width:'100%',
        margin: 8,
        padding: 13,
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 18,
      },
      button:{
        width: '30%',
        marginHorizontal: 8
      }
      //wrap the button in view for styling as color and width and size of button cant be changed but ;padding and margin can be given
})