import {post, get, put,remove} from '../Services/services';

export const getContact = () => {
  return get('/contact');
};

export const postContact = (Body) => {
  console.log("bodys nya", Body)
  return post('/contact',Body);
};

export const getContactId = (id) => {
  return get(`/contact/${id}`);
};

export const putContactId = (id, body) => {
  return put(`/contact/${id}`, body);
};

export const dellContactId = (id) => {

  console.log("id DEll", id)

  return remove(`/contact/${id}`);
};