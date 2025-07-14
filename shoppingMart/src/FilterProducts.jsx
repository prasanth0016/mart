import React from 'react'

export default function FilterProducts({ category }) {
    let filterproducts;
    console.log(category, "category");
    if (category == "all") {
        filterproducts = "all";
    }

    return (
        <div>FilterProducts {filterproducts}</div>
    )
}
