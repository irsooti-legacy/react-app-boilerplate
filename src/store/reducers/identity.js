import * as actionTypes from '../types';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_IDENTITY:
      return { ...state, ...payload };

    default:
      return state;
  }
};
