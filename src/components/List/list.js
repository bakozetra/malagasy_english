// components/Task.js
import * as React from 'react';
import { SafeAreaView, SectionList, View, StyleSheet } from 'react-native';
import ListItem from "../ListItem/listItem"
import SectionHeading from "../SectionHeading/sectionHeading"
import VectorIcon from '../../svg/vector';
import { useContextCategories } from '../../Context/GlobalContext';
import { useNavigation } from '@react-navigation/native';
import { getPhraseIdsForCategory } from "../../data/dataUtils"

const styles = StyleSheet.create({
    list: {
        marginRight: 23,
        marginLeft: 23,
    },
})


export default function List() {
    const navigation = useNavigation();
    const { categories } = React.useContext(useContextCategories)
    return (
        <SafeAreaView style={styles.list} >
            <SectionList
                sections={[
                    { heading: "Select a category ", data: categories }
                ]}
                renderSectionHeader={({ section }) => (
                    <View>
                        <SectionHeading heading={section.heading} />
                    </View>
                )
                }
                renderItem={({ item }) => (
                    <ListItem
                        name={item.name.en}
                        text="Learn"
                        color="rgba(6, 182, 212, 1)"
                        Svg={VectorIcon}
                        onPress={() => navigation.navigate("Details", {
                            itemId: getPhraseIdsForCategory(item.id),
                            category: item
                        })}
                    />
                )
                }
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}