import { <%= state_ConstantCase %>_REDUCER_NAME } from './constants';

export type <%= state_PascalCase %>StateType = {};

export type <%= state_PascalCase %>StatePartType = {
  [<%= state_ConstantCase %>_REDUCER_NAME]: <%= state_PascalCase %>StateType;
};
