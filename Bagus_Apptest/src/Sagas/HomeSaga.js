import {
    all,
    call,
    put,
    select,
    takeLatest
  } from 'redux-saga/effects';
import { actionGetContactSuccess, actionAddContactSuccess, actionGetContactIdSuccess, actionDelContactSuccess, actionEditContactSuccess } from '../Actions/HomeAction';import {
    getContact,
    postContact,
    dellContactId,
    getContactId,
    putContactId,
  } from '../service/masterService';
  import {showMessage} from 'react-native-flash-message';



  function* onFetchAllContact() {
    
    try {
      const dataContact = yield call(getContact);
      console.log('data hehehe', dataContact)
      showMessage({
        message: 'Berhasil',
        description: 'Berhasil mengambil data',
        type: 'success',
        icon: 'success',
      });
      yield put(actionGetContactSuccess(dataContact.data.data));

    } catch (error) {
      console.log("error",error)
      showMessage({
        message: 'Gagal',
        description: 'Gagal mengambil data',
        type: 'danger',
        icon: 'danger',
      });
      
    }
  }

  function* onAddContact(action) {
    console.log("actionnyaaa", action)
    try {
      const addContact = yield postContact(action.payload);
      console.log('data hehehe', addContact)
      showMessage({
        message: 'Berhasil',
        description: 'Berhasil menambahkan data',
        type: 'success',
        icon: 'success',
      });

      yield put(actionAddContactSuccess(addContact.data.data));
    
    } catch (error) {
      console.log("error",error)
      showMessage({
        message: 'Gagal',
        description: 'Gagal menambahkan data',
        type: 'danger',
        icon: 'danger',
      });
     
    }
  }

  function* onGetIdContact(action) {
    console.log("actionnyaaa", action)
    try {
      const resIdContact = yield getContactId(action.payload);
      console.log('data id', resIdContact)
      showMessage({
        message: 'Berhasil',
        description: 'Berhasil mengambil data',
        type: 'success',
        icon: 'success',
      });
      yield put(actionGetContactIdSuccess(resIdContact.data.data));

    } catch (error) {
      console.log("error",error)
      showMessage({
        message: 'Gagal',
        description: 'Gagal mengambil data',
        type: 'danger',
        icon: 'danger',
      });
     
    }
  }

  function* onDellContact(action) {
    console.log("actionnyaaa", action)
    try {
      const dellIdContact = yield dellContactId(action.payload);
      console.log('data id', dellIdContact)
      showMessage({
        message: 'Berhasil',
        description: 'Berhasil menghapus data',
        type: 'success',
        icon: 'success',
      });
      yield put(actionDelContactSuccess(dellIdContact.data.data));

    } catch (error) {
      console.log("error",error)
      showMessage({
        message: 'Gagal',
        description: 'Gagal menghapus data',
        type: 'danger',
        icon: 'danger',
      });
     
    }
  }

  function* onEditContact(action) {
    console.log("actionnyaaa EDIT", action)
    const body ={
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      age: action.payload.age,
      photo:action.payload.photo,
    }
    try {
      const updateIdContact = yield putContactId(action.payload.id, body );
      console.log('data id', updateIdContact)
      showMessage({
        message: 'Berhasil',
        description: 'Berhasil update data',
        type: 'success',
        icon: 'success',
      });
      yield put(actionDelContactSuccess(updateIdContact.data.data));

    } catch (error) {
      console.log("error",error)
      showMessage({
        message: 'Gagal',
        description: 'Gagal update data',
        type: 'danger',
        icon: 'danger',
      });
     
    }
  }


  export default function* HomeSaga() {
    yield all(
      [
        takeLatest('GET_CONTACT', onFetchAllContact),
        takeLatest('ADD_CONTACT', onAddContact),
        takeLatest('GET_CONTACT_ID', onGetIdContact),
        takeLatest('DEL_CONTACT', onDellContact),
        takeLatest('EDIT_CONTACT', onEditContact),
      ]
    );
  }