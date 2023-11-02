import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    // <View style={{backgroundColor:"plum", flex: 1}}></View>
    <View style={styles.container}>
      {/* <Box style={{backgroundColor: "#8e9b90",flex: 1}}>Box 1</Box>
      <Box style={{backgroundColor: "#b69b30", flex: 1}}>Box 2</Box>
      <Box style={{backgroundColor: "#1c9b00", flex: 3}}>Box 3</Box>
      <Box style={{backgroundColor: "#ab3b00"}}>Box 4</Box> */}
      <Box style={{backgroundColor: "#b99b00",paddingVertical:100}}>Box 5</Box>
      <Box style={{backgroundColor: "#8e9b00",paddingEnd: 90}}>Box 6</Box>
      <Box style={{backgroundColor: "#8e5a40",paddingBottom:60}}>Box 7</Box> 
    </View>
  );
}

// alignItems: "stretch", each box stretch from left to right

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:"row",
    //justifyContent: "center",
    alignItems: "baseline",
    marginTop:64,
    borderWidth: 6,
    borderColor: "red",
  }
});
