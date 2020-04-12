import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, SafeAreaView, Image } from 'react-native';

function ListItem({item, navigation, imgUri}) {
    
    return(
        <View style={styles.listItem} >
            <Text 
                style={styles.listItemText}
                onPress={()=>navigation.navigate('Post Details', {postId: item.id})}>
                    {item.title}
            </Text>
            <Image
                style={styles.listItemImage}
                source={{
                    uri: imgUri
                }}
            />
        </View>
    );
}

export default function Post ({navigation}) {
    
    const [isLoading, setIsLoading] = React.useState(true);
    const [posts, setPosts] = React.useState([]);
    const imgUri = "https://source.unsplash.com/random"
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(() => console.log("Cannot Fetch Data"))
        .finally(() => setIsLoading(false))
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={posts}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <ListItem item={item} navigation={navigation} imgUri={imgUri}/>
                    )}
                    style={styles.list}
                    />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#debfff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    list: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
    },
    listItem: {
        marginBottom: 12,
    },
    listItemText: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 12,
    },
    listItemImage: {
        width: "100%",
        height: 120,
        borderRadius: 20
    },

});