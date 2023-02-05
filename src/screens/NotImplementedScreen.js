import { Image, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';

const NotImplementedScreen = () => {
  return (
    <View styles={styles.container}>
      <ScrollView>
      <Image source={{uri: 'https://scontent-sin6-3.cdninstagram.com/v/t51.2885-15/328328614_585285549713656_590310057864444427_n.webp?se=7&stp=dst-jpg_e35&_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=104&_nc_ohc=yCMnDGI2F9YAX_2Xn5B&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzAyOTk3NzM3NzMzMDM3NzM2OQ%3D%3D.2-ccb7-5&oh=00_AfDFcV2PB99JzhKFQ2yIVj3Vs2GObjgV9kvIrBkTHiiTAg&oe=63E37256&_nc_sid=1527a3'}}
      style={styles.image}
      />
      <Image source={{uri: 'https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/328272269_754334532617693_4508828762076753188_n.webp?stp=dst-jpg_e35_p720x720&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=105&_nc_ohc=K0AuGx9WIjMAX-RKCsF&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzAyOTk3NzM3NzQ4OTY1OTM0MA%3D%3D.2-ccb7-5&oh=00_AfCsDDALk_lxkt97Vt5rMyaNbfqgBz_JbgffG0OgDIY4xA&oe=63E31C10&_nc_sid=1527a3'}}
      style={styles.image}
      />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
        color: 'gray',
    },
    image: {
        width: '100%',
        aspectRatio: 4 / 4,
    },
});

export default NotImplementedScreen;