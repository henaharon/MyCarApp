import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native';
import React from 'react';

const CommonCard = ({
  isNew,
  count,
  newColor,
  title,
  icon,
  bgColor,
  onClick,
}) => {
  return (
    <View style={styles.RootCommondCard}>
      <TouchableOpacity
        style={styles.TouchCommonCard}
        onPress={() => {
          onClick();
        }}>
          {count !== undefined && (
              <View style={styles.CountPostion}>
                {count !== 0 ? (
                  <View style={styles.CountPostionCycle}>
                    <Text style={styles.CountSize}>
                      {count}
                    </Text>
                  </View>
                ) : (
                  <View/>
                )}
              </View>
            )}
        <View style={styles.Icon_Postion_Text}>
          {title && (
            <Text
              style={styles.TextAttribute}>
              {title}
            </Text>
          )}
          {icon && (
            <Image
              source={icon}
              style={styles.ImageAttrbuite}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  RootCommondCard:{
    width: '100%', 
    height: 50, 
    justifyContent: 'center', 
  },
  TouchCommonCard:{
    width: '90%',
    shadowRadius: 10,
    borderRadius: 8,
    height: 50,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  CountPostion :{
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  CountPostionCycle:{
    backgroundColor: 'blue',
    width: 25,
    height: 25,
    textAlign: 'center',
    alignItems: 'center',
    margin: 4,
    borderRadius: 25 / 2,
  },
  CountSize:{
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  Icon_Postion_Text:{
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TextAttribute:{
    marginRight: 10,
    fontWeight: '300',
    color: 'white',
    fontSize: 16,
  },
  ImageAttrbuite:{
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: 'white',
  },
});
export default CommonCard;
