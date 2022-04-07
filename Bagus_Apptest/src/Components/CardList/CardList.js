import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch} from 'react-redux';
import { actionDelContact } from '../../Actions/HomeAction';

const CardList = ({ID, Navigation, name, AGE, firstName, lastName, image}) => {
  const dispatch = useDispatch();

  const goDell =()=>{
 
   return Alert.alert('PERHATIAN','Anda yakin ingin menghapus data ini ?', [
      {
        text: 'Tidak',
        style: 'cancel',
      },
      {text: 'Iya', onPress: () =>  dispatch(actionDelContact(ID))},
    ])
  }
  
  return (
    <TouchableOpacity onPress={()=> Navigation.navigate('HomeDetail', {id:ID, name: firstName + lastName })} style={styles.wrapper}>
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      locations={[0, 0.5, 1]}
      colors={['#002F30', '#009092', '#B3E2DA']}
      style={styles.cardWrapper}>
      <View style={styles.teamInfo}>
        <Text style={styles.textName}>{ `${firstName} ${lastName}`}</Text>
        <View style={styles.wrapperTeam}>
          {/* <Image
            source={require('@images/agent_code_white.png')}
            style={styles.teamLogo}
            resizeMode="contain"
          /> */}
          <Text style={styles.teamCode}>{AGE}</Text>
          {/* <Text style={styles.bullets}>•</Text> */}
          <Text style={styles.teamCode}>Tahun</Text>
        </View>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          locations={[0, 0.5, 1]}
          colors={['#66573E', '#B2A398', '#E2D6CF']}
          style={styles.infoButton}>
          <View style={styles.infoClick}>
            <TouchableOpacity
              onPress={() => Navigation.navigate('Add',  {id:ID, first: firstName, last: lastName, ages: AGE, photo: image})}>
              <Text style={styles.textInfo}>EDIT</Text>
            </TouchableOpacity>
            <Text style={styles.bullets}>•</Text>
            <TouchableOpacity
              onPress={() => goDell()}>
              <Text style={[{color: 'red'}, styles.textInfo]}>DELETE</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </LinearGradient>
    <Image source={image} style={styles.profileWrapper} />
  </TouchableOpacity>
  )
}

export default CardList

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      cardWrapper: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        flexDirection: 'row',
        width: '90%',
        marginTop: 20,
      },
      teamInfo: {
        // marginRight: 35,
      },
      textName: {
        fontSize: 12,
        lineHeight: 18,
        color: '#fff',
      },
      wrapperTeam: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom:5,
        alignItems: 'center',
      },
      teamLogo: {
        width: 10,
        height: 10,
        marginRight: 8,
        color: '#000000',
      },
      teamCode: {
        fontSize: 10,
        lineHeight: 13,
        color: '#fff',
        marginRight: 3,
      },
      teamEmail: {
        fontSize: 10,
        lineHeight: 13,
        color: '#fff',
        marginRight: 3,
        width: 140,
      },
      bullets: {
        color: '#fff',
        marginHorizontal: 5,
      },
      profileWrapper: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginLeft: -30,
        // resizeMode: 'contain',
      },
      infoButton: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: 200,
        marginTop: 10,
      },
      infoClick: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      textInfo: {
        fontSize: 10,
        lineHeight: 13,
        color: '#fff',
      },

})