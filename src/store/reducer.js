// import {
//   addNumber,
//   deleteNumber,
//   setStatusFilter,
// } from "./actions";

// import { statusFilters } from "./constants";

import { combineReducers } from "redux";
import {addNumberReducer} from './contacts/addNumberReducer'

export const rootReducer = combineReducers({
  contacts: addNumberReducer,
  // filter: filtersReducer,
})


// const tasksInitialState = {
//   contacts: [
//       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//       {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//       {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//       {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   ],
// }

// export const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case addNumber.type:
//       return [...state, action.payload];

//     case deleteNumber.type:
//       return state.filter(task => task.id !== action.payload);

    // case toggleCompleted.type:
    //   return state.map(task => {
    //     if (task.id !== action.payload) {
    //       return task;
    //     }
    //     return { ...task, completed: !task.completed };
    //   });

//     default:
//       return state;
//   }
// };

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case setStatusFilter.type:
//       return {
//         ...state,
//         status: action.payload,
//       };

//     default:
//       return state;
//   }
// };
