import React from "react";
import {Text, StyleSheet} from "react-native"

const CustomComponent = () =>{
  return (
    <Text style={styles.textStyle} > React Native</Text>
  );
};

const styles = StyleSheet.create({
  textStyle:{
    color:"red",
  },
});

export default CustomComponent;