import React, { useContext, useEffect, useRef, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import ToolButton from '../components/ToolButton/toolButton';
import SunIcon from "../svg/sun-icon"
import GoBack from "../svg/next-icon"
import SwitchIcon from "../svg/translate"
import LanguageSwitcher from '../components/languageSwitcher/languageSwitcher';
import PhraseTextarea from '../components/PraseTextarea/PhraseTextarea';
import ListItem from '../components/ListItem/listItem';
import VectorIcon from '../svg/vector';
import CorrectIcon from "../svg/true"
import { useContextCategories } from "../Context/GlobalContext"


const styles = StyleSheet.create({
    container: {
        paddingLeft: 23,
        paddingRight: 23
    },
    IconTypes: {
        width: 200,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 35,

    },

    text: {
        color: "rgba(17, 24, 39, 1)",
        fontSize: 18,
        paddingTop: 60,
        paddingBottom: 30

    },
    phrase: {
        paddingBottom: 15
    },
    textarea: {
        paddingBottom: 75
    }
})

const LearningScreen = ({ route }) => {
    const { itemId, category, phaseCategories, } = route.params;
    const { filterPhaseById } = useContext(useContextCategories)
    const [phraseRandomly, setPhraseRandomly] = useState([]);
    const [getTextPhrase, setgetTextPhrase] = useState([]);
    const [isCorrect, setCorrect] = useState(false)
    function checkTheAnswer(id) {
        if (getTextPhrase[0]?.id === id) {
            console.log("true");
            setCorrect(!isCorrect)
        } else {
            setCorrect(isCorrect)
            console.log("wrong");
        }
    }

    function randomly() {
        const categoriesId = itemId[Math.floor(Math.random() * itemId.length)];
        const categorieeId1 = phaseCategories[Math.floor(Math.random() * phaseCategories.length)];
        const categoriesId2 = phaseCategories[Math.floor(Math.random() * phaseCategories.length)];
        const categoriesId3 = phaseCategories[Math.floor(Math.random() * phaseCategories.length)]
        const getTextFiltered = filterPhaseById(categoriesId)
        const filterPrases = phaseCategories.filter(ids => ids.id === categoriesId)
        setgetTextPhrase(filterPrases)
        let randomOptions = [
            { name: getTextFiltered[0].name.mg, id: getTextFiltered[0].id },
            { name: categorieeId1.name.mg, id: categorieeId1.id },
            { name: categoriesId2.name.mg, id: categoriesId2.id },
            { name: categoriesId3.name.mg, id: categoriesId2.id }
        ]
        randomOptions.sort(() => { return 0.5 - Math.random() });
        setPhraseRandomly(randomOptions)
    }
    useEffect(() => {
        randomly()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.IconTypes}>
                <ToolButton Icon={GoBack} />
                <ToolButton Icon={SunIcon} />
                <LanguageSwitcher
                    english="EN"
                    gasy="MG"
                    SwitchIcon={SwitchIcon}
                />
            </View>
            <Text style={styles.text}> Category : {category.name.en}</Text>
            <View style={styles.textarea}>
                <Text style={styles.phrase}>The phrase:</Text>
                <PhraseTextarea
                    phrase={getTextPhrase[0]?.name.en}
                    editable={false}
                />
            </View>
            <View>
                {phraseRandomly.map(text => {
                    return (
                        <View key={text.id}>
                            <ListItem
                                text={"Pick"}
                                Svg={VectorIcon}
                                color={blue}
                                name={text.name}
                                onPress={() => checkTheAnswer(text.id)}
                            />
                        </View>
                    )
                })}
            </View>
        </SafeAreaView>
    )
}

export default LearningScreen