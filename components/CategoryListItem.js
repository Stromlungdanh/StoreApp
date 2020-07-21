import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';

export default function CategoryListItem(props) {
    const {category} = props
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{category.name}</Text>
            <Image style={styles.categoryImage} source={require('../assets/skiing.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    categoryImage: {
        width: 60,
        height: 60,
    },
    title: {
        textTransform: "uppercase",
        marginBottom: 8,
        fontWeight: '700'
    },
    container: {
        alignItems: "center",
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 4,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 16
    }
})