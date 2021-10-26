// import { createSelector } from 'reselect';
import { <%= state_PascalCase %>StateType, <%= state_PascalCase %>StatePartType } from './types';
import { <%= state_ConstantCase %>_REDUCER_NAME } from './constants';
import { initialState } from './slice';

export const <%= state_KebabCase %>StateSelector = (state: <%= state_PascalCase %>StatePartType): <%= state_PascalCase %>StateType =>
  state[<%= state_ConstantCase %>_REDUCER_NAME] || initialState;
