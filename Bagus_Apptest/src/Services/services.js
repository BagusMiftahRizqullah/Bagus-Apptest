import Axios from 'axios';
import {showMessage} from 'react-native-flash-message';


export const api = Axios.create({
  baseURL: 'https://simple-contact-crud.herokuapp.com',
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});


export const get = async (url, isAuthenticated = false, dummy) => {
  let selectedInstance = null;
 
  selectedInstance = api;

  return selectedInstance.get(url).then((res)=>{
    return res
  }).catch((err)=>{ console.log("error")})
  
};

export const post = async (
  url,
  data = {},
  isAuthenticated = false,
  dummy = false,
  isRaw = false,
) => {
  let selectedInstance = api;

    return selectedInstance
      .post(url,data)
      .catch(function (error) {
        showMessage({
          message: 'Gagal',
          description: 'Gagal Fetch',
          type: 'danger',
          icon: 'danger',
        });
        return error.response.data;
      });
};


export const put = async (url, data, isAuthenticated = false) => {

  return api.put(url,data);
};


export const patch = async (url, data = {}, isAuthenticated = false) => {

  return api.patch(url, data);
};




export const remove = async (url, isAuthenticated = false) => {

  return api.delete(url);
};

