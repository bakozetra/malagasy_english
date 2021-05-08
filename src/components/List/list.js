// components/Task.js
import React, { useContext, useState } from 'react';
import { SafeAreaView, SectionList, View, StyleSheet, } from 'react-native';
import ListItem from "../ListItem/listItem"
import SectionHeading from "../SectionHeading/sectionHeading"
import VectorIcon from '../../svg/vector';
import { useContextCategories } from '../../Context/GlobalContext';
import { useNavigation } from '@react-navigation/native';
import { getPhraseIdsForCategory } from "../../data/dataUtils"
import DataPhrases from "../../data/phrases.json"

const styles = StyleSheet.create({
    list: {
        marginRight: 23,
        marginLeft: 23,
        height: 650,
        maxHeight: "90%"

    },
    heading: {
        paddingTop: 10
    },
    itemLists: {
        height: "70%"
    }

})


export default function List() {
    const navigation = useNavigation();
    const { categories, findPhraseCategories } = useContext(useContextCategories)
    const [wordSeen, setWordSeen] = useState([{ id: 1, name: { en: " words and phrases", mg: "teny sy lahatsoratra" } }])
    return (
        <SafeAreaView style={styles.list}>
            <View style={styles.itemLists} >
                <SectionList
                    sections={[
                        { heading: "Select a category ", data: categories },
                    ]}

                    renderSectionHeader={({ section }) => (
                        <View >
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
                                category: item,
                                phaseCategories: findPhraseCategories(item.id),
                            })}
                        />
                    )

                    }
                    keyExtractor={item => item.id}
                />
            </View>
            <View>
                <SectionList
                    sections={[{ heading: "Phrases", data: wordSeen },]}
                    renderSectionHeader={({ section }) => (
                        <View style={styles.heading}>
                            <SectionHeading heading={section.heading} />
                        </View>
                    )}
                    renderItem={({ item }) => (
                        <ListItem
                            name={item.name.en}
                            text="Learn"
                            color="rgba(6, 182, 212, 1)"
                            Svg={VectorIcon}
                        />
                    )
                    }
                />
            </View>
            <View>
                <SectionList
                    sections={[{ heading: "Learnt phrases", data: wordSeen }, ,]}
                    renderSectionHeader={({ section }) => (
                        <View style={styles.heading}>
                            <SectionHeading heading={section.heading} />
                        </View>
                    )}
                    renderItem={({ item }) => (
                        <ListItem
                            name={item.name.en}
                            text="Learn"
                            color="rgba(6, 182, 212, 1)"
                            Svg={VectorIcon}
                        />
                    )
                    }
                />
            </View>
        </SafeAreaView>
    );
}