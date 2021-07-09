import React, {FunctionComponent} from 'react';
import styles from '@styles/index';
import {Text, View, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

export type Props = {
  item: {
    id: number;
    mission_name: string;
  };
  index: number;
};

const MissionItem: FunctionComponent<Props> = ({item, index}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.components.missionItem}
      onPress={() =>
        navigation.navigate('Detail', {
          missionId: item.id,
        })
      }
      key={index}>
      <View style={styles.components.missionImage}>
        <FontAwesome
          name="image"
          size={80}
          solid
          color={styles.colors.mediumgray}
        />
      </View>
      <View style={styles.components.missionBottomWrapper}>
        <Text
          style={[
            {color: styles.colors.darkgray},
            styles.components.missionTitle,
          ]}>
          {item.mission_name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MissionItem;
