import {StackNavigationProp} from '@react-navigation/stack';
import {GET_MISSION} from '../graphql/query';
import {RootStackParamList} from '@navigation/types';
import {RouteProp} from '@react-navigation/native';
import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loader from '@components/Loader/Loader';
import {useQuery} from '@apollo/client';
import styles from '@styles/index';
import dayjs from 'dayjs';
import ErrorMessage from '@components/Error/ErrorMessage';
import NotFound from '@components/Error/NotFound';

type DetailNavigationProp = StackNavigationProp<RootStackParamList, 'Detail'>;
type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;

export type DetailProps = {
  route: DetailRouteProp;
  navigation: DetailNavigationProp;
};
const Detail: FunctionComponent<DetailProps> = ({route, navigation}) => {
  const {missionId} = route.params;
  /**Get Specfic Mission by iD from API with useQuery hooks */
  const {data, error, loading} = useQuery(GET_MISSION, {
    variables: {launchId: missionId},
  });
  /** if loading is true show Loader component */
  if (loading) return <Loader />;
  /** if and error occured show error message */
  if (error) return <ErrorMessage error={error} />;
  /** if data is undefined show "Not Found"  message*/
  if (!data) return <NotFound />;
  /** Type of ships Props */
  type shipsProps = {
    name: String;
    home_port: String;
    image: String;
  };

  return (
    <View style={[styles.components.viewFlex, {paddingHorizontal: 10}]}>
      <View style={styles.components.headerDetail}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.components.backButton}>
          <Icon name="chevron-left" size={20} color={styles.colors.black} />
          <Text style={styles.components.backText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.components.subHeaderDetail}>
        <Text style={styles.components.headerDetailTitle}>
          {data?.launch.mission_name}
        </Text>
      </View>
      <View style={styles.components.contentDetailView}>
        <Text style={styles.components.launchDate}>
          Launch Date :{' '}
          {dayjs(data.launch.launch_date_local).format('DD MMM YY. - HH:mm')}
        </Text>
        <Text style={styles.components.blackRegularText}>
          Launch Site : {data.launch.launch_site.site_name_long}
        </Text>
        <Text style={styles.components.blackRegularText}>
          Rocket Name : {data.launch.rocket.rocket_name}
        </Text>
        <Text style={styles.components.blackRegularText}>Ships :</Text>
        <View style={styles.components.shipView}>
          {data.launch.ships.map(
            (index: number, {name, home_port, image}: shipsProps) => (
              <Text style={styles.components.blackRegularText} key={index}>
                {name}
              </Text>
            ),
          )}
        </View>
      </View>
    </View>
  );
};

export default Detail;
