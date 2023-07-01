import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const BigServiceCard = ({title, imagePath}) => {
  return (
    <View style={styles.cardContainer}>
      {/* Top Row */}
      <View style={styles.topRow}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          <Image
            source={require('../../../assets/B1-assets/elements24PxIconsNavigationIcHeaderLeft2.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        {/* Right Column */}
        <View style={styles.rightColumn}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      {/* Bottom Row */}
      <View style={styles.bottomRow}>
        <Image source={imagePath} style={styles.image} resizeMode="cover" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  leftColumn: {
    marginRight: 10,
  },
  logo: {
    width: 30,
    height: 30,
  },
  rightColumn: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  bottomRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default BigServiceCard;
