export const actionLoading = payload => {
    return {
      type: 'SET_LOADING',
      payload,
    };
  };

  export const actionSuccess = payload => {
    return {
      type: 'SET_SUCCESS',
      payload,
    };
  };
  
 