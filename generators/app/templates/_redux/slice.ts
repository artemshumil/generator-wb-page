import { createSlice } from '@reduxjs/toolkit';
import { <%= state_ConstantCase %>_REDUCER_NAME } from './constants';
import { <%= state_PascalCase %>StateType } from './types';

export const initialState: <%= state_PascalCase %>StateType = {};

const slice = createSlice({
  name: <%= state_ConstantCase %>_REDUCER_NAME,
  initialState,
  reducers: {
    <%= saga_CamelCase %>ActionSaga: state => state,
    clearState: () => ({
      ...initialState,
    }),
  },
});

export const <%= state_CamelCase %>StateActions = slice.actions;

export default slice.reducer;
