import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser'
import RNPickerSelect from 'react-native-picker-select';

const Login = () => {
  const countries = [
    { label: 'United States', value: 'US' },
    { label: 'Canada', value: 'CA' },
    // Add all the countries you want to list
  ];

  useWarmUpBrowser();
  return (
    <View style={styles.container}>
      <View style = {styles.upperBox}></View>
     <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={countries}
        
      />
      <View style = {styles.middleBox}></View>
      <View style = {styles.lowerBox}></View>
      
      
      
    </View>
    
  )
}

export default Login



const styles = StyleSheet.create({
    

    container : {
      flex: 1,
      

    },

    upperBox : {
      
      flex : 4,
      backgroundColor: 'red',
      
      
      
    },

    middleBox : {
      
      flex : 1,
      backgroundColor: 'blue',
      
      
    },

    lowerBox : {
      
      flex : 4,
      backgroundColor: 'green',
      
      
    },

    



})