import React from 'react'
import { useParams } from 'react-router-dom';

const List = () => {
    let { id } = useParams()

    return (
        <div>List {id}</div>
    )
}

export default List