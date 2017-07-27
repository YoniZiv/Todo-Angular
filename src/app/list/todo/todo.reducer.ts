import { NEW_TODO, TOGGLE } from '../todo.actions';

export function todoReducer(state = [], action) {
  switch (action.type) {
    case NEW_TODO: {
      console.log('We are now in the reducer. We chose LOGIN and we set Pending to true.');
      return [...state, {
        completed: false,
        text: action.payload.text,
        id: Math.floor(Math.random() * (10000 - 10 + 1)) + 10
      }];
    }

    case TOGGLE: {
      const updateItem = item => ({
        ...item,
        completed: !item.completed
      });

      return state.map(item => (item.id === action.payload.id ? updateItem(item) : item));

    }
    default: {
      console.log('Reducer reached default case, returning same state');
      return state;
    }
  }

}
