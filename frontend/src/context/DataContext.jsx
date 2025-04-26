import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const dataContext = createContext(undefined);

const DataContext = (props) => {
    const [catergories, setCategories] = useState([])
    const [lists, setLists] = useState([
        {
            id: 0,
            name: "Groceries",
            list: [
                { lid: 1, item: "Salt", img: null, acquired: false },
                { lid: 2, item: "Pepper", img: null, acquired: false },
                { lid: 3, item: "Mayo", img: null, acquired: true },
                { lid: 4, item: "Ketcup", img: null, acquired: true },
            ],
        },
        {
            id: 3,
            name: "Kojima",
            list: [
                { lid: 5, item: "MGS1", img: null, acquired: true },
                { lid: 6, item: "MGS2", img: null, acquired: true },
                { lid: 7, item: "MGS3", img: null, acquired: true },
                { lid: 8, item: "MGS4", img: null, acquired: true },
            ],
        },
        {
            id: 9,
            name: "Ghostbusters",
            list: [
                { lid: 5, item: "GB1", img: null, acquired: true },
                { lid: 6, item: "GB2", img: null, acquired: true },
                { lid: 7, item: "GBTVG", img: null, acquired: true },
                { lid: 8, item: "GBATC", img: null, acquired: false },
                { lid: 8, item: "GBA", img: null, acquired: true },
                { lid: 8, item: "GBFE", img: null, acquired: true },
            ],
        },
    ]);

    useEffect(() => {
        setCategories(lists.map(list => {
            return { id: list.id, name: list.name }
        }))
    }, [lists])




    const values = useMemo(() => ({
        catergories,
        lists,
        setLists,
    }), [
        catergories,
        lists,
        setLists,])

    return (
        <dataContext.Provider value={values}>
            {props.children}
        </dataContext.Provider>
    )
}

const useDataContext = () => {
    const context = useContext(dataContext);
    if (!context) {
        throw new Error('Error!');
    }
    return context
}
export { DataContext, useDataContext }