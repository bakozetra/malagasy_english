import React, { useEffect, useState } from 'react';
import DataCategories from "../data/categories.json"
import DataPhrases from "../data/phrases.json"
import { getAllPhrases } from "../data/dataUtils"


export const useContextCategories = React.createContext();
const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [Phrases, setPhrases] = useState([]);

    const findPhraseCategories = phraseId => {
        return Phrases.phrases;
    };

    const filterPhaseById = (id) => {
        const filterDataPhraseById = Phrases.phrases.filter(phaseId => phaseId.id === id)
        return filterDataPhraseById
    }


    useEffect(() => {
        setCategories(DataCategories.categories)
        setPhrases(DataPhrases)
    }, [])



    return (
        <useContextCategories.Provider value={{ categories, setCategories, Phrases, findPhraseCategories, filterPhaseById }}>
            {children}
        </useContextCategories.Provider>
    )
}
export default CategoriesProvider;