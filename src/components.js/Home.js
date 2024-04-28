import React, { useState } from "react";
import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm"
import SearchTransactions from "./SearchTransactions";

function TransactionHolder() {
    // Defining our transactions array
    const [transactions, setTransactions] = useState([
        { id: 1, date: "2020-01-01", description: "Rent", category: "Housing", amount: "Ksh 50000" },
        { id: 2, date: "2017-01-02", description: "Groceries", category: "Food", amount: "Ksh 5000" },
        { id: 3, date: "2019-10-07", description: "Car Payment", category: "Transport", amount: "Ksh 20000" },
        { id: 4, date: "2018-11-11", description: "Movie", category: "Entertainment", amount: "Ksh 400" },
        { id: 5, date: "2019-12-12", description: "Chapati", category: "Food", amount: "Ksh 1000" },
        { id: 6, date: "2021-11-02", description: "Birthday Party", category: "Entertainment", amount: "Ksh 30000" },
    ]);

    // Defining the newTransaction state
    const [newTransaction, setNewTransaction] = useState({
        date: "",
        description: "",
        category: "",
        amount: ""
    });

    // Function to handle changes in the form fields
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewTransaction({
            ...newTransaction,
            [name]: value
        });
    };

    // Function to add a new transaction
    const addTransaction = (event) => {
        event.preventDefault();
        // Ensure all fields are filled
        if (newTransaction.date && newTransaction.description && newTransaction.category && newTransaction.amount) {
            const id = transactions.length + 1;
            const inputTransaction = { id, ...newTransaction };
            setTransactions([...transactions, inputTransaction]);
            // Clear the form
            setNewTransaction({
                date: "",
                description: "",
                category: "",
                amount: ""
            });
        } else {
            alert('Please fill out all fields');
        }
    };

    return (
        <div>
            <SearchTransactions transactions={transactions} onSearch={handleSearch} />
            <h1>My Transactions</h1>
            {/* TransactionForm component */}
            <TransactionForm
                newTransaction={newTransaction}
                handleInputChange={handleInputChange}
                addTransaction={addTransaction}/>
                
            {/* TransactionTable component */}
            <TransactionTable transactions={transactions} />

        </div>
    );
}

export default TransactionHolder;
