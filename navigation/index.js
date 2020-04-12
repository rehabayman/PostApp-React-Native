import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import PostNavigator from '../containers/PostNavigator';
import ProfileNavigator from '../containers/ProfileNavigator';

const {Navigator: TabNavigator, Screen: TabScreen} = createBottomTabNavigator();

export default function () {

    return (
        <NavigationContainer>
            <TabNavigator tabBarOptions= {{
                activeTintColor: "#fff",
                labelStyle: {
                    fontSize: 33,
                    marginBottom: 4
                },
                style: {backgroundColor: "#652f75"}
                }}>
                <TabScreen 
                    name="Posts"
                    component={PostNavigator}
                />
                <TabScreen name="Profiles" component={ProfileNavigator} />
            </TabNavigator>
        </NavigationContainer>
    );
}