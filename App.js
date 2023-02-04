import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './src/components/ChatListItem';

const chat = {
  id: '1',
  user: {
    image: 'https://scontent-sin6-3.cdninstagram.com/v/t51.2885-19/306493831_457763942944564_2584794961078525666_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=104&_nc_ohc=sFRyg8txcpkAX-roeob&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAcaAKAEEcILplRDs5g2SfXzAIvPd68a1LqP1P4mSwr0Q&oe=63E2CCFA&_nc_sid=6136e7',
    name: 'Irfan Muhammad',
  },
  lastMessage : {
    text: 'Nongkrong?',
    createdAt: '04:20',
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <ChatListItem chat={chat} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
