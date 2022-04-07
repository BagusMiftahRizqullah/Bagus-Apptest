import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavNavigate } from '../../Components/NavNavigate'
import {useSelector, useDispatch} from 'react-redux';
import { actionGetContactId } from '../../Actions/HomeAction';

const HomeDetailScreen = (props, {navigation}) => {
  const dispatch = useDispatch();
  const DataContactDetail = useSelector(state => {
    console.log(state, '<===== ini state');
    // ini aku tambahin untuk handling data pertama kali waktu masih null
    if (
      state.HomeReducer.dataContactDetail != null 
    ) {
      return state.HomeReducer.dataContactDetail
    } else {
      return {};
    }
   
  });
  console.log(DataContactDetail, 'ini hasil data DataContact');

  useEffect(() => {
    console.log("iddd", props.route.params)
    dispatch(actionGetContactId(props.route.params.id));
  }, [navigation])
  

  return (
    <View style={{flex: 1}}>
    <NavNavigate text={`${props.route.params.name}`} onPress={() => props.navigation.goBack()} />

    <View style={styles.wrappper}>
      <View style={styles.card}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.circle}>
          <Image
              style={styles.icon}
              source={DataContactDetail?.photo?.includes('jpg') ? {uri: DataContactDetail.photo}: require('@images/default_pp_acount.png') }
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            {/* <Image
              style={[styles.icon, {marginRight: 20}]}
              source={require('@images/delete.png')}
            /> */}
            {/* <Image style={styles.icon} source={require('@images/edit.png')} /> */}
          </View>
        </View>
        <Text style={[styles.greenText, {marginVertical: 15}]}>
       {
         `${DataContactDetail.firstName} ${DataContactDetail.lastName}`
       }
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.greenText}>ID : </Text>
          <Text style={styles.greenText}>{DataContactDetail.id}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.greenText}>UMUR : </Text>
          <Text style={styles.greenText}>{DataContactDetail.age}</Text>
        </View>
     
     
      </View>
    </View>
  </View>
  )
}

export default HomeDetailScreen

const styles = StyleSheet.create({

    circle: {
        backgroundColor: '#009092',
        height: 70,
        width: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
      },
      icon: {
        height: 50,
        width: 50,
      },
      text: {
        fontSize: 10,
        color: '#E3E3E3'
      },
      greenText: {
        fontSize: 12,
        color: 'green'
      },
      whiteText: {
        fontSize: 20,
        color: '#fff',
      },
      card: {
        backgroundColor: '#fff',
        elevation: 3,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingTop: 20,
        paddingBottom: 20,
      },
      wrappper: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 30,
      },
})