import React, {FunctionComponent} from 'react';
import {useEffect} from 'react';
import {Text, View} from 'react-native';
import router from '@navigation/Router';
import styles from '@styles/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@navigation/types';

type LoadingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Loading'
>;

export type LoadingProps = {
  navigation: LoadingScreenNavigationProp;
};

const Loading: FunctionComponent<LoadingProps> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Tabs');
    }, 3000);
  });

  return (
    <View style={styles.components.viewCenter}>
      <Icon name="rocket" size={100} />
      <Text style={styles.components.loadingTitle}>myRandomApp</Text>
    </View>
  );
};

export default Loading;
