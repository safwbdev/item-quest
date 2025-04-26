import React from 'react'
import { useDataContext } from '../../context/DataContext';
import CategoryBox from './CategoryBox';

const Categories = () => {
    const { catergories } = useDataContext();

    return (
        <div className="flex justify-center">
            <div className="container p-4">
                <div class="grid grid-cols-3 gap-4">
                    {catergories.map((catergory) => (<CategoryBox category={catergory} />))}
                </div>
            </div>
        </div>
    )
}

export default Categories