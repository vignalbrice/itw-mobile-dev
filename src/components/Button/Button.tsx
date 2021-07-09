import React, {FunctionComponent} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '@styles/index';

export type Props = {
  onPress: Function;
  children: any;
};

const Button: FunctionComponent<Props> = ({onPress, children}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={styles.components.button}>
      <Text style={styles.components.btnText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
