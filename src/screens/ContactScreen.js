import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import chats from '../../assets/data/chats.json';
import ContactListItem from '../components/ContactListItem';

const ContactScreen = () => {
  return (
    <FlatList 
    data={chats}
    renderItem={({item}) => <ContactListItem user={item.user} />} 
    style={{backgroundColor: 'white'}}
    />
  );
};

export default ContactScreen;

const styles = StyleSheet.create({})