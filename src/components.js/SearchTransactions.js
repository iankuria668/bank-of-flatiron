import React, { useState } from "react";

function SearchTransactions({transactions, onSearch}){
    const [searchItem, setSearchItem] = useState('');

    const handleChange = (event) => {
        const {value} = event.target;
        setSearchItem(value);
        onSearch(value);
    };
    return(
        <div>
            <input
                type="text"
                name="search"
                value={searchItem}
                onChange={handleChange}
                placeholder="Search Transactions"
            />
        </div>
    )
};
export default SearchTransactions;