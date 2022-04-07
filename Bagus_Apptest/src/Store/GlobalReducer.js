const initialState = {
    Loading: false,
    Success: {},
    DataContact:[],

  };
  
  const GlobalReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOADING':
        return {
          ...state,
          Loading: action.payload,
        };
      case 'SET_SUCCESS':
        return {
          ...state,
          Success: action.payload,
        };
     
  
      default:
        return state;
    }
  };
  
  export default GlobalReducer;