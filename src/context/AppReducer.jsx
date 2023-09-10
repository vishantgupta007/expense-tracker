export default (state, action) => {
  switch(action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }

    // in this we returning the previous state and and new item(payload.action) to previous items

    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [ ...state.transactions,action.payload]
      }
    default:
      return state;
  }
}