import React, {useEffect, FunctionComponent} from 'react';
import styles from '@styles/index';
import {KeyboardAvoidingView, SafeAreaView, View} from 'react-native';
import SearchBar from '@components/SearchBar/SearchBar';
import {useState} from 'react';
import {NetworkStatus, useQuery} from '@apollo/client';
import MissionList from '@components/MissionList/MissionList';
import {GET_MISSIONS} from '../graphql/query.js';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {RootMaterialTopTabParamList} from '@navigation/types.js';

type SpaceXNavigationProp = MaterialTopTabNavigationProp<
  RootMaterialTopTabParamList,
  'SpaceX'
>;

export type SpaceXProps = {
  navigation: SpaceXNavigationProp;
};

const SpaceX: FunctionComponent<SpaceXProps> = ({navigation}) => {
  /** Get Limit of the list */
  const LIMIT = 10;
  const [search, setSearch] = useState<string>('');
  /**Get all missions from API with useQuery hooks */
  const {
    loading,
    error,
    data,
    fetchMore,
    networkStatus,
    refetch,
    variables,
  } = useQuery(GET_MISSIONS, {
    variables: {offset: 0, limit: LIMIT},
    notifyOnNetworkStatusChange: true,
  });
  const [initData, setInitData] = useState<[]>([]);
  const [filteredData, setFilteredData] = useState<[]>([]);
  const [isFetchingData, setIsFetchingData] = useState<boolean>(false);
  const refreshing = networkStatus === NetworkStatus.refetch;

  /**
   *  setData - Fetch Data from API and set it into initial and filtered data arrays
   * @returns
   */
  const setData = () => {
    setInitData(data.launchesPast);
    setFilteredData(data.launchesPast);
  };

  useEffect(() => {
    if (data) setData();
  }, [data]);

  /**
   *  handleOnEndReached - Fetch Data when end of the list is reached.
   * @returns
   */

  const handleOnEndReached = () => {
    if (search.length === 0) {
      setIsFetchingData(true);
      return fetchMore({
        variables: {
          offset: data.launchesPast.length,
          limit: LIMIT + LIMIT,
        },
        updateQuery: (prev: {launchesPast: []}, {fetchMoreResult}) => {
          if (!fetchMoreResult) return prev;
          setIsFetchingData(false);
          return Object.assign({}, prev, {
            launchesPast: [
              ...prev.launchesPast,
              ...fetchMoreResult.launchesPast,
            ],
          });
        },
      });
    }
  };

  return (
    <View style={styles.components.viewFlex}>
      <KeyboardAvoidingView style={{zIndex: 5, flex: 0.01}}>
        <SearchBar
          setSearch={setSearch}
          search={search}
          setFiltered={setFilteredData}
          data={initData}
        />
      </KeyboardAvoidingView>
      <SafeAreaView style={{flex: 1}}>
        <MissionList
          filteredData={filteredData}
          handleOnEndReached={handleOnEndReached}
          refetch={refetch}
          refreshing={refreshing}
          loading={loading}
          error={error}
        />
      </SafeAreaView>
    </View>
  );
};

export default SpaceX;
