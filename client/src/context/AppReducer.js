
const switchState = (state, action) => {
    switch(action.type) {
        case 'delete_transaction':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

        case 'add_transaction' :
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }

        case 'lightmode' :
            return {darkMode : false}

        case 'darkmode' :
            return {darkMode : true}
            
        default : 
            return state;
    }
}

export default switchState;