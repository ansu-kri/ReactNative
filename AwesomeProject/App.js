// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>React Native Project</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from "react";
import { Text, StyleSheet,View } from "react-native"
import CustomComponent from "./Src/screens/CustomComponents"

const App = () => {
  return (
    <View>
      <Text style={styles.textStyle} >Hello React Native</Text>
      <CustomComponent />
    </View>

  )
};

const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    fontSize:"30px",
    marginTop:"100px"
  },
})

export default App;
