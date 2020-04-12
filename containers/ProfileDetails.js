import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';


export default function({route}) {
    const {profileId} = route.params
    
    const [isLoading, setIsLoading] = React.useState(true);
    const [profile, setProfile] = useState({})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${profileId}`)
        .then(response => response.json())
        .then(data => setProfile(data))
        .catch(() => console.log("Cannot Fetch Profile"))
        .finally(() => setIsLoading(false))
    }, []);

    return (
        <View style={styles.container} >
            {
                isLoading ? <ActivityIndicator/> : (
                    <>
                        <Image
                            style={styles.profileImage}
                            source={{
                                uri: 'https://source.unsplash.com/random',
                            }}
                        />
                        <Text 
                            style={styles.profileTitle}>
                                {profile.name}
                        </Text>
                        <Text 
                            style={styles.profileText}>
                                Username: {profile.username}
                        </Text>
                        <Text 
                            style={styles.profileText}>
                            Email: {profile.email}
                        </Text>
                    </>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#debfff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 12
    },
    profileTitle: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 12,
    },
    profileText: {
        fontSize: 20,
        marginBottom: 12,
    },
    profileImage: {
        width: "100%",
        height: 300,
        borderRadius: 20,
        marginBottom: 12,
    },
});