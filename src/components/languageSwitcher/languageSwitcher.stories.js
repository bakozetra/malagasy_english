import * as React from 'react';
import { Alert, View, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import LanguageSwitcher from './languageSwitcher';
import SwitchIcon from "../../svg/translate"

const language = {
    gasy: "MA",
    english: "EN"
}
function Languages() {
    const [language, setLanguage] = React.useState("EN");

    return (

        <LanguageSwitcher
            gasy={language !== "EN" ? <Text>MA</Text> : <Text>EN</Text>}
            english={language == "EN" ? <Text>EN</Text> : <Text>EN</Text>}
            SwitchIcon={SwitchIcon}
            onPress={() => setLanguage(!language)}
        />


    )
}
storiesOf('LanguageSwitcher', module)
    .addDecorator(story => <View>{story()}</View>)
    .add('short',
        () => <LanguageSwitcher
            gasy={language.gasy}
            english={language.english}
            SwitchIcon={SwitchIcon}
            onPress={() => language}
        />)
    .add("test", () => <Languages></Languages>)

