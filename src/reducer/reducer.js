import { actionTypes } from "../actions";

const initialState = {
  articulos: [], // {id, name, type, img_url} de todos los pokemones, se ira modificando con los filtrados y sorts
 
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ARTICULOS: {
      return {
        ...state,
        
        articulos: action.payload,
        
      };
    }

    
    default:
      return { ...state };
  }
}

export default rootReducer;
