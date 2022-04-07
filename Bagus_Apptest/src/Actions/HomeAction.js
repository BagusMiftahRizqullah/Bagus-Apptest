export const actionGetContact = payload => {
    return {
      type: 'GET_CONTACT',
      payload,
    };
  };
  
  export const actionGetContactSuccess = payload => {
    return {
      type: 'GET_CONTACT_SUCCESS',
      payload,
    };
  };

  export const actionAddContact = payload => {
    console.log("add", payload)
    return {
      type: 'ADD_CONTACT',
      payload,
    };
  };
  
  export const actionAddContactSuccess = payload => {
    return {
      type: 'Add_CONTACT_SUCCESS',
      payload,
    };
  };

  export const actionGetContactId = payload => {
    return {
      type: 'GET_CONTACT_ID',
      payload,
    };
  };
  
  export const actionGetContactIdSuccess = payload => {
    return {
      type: 'GET_CONTACT_ID_SUCCESS',
      payload,
    };
  };

  export const actionDelContact = payload => {
 
    return {
      type: 'DEL_CONTACT',
      payload,
    };
  };
  
  export const actionDelContactSuccess = payload => {
    return {
      type: 'DEL_CONTACT_SUCCESS',
      payload,
    };
  };


  export const actionEditContact = payload => {
 
    return {
      type: 'EDIT_CONTACT',
      payload,
    };
  };
  
  export const actionEditContactSuccess = payload => {
    return {
      type: 'EDIT_CONTACT_SUCCESS',
      payload,
    };
  };