import {START, SAVE_NUMBER, CLEAN_NUMBER, Numbers} from '../actions/saveNumberActions';

export const initialState = {
  data: [], 
};

const dataReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        data: [], 
      };
    case SAVE_NUMBER:
        return {
            ...state,
            data: [...state.data, action.data], 
        };        
    case CLEAN_NUMBER:
      return {
        ...state,
        data: [], 
      }
    default:
      return state;
  }
};

export default dataReducer;