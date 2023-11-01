import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{backgroundColor: "#8e9b90"}}>Box 1</Box>
      <Box style={{backgroundColor: "#b69b30"}}>Box 2</Box>
      <Box style={{backgroundColor: "#1c9b00"}}>Box 3</Box>
      <Box style={{backgroundColor: "#ab3b00"}}>Box 4</Box>
      <Box style={{backgroundColor: "#b99b00"}}>Box 5</Box>
      <Box style={{backgroundColor: "#8e9b00"}}>Box 6</Box>
      <Box style={{backgroundColor: "#8e5a40"}}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:64,
    borderWidth: 6,
    borderColor: "red",
  }
});
