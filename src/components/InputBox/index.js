import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import React from 'react';
import {Ionicons, MaterialIcons} from '@expo/vector-icons'
import { useState } from 'react';

const InputBox = () => {

    const [newMessage, setNewMessage] = useState('');

    const onSend = () => {
        console.warn('Sending a new message', newMessage);

        setNewMessage('');
    };

  return (
    <View style={styles.container}>
      {/* Text Input */}
      <TextInput value={newMessage} onChangeText={setNewMessage} style={styles.input} placeholder='Type your message' />
      {/* Icon */}
      <MaterialIcons style={styles.icon} name='emoji-emotions' size={24} color='darkgrey' />
      {/* Icon */}
      <Ionicons style={styles.icon2} name='ios-attach' size={25} color='darkgrey' />
      {/* Icon */}
      <MaterialIcons onPress={onSend} style={styles.send} name='send' size={24} color='white' />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
        input: {
            flex: 1,
            backgroundColor: 'white',
            padding: 5,
            paddingRight: 10,
            paddingLeft: 39,
            paddingHorizontal: 10,
            marginRight: 5,
            borderRadius: 50,
            borderColor: 'lightgray',
            borderWidth: StyleSheet.hairlineWidth,
            textAlign: 'left',
        },
        send: {
            backgroundColor: '#128C7E',
            padding: 8,
            borderRadius: 20,
            overflow: 'hidden',
        },
        icon: {
           position: 'absolute',
           marginLeft: 18,
        },
        icon2: {
            position: 'absolute',
            marginLeft: 275,
         },
});