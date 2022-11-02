import React from 'react'

const Filter = ({filterValue, filterChange}) => {
    return (
        <div>
            find countries 
            <input
            value = {filterValue}
            onChange = {filterChange}
            />
        </div>
    )
}

export default Filter