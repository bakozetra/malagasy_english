import React from 'react'
import { SafeAreaView, Text } from 'react-native'

const ItemDetails = ({ route }) => {
    const { itemId, category } = route.params;
    const categoriesId = itemId[Math.floor(Math.random() * itemId.length)];
    return (
        <SafeAreaView>
            <Text> Category : {category.name.en}</Text>

        </SafeAreaView>
    )
}

export default ItemDetails