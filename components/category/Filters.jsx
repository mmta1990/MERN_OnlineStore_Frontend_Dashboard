import React from 'react'
import FilterWidget from './FilterWidget'
export default function Filters({category}) {
    return (
        <div className="col-md-3">
            {category.groups.map(group => (<FilterWidget {...group}/>))}
        </div>
    )
}
