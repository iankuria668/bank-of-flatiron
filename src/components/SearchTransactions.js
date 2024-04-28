import React, { useState } from "react";

function SearchTransactions({ transactions, onSearch, onReset }) {
    const [searchItem, setSearchItem] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        setSearchItem(value);
        
        const filteredTransactions = transactions.filter(transaction =>
            transaction.description.toLowerCase().includes(value.toLowerCase())
        );
        onSearch(filteredTransactions);
    };

    return (
        <div>
            <input
                type="text"
                name="search"
                value={searchItem}
                onChange={handleChange}
                placeholder="Search Transactions"
            />
            {/* Add a button to reset search */}
            <button onClick={onReset}>Reset</button>
        </div>
    );
}

export default SearchTransactions;
