import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TextInput, View , FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true); 
  }
  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText){
    setCourseGoals((currentCourseGoals)=>
       [...currentCourseGoals,
         {text: enteredGoalText, id : Math.random().toString()
       }])

       endAddGoalHandler();
  }

  function deleteGoalHandler(id){
    setCourseGoals((currentCourseGoals) =>{
      return currentCourseGoals.filter((goal)=> goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style='auto'/>
      <View style = {styles.appContainer}>
        <Button 
        title='Add new Goal' 
        color= '#F79AB6'
        onPress={startAddGoalHandler}
        />
        <GoalInput 
        showModal ={modalIsVisible} 
        onAddGoal ={addGoalHandler} 
        onCancel={endAddGoalHandler}
        />
        <View style = {styles.goalsConatiner} >
          <FlatList
          data= {courseGoals}
          renderItem={(itemData) =>{
            return( 
            <GoalItem 
            text ={itemData.item.text} 
            id = {itemData.item.id}
            onDeleteItem = {deleteGoalHandler}
            />
          );
          }}
          keyExtractor={(item, index)=>{
            return item.id;
          }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex : 1,
  },
  goalsConatiner: {
    flex: 5,
  },
});