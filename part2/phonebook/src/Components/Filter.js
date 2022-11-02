import React from 'react'

const Filter = ({filterValue, filterChange}) => {
    return (
        <div>
            filter shown with 
            <input
            value = {filterValue}
            onChange = {filterChange}
            />
        </div>
    )
}

export default Filter