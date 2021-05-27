import { Dispatch } from "react";

// Get And Save Token
export const START: string = 'START';
export const SAVE_NUMBER: string = 'SAVE_NUMBER';
export const CLEAN_NUMBER: string = 'CLEAN_NUMBER';

export const start = () => {
    return {type: START};
  };
  
  export const setNumber = (data:  number[]) => {
    return {type: SAVE_NUMBER, data};
  };
  
  export const cleanLog = () => {
    return {type: CLEAN_NUMBER};
  }
 