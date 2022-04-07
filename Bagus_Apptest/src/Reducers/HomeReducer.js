const initialState = {
    dataContact: [],
    dataContactDetail:{},
    dataSuksesAdd:false,

  };
  
  const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_CONTACT':
        return {
          ...state,
        };
  
      case 'GET_CONTACT_SUCCESS':
        return {
          ...state,
          dataContact: action.payload,
        };

        case 'ADD_CONTACT':
          return {
            ...state,
            dataSuksesAdd: false
          };
    
        case 'Add_CONTACT_SUCCESS':
          return {
            ...state,
            dataSuksesAdd: true
          };

          case 'GET_CONTACT_ID':
            return {
              ...state,
            };
      
          case 'GET_CONTACT_ID_SUCCESS':
            return {
              ...state,
              dataContactDetail: action.payload,
            };

            case 'DEL_CONTACT':
              return {
                ...state,
              };
        
            case 'DEL_CONTACT_SUCCESS':
              return {
                ...state,
                
              };

              case 'EDIT_CONTACT':
                return {
                  ...state,
                };
          
              case 'EDIT_CONTACT_SUCCESS':
                return {
                  ...state,
                  
                };

              case 'CLEAR_DATA':
                  return {
                    ...state,
                    dataSuksesAdd: false
                  };
  
      default:
        return state;
    }
  };
  
  export default HomeReducer;