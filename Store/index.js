import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import data from './data/data.json'

// Initial State
const startState = {
  cards: []
}

// Actions
export const initialCards = () => {
  return {
    type: 'INITIALCARDS',
    cards: data
  }
}
// example of a second Action (not used in App)
export const addItem = (item) => {
  return {
    type: 'ADD',
    item
  }
}

// Reducers
export const reducerz = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALCARDS':
      return {
        cards: action.cards
      }
    case 'ADD':
      return {
        ...state,
        cards: [...state.cards, action.item]
      }
    default: return state
  }
}

// Create Store
export const initStore = (initialState = startState) => {
  return createStore(reducerz, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
