import React from 'react';
import {Text, StyleSheet} from 'react-native'
import Header from '../../Header'

const CreateRecord = ()=>{
    return (
        <>
        <Header/>
         <Text style={styles.text}>Hello CreateRecord</Text>
        </>
        
    )
}

const styles = StyleSheet.create({
    text: {
      color: "white",
      marginTop:100,
      textAlign: "center"
    }
  });
export default CreateRecord