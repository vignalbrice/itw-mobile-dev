import React, {FunctionComponent} from 'react';
import {View, ActivityIndicator} from 'react-native';

const Loader: FunctionComponent = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="rgb(0, 122, 255)" />
    </View>
  );
};

export default Loader;
