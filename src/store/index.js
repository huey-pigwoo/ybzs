import { configureStore } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  obj: {},
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'saveObj':
      return { ...state, obj: action.payload };
    default:
      return state;
  }
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;
