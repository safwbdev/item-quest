import React from 'react'
import { Link } from 'react-router-dom'

const CategoryBox = ({ category }) => {
    return (
        <Link to={`/list/${category.id}`}>
            <div className='border-1 flex justify-center items-center h-[15vh] bg-black'>
                <span className='text-white font-bold uppercase rotate-40'>
                    {category.name}
                </span>
            </div>
        </Link>
    )
}

export default CategoryBox