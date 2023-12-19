import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const Page = () => {
  return (
    <View>
      <Link style={styles.button} href={'/(modals)/login'}>Login</Link>
      <Link style={styles.button} href={'/(modals)/booking'}>Booking</Link>
      <Link style={styles.button} href={'/listing/133'}>listing</Link>
    </View>
  )
}

export default Page


const styles = StyleSheet.create({

    button : { 
        backgroundColor: 'red',
        marginTop: 30,
        padding: 10,
        justifyContent: 'center',

    }
})