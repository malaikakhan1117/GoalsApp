import { StyleSheet ,View, Text, Pressable} from 'react-native';

function GoalItem(props) {
    return(
      <View style = {styles.goaltem}>
        <Pressable
        android_ripple={{ color : '#e28743'}}   //for android
        onPress={props.onDeleteItem.bind(this, props.id)}
        style = {({pressed}) => pressed && styles.pressedItem} // for ios
        >
          <Text style = {styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
      );
};

export default GoalItem;

const styles = StyleSheet.create({
    goaltem:{
        margin: 8,
        borderRadius: 6,
        height: 50,
        backgroundColor: "#f4bbb5",
        // alignItems: 'center',
        // justifyContent: 'center'
      },
      pressedItem: {
        opacity: 0.5,
      },
      goalText:{
        color: 'white',
        padding: 8,
        fontSize: 17,
      }
})