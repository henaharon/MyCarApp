import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const BigServiceCard = ({title, imagePath, goToPath = null}) => {
  const handlePress = () => {
    if (goToPath) {
      navigation.navigate(goToPath);
    } else {
      // Stay in the same page
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <View style={styles.cardContainer}>
        <View style={styles.topRow}>
          <View style={styles.leftColumn}>
            <Image
              source={require('../../../uiKit/icons/elements24PxIconsNavigationIcHeaderLeft2.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <View style={styles.rightColumn}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
        <View style={styles.bottomRow}>
          <Image source={imagePath} style={styles.image} resizeMode="cover" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    aspectRatio: 16 / 12,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 20,
    marginBottom: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  leftColumn: {
    marginRight: 10,
  },
  logo: {
    width: 20,
    height: 20,
  },
  rightColumn: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  bottomRow: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '90%',
    borderRadius: 10,
  },
});

export default BigServiceCard;
