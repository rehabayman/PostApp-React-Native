import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';



export default function({route}) {
    const {postId} = route.params
    
    const [isLoading, setIsLoading] = React.useState(true);
    const [post, setPost] = useState({})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(data => setPost(data))
        .catch(() => console.log("Cannot Fetch Post"))
        .finally(() => setIsLoading(false))
    }, []);

    return (
        <View style={styles.container} >
            {
                isLoading ? <ActivityIndicator/> : (
                    <>
                        <Image
                            style={styles.postImage}
                            source={{
                                uri: 'https://source.unsplash.com/random',
                            }}
                        />
                        <Text 
                            style={styles.postTitle}>
                                {post.title}
                        </Text>
                        <Text 
                            style={styles.postText}>
                                {post.body}
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
    postTitle: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 12,
    },
    postText: {
        fontSize: 20,
        marginBottom: 12,
    },
    postImage: {
        width: "100%",
        height: 300,
        borderRadius: 20,
        marginBottom: 12,
    },
});