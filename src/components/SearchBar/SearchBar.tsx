import React, {useRef, FunctionComponent} from 'react';
import styles from '@styles/index';
import {TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export type SearchBarProps = {
  data: [];
  setFiltered: Function;
  setSearch: Function;
  search: string;
};

export type MissionName = {
  mission_name: string;
};

const SearchBar: FunctionComponent<SearchBarProps> = ({
  data,
  setFiltered,
  setSearch,
  search,
}) => {
  const searchRef = useRef<TextInput>(null);
  const onSearch = (text: string) => {
    setSearch(text);
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = data.filter(({mission_name}: MissionName) => {
        // Applying filter for the inserted text in search bar
        return (
          mission_name.toUpperCase().indexOf(text.trim().toUpperCase()) > -1
        );
      });
      setFiltered(newData);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFiltered(data);
    }
  };

  return (
    <View style={styles.components.searchBarWrapper}>
      <View style={{flex: 0.95}}>
        <TextInput
          ref={searchRef}
          style={styles.components.searchBarInput}
          placeholder="Search mission..."
          placeholderTextColor={styles.colors.darkgray}
          value={search}
          onChangeText={(text) => onSearch(text)}
        />
      </View>
      {search.length > 1 ? (
        <TouchableOpacity
          style={styles.components.pRight10}
          onPress={() => onSearch('')}>
          <Icon name="times" size={16} color={styles.colors.darkgray} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.components.pRight10}>
          <Icon name="search" size={20} color={styles.colors.darkgray} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
