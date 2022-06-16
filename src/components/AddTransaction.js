import React from 'react'

export const AddTransaction = () => {
  return (
    <div>
        <h3>Add new transaction</h3>
        <form id="form">
            <div class="form-control">
            <label for="text">Transaction Name</label>
            <input type="text" id="text" placeholder="Enter name of transaction" />
            </div>
            <div class="form-control">
            <label for="amount"> Amount </label>
            <input type="number" id="amount" placeholder="Enter amount" />
            </div>
            <button class="btn">Add transaction</button>
        </form>
    </div>
  )
}
