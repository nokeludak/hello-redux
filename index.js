const Redux = require('redux');
const _ = require('lodash');

// ACTION CREATORS -- ACTIONS
const openAccount = (name, cash) => {
    return {
        type: 'OPEN_ACCOUNT',
        payload: { name, cash }
        
    }
}

const closeAccount = (name) => {
    return {
        type: 'CLOSE_ACCOUNT',
        payload: { name }
        
    }
}

const deposit = (name, cash) => {
    return {
        type: 'DEPOSIT',
        payload: { name, cash }
        
    }
}
const withdraw = (name, cash) => {
    return {
        type: 'WITHDRAW',
        payload: { name, cash }
        
    }
}

// REDUCER
const accounts = (accountList = [], action) => {
    switch (action.type) {
        case 'OPEN_ACCOUNT':
           return [...accountList, action.payload]
            case 'CLOSE_ACCOUNT':
                return accountList.filter(item => item.name !== action.payload.name);
                    case 'DEPOSIT':
                        return _.map(accountList, item =>
                            item.name === action.payload.name ?
                            { name: item.name, cash: item.cash + action.payload.cash} : item
                            );
                        case 'WITHDRAW':
                            return _.map(accountList, item =>
                                item.name === action.payload.name ?
                                { name: item.name, cash: item.cash - action.payload.cash} : item
                                );
                        default:
                            return accountList;
    }
}
const { createStore, combineReducers } = Redux;
const departments = combineReducers({
  accounts
});
const store = createStore(departments);

console.log('INIT', store.getState());

store.dispatch(openAccount('John Doe', 50));
store.dispatch(openAccount('Jane Doe', 50));
store.dispatch(openAccount('Markus O', 0));
console.log('OPEN', store.getState());

store.dispatch(deposit('John Doe', 100));
store.dispatch(deposit('Jane Doe', 50));
store.dispatch(deposit('Markus O', 70));
console.log('DEPOSIT', store.getState());

store.dispatch(withdraw('John Doe', 30));
store.dispatch(withdraw('Jane Doe', 20));
store.dispatch(withdraw('Markus O', 100));
console.log('WITHDRAW', store.getState());
