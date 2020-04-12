import React from 'react';
import Profile from './Profile'
import ProfileDetails from './ProfileDetails'
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const {Navigator: StackNavigator, Screen: StackScreen} = createStackNavigator();

export default function() {
    return (
        <StackNavigator screenOptions={{
            headerStyle: {
                height: 90,
                backgroundColor: "#652f75",
            },
        }}>
            <StackScreen
            name="Profiles List"
            component={Profile}
            options={{ 
               headerTitle: () => <Text style={styles.headerTitle}>Profiles List</Text>
            }}/>
            <StackScreen
            name="Profile Details"
            component={ProfileDetails}
            options={( { navigation } ) => ({
                headerLeft: () => <Ionicons name="ios-arrow-back" 
                                            style={styles.backBtn}
                                            onPress={() => navigation.goBack()}/>,
                headerTitle: () => <Text style={styles.headerTitle}>Details</Text>
            })}/>
        </StackNavigator>
    );
}

const styles = StyleSheet.create({
    headerTitle: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold"
    },
    backBtn: {
        color: "#fff",
        fontSize: 30,
        marginLeft: 20
    }
});