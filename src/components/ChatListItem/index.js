import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

const ChatListItem = () => {
    return (
        <View style={styles.container}>
            <Image 
            source={{ uri: 'https://scontent-sin6-3.cdninstagram.com/v/t51.2885-19/306493831_457763942944564_2584794961078525666_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=104&_nc_ohc=sFRyg8txcpkAX-roeob&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAcaAKAEEcILplRDs5g2SfXzAIvPd68a1LqP1P4mSwr0Q&oe=63E2CCFA&_nc_sid=6136e7' }}
            style={styles.image}
            />
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.name} numberOfLines={1}>Irfan Muhammad</Text>
                    <Text style={styles.subTitle}>04:20</Text>
                </View>

                <Text numberOfLines={2} style={styles.subTitle}>Nongkrong?</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    container : {
        flexDirection: 'row',
        alignItems: 'stretch',
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
    },
    image : {
        width: 60,
        aspectRatio: 1,
        borderRadius: 30,
        marginRight: 10,
    },
    content: {
        flex: 1,
        borderBottomColor: 'lightgray',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    name : {
        fontWeight: 'bold',
        flex: 1,
    },
    subTitle : {
        color: 'grey'
    },

});

export default ChatListItem;