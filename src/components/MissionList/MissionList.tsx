import React, {FunctionComponent, useRef} from 'react';
import {FlatList, View, Text, ActivityIndicator} from 'react-native';
import MissionItem from '@components/MissionItem/MissionItem';
import {useScrollToTop} from '@react-navigation/native';
import Loader from '@components/Loader/Loader';
import ErrorMessage from '@components/Error/ErrorMessage';

export type MissionListProps = {
  filteredData: [];
  handleOnEndReached: Function;
  refreshing: boolean;
  refetch: Function;
  loading: Boolean;
  error?: Error;
};

const MissionList: FunctionComponent<MissionListProps> = ({
  filteredData,
  handleOnEndReached,
  refreshing,
  refetch,
  loading,
  error,
}) => {
  // Flatlist Ref
  const flatListRef = useRef<FlatList<any>>(null);
  // Scroll To Top When TabBar Elem is Pressing
  useScrollToTop(
    useRef({
      scrollToTop: () => flatListRef.current?.scrollToOffset({offset: -100}),
    }),
  );
  if (loading && filteredData.length === 0) return <Loader />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <FlatList
      ref={flatListRef}
      data={filteredData}
      showsVerticalScrollIndicator={false}
      decelerationRate={'normal'}
      renderItem={({item, index}) => <MissionItem item={item} index={index} />}
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 60,
        paddingBottom: 100,
      }}
      keyExtractor={(item) => item.id}
      extraData={filteredData}
      onEndReached={() => handleOnEndReached()}
      onEndReachedThreshold={0.1}
      refreshing={refreshing}
      onRefresh={() => refetch()}
      initialNumToRender={10}
    />
  );
};

export default MissionList;
