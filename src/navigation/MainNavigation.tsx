// In App.js in a new project
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import router from './Router';
import styles from '@styles/index';
import {Text, View} from 'react-native';
import constants from '@constants/index';

const Stack = createStackNavigator();
const Tabs = createMaterialTopTabNavigator();
const {stack, tabs} = router;

const MainNavigator = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        gestureEnabled: false,
      }}>
      {stack.map(({components, header, key, name}) => (
        <Stack.Screen
          name={name}
          key={key}
          component={components}
          options={{header: () => header}}
        />
      ))}
      <Stack.Screen
        name="Tabs"
        component={TabsNavigator}
        options={{header: () => false}}
      />
    </Stack.Navigator>
  );
};

const TabsNavigator = () => {
  return (
    <Tabs.Navigator
      tabBarPosition="bottom"
      style={{
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderColor: '#FFF',
      }}
      tabBarOptions={{
        indicatorContainerStyle: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          margin: 'auto',
          borderWidth: 0,
        },
        renderIndicator: ({}) => {
          return null;
        },
        contentContainerStyle: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          margin: 'auto',
          borderWidth: 0,
        },
        inactiveTintColor: styles.colors.darkgray,
        activeTintColor: styles.colors.main,
        indicatorStyle: {},
        showIcon: true,
        tabStyle: {},
        style: {
          paddingBottom: constants.height / 35,
          backgroundColor: styles.colors.white,
        },
      }}>
      {tabs.map(({components, icon, key, name}) => (
        <Tabs.Screen
          name={`${name}`}
          key={key}
          component={components}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name={icon} size={24} color={color} />
            ),
            tabBarLabel: ({color, focused}) => (
              <View
                style={{
                  borderBottomColor: styles.colors.main,
                  borderBottomWidth: focused ? 3 : 0,
                  width: '100%',
                  alignItems: 'center',
                  alignContent: 'center',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={[
                    styles.components.blackMdText,
                    {
                      color,
                      textAlign: 'center',
                      marginBottom: 10,
                    },
                  ]}>
                  {name.includes('Room') ? 'Room Number' : name}
                </Text>
              </View>
            ),
          }}
        />
      ))}
    </Tabs.Navigator>
  );
};

export default MainNavigator;
