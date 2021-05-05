import React, { useEffect, useState } from 'react';
import DataCategories from "../data/categories.json"

export const useContextCategories = React.createContext();
const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        setCategories(DataCategories.categories)
    })

    return (
        <useContextCategories.Provider value={{ categories, setCategories }}>
            {children}
        </useContextCategories.Provider>
    )
}
export default CategoriesProvider;