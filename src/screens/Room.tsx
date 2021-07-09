import React, {FunctionComponent} from 'react';
import styles from '@styles/index';
import {StyleSheet, Text, View, NativeModules} from 'react-native';
import Button from '@components/Button/Button';

const Room: FunctionComponent = () => {
  return (
    <View style={styles.components.viewCenter}>
      <View>
        <Button onPress={() => HotelRoom?.getNbSommeEntiers()}>
          Get My Room Number
        </Button>
      </View>
      <View>
        <Text style={styles.components.roomText}>Your room number is: xxx</Text>
      </View>
    </View>
  );
};

const {HotelRoom} = NativeModules;

export default Room;
