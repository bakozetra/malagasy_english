import * as React from 'react';
import {Text, SafeAreaView, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  languageSwitcher: {
    height: 40,
    width: 90,
    borderRadius: 30,
    backgroundColor: 'rgba(6, 182, 212, 1)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  // Lots of repetition here
  malagasyLanguage: {
    marginRight: 10,
    color: 'white',
    fontSize: 13,
    textTransform: 'uppercase',
  },
  englishLanguage: {
    marginLeft: 10,
    color: 'white',
    fontSize: 13,
    textTransform: 'uppercase',
  },
});
export default function LanguageSwitcher({gasy, english, SwitchIcon, onPress}) {
  // Gasy as a variable name is not immediatly obvious to non-malagasy people
  // The language switcher should not know about the languages passed to it, so primaryLanguage, secondaryLanguage would be better parameters
  // The whole button should be clickable, not only the icon.
  return (
    <SafeAreaView>
      <View style={styles.languageSwitcher}>
        <Text style={styles.englishLanguage}>{english}</Text>
        <SwitchIcon onPress={onPress} />
        <Text style={styles.malagasyLanguage}>{gasy}</Text>
      </View>
    </SafeAreaView>
  );
}
