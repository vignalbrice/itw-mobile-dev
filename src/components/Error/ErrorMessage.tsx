import React from 'react';
import styles from '@styles/index';
import {StyleSheet, Text, View} from 'react-native';
import {FunctionComponent} from 'react';

export type ErrorProps = {
  error: Error;
};

const ErrorMessage: FunctionComponent<ErrorProps> = ({error}) => {
  return (
    <View style={styles.components.loadingView}>
      <Text style={styles.components.errorText}>
        Something went wrong: {error.message}
      </Text>
    </View>
  );
};

export default ErrorMessage;
