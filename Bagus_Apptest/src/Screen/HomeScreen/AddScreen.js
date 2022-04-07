import React,{useState, useEffect} from 'react'
import {  
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    Image,
    TouchableOpacity,
    PermissionsAndroid,
    Modal,
 } from 'react-native'
import {Formik} from 'formik';
// import {NavNavigate} from '../../Components/NavNavigate/NavNavigate';
import { NavNavigate } from '../../Components/NavNavigate'
import {launchCamera, launchImageLibrary} from "react-native-image-picker"
import ImageZoom from "react-native-image-pan-zoom"
import { heightPercentageToDP } from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';
import { actionAddContact, actionEditContact } from '../../Actions/HomeAction';
import {showMessage} from 'react-native-flash-message';


const AddScreen = (props, {navigation}) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(true)
    const [iconPhoto, setIcon] = useState(true)
    const [zoomPhoto, setZoomPhoto] = useState(false)
    const [resultPhoto, setResultPhoto] = useState(null)



    useEffect(() => {
     if(props.route.params?.photo){
      setResultPhoto(props.route.params.photo)
      setIcon(false)
     } else{
      setResultPhoto(null)
     }
    }, [])
    

    const openCamera = async () => {
        console.log("open kamera")
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
          title: "App Camera Permission",
          message: "App needs access to your camera",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        })
    
        const granted2 = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "App Camera Permission",
            message: "App needs access to your storage",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          },
        )
    
        if (
          granted === PermissionsAndroid.RESULTS.GRANTED &&
          granted2 === PermissionsAndroid.RESULTS.GRANTED
        ) {
          // if (resultPhoto) return
         await launchCamera({}, hasil => {
             console.log("hasil",JSON.stringify(hasil))
            if (!hasil.assets) {
              // setResultPhoto(null)
              console.log("cancle Pilih Gambar")
            } else {
              const source = {
                uri: hasil?.assets[0]?.uri,
                type: hasil?.assets[0]?.type,
                name: hasil?.assets[0]?.fileName,
              }
              console.log("hasil uri", source)
              setResultPhoto(source)
              setIcon(false)
              setTitle(false)
            }
          })
        }
      }

      const onSubmit = async values => {
        // const namePros = listProspek.filter(a => a.id == selectProspek);
        console.log('datassSUBMITE', resultPhoto);
            if(
                values.firstName == '' ||
                values.lastName == '' ||
                values.age == '' ||
                resultPhoto == null
            ){
                showMessage({
                    message: 'Warning',
                    description: 'Silahkan lengkapi data anda ',
                    type: 'warning',
                    icon: 'warning',
                    autoHide:false,
                    duration:500,
                  });
                  return
            }
        
        const body = {
            firstName: values.firstName,
            lastName: values.lastName,
            age: values.age,
            photo:resultPhoto.uri,
        }

        const body2 = {
          firstName: values.firstName,
          lastName: values.lastName,
          age: values.age,
          photo:resultPhoto.uri,
          id: props.route.params?.id
      }
        
        console.log('bodysReq', body);
    
        if(props.route.params?.id){
          dispatch(actionEditContact(body2))
         
        } else {
          dispatch(actionAddContact(body))
        }
      };
      
  return (
    <View style={{flex: 1}}>
    <NavNavigate
      text="My Contact"
      onPress={() => props.navigation.goBack()}
    />
    <View style={styles.mainWrapper}>
      <Text style={styles.title}>
        Tambah Kontak 
      </Text>
      <Text style={styles.desc}>
        Pastikan data yang dimasukan sudah benar
      </Text>

      <Formik
        onSubmit={values => onSubmit(values)}
        initialValues={{
          firstName: '' || props.route.params?.first,
          lastName: '' || props.route.params?.last,
          age: ''  || props.route.params?.ages,
          photo: ''  || props.route.params?.photo,
        }}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
          setFieldValue,
        }) => (
          <View>
            <View style={styles.textInputWrapper}>
              {/* <Image
                source={require('@images/map.png')}
                style={styles.icons}
              /> */}
              <TextInput
                placeholder="First Name"
                value={values.firstName}
                onBlur={() => setFieldTouched('firstName')}
                onChangeText={handleChange('firstName')}
                touched={touched}
                errors={errors}
              />
            </View>
            <View style={styles.textInputWrapper}>
              {/* <Image
                source={require('@images/map.png')}
                style={styles.icons}
              /> */}
              <TextInput
                placeholder="Last Name"
                value={values.lastName}
                onBlur={() => setFieldTouched('lastName')}
                onChangeText={handleChange('lastName')}
                touched={touched}
                errors={errors}
              />
            </View>

            <View style={styles.textInputWrapper}>
              {/* <Image
                source={require('@images/phone.png')}
                style={styles.icons}
              /> */}
              <TextInput
                placeholder="Age"
                keyboardType="number-pad"
                value={values.age}
                onBlur={() => setFieldTouched('age')}
                onChangeText={handleChange('age')}
                touched={touched}
                errors={errors}
              />
            </View>
            

            {/* image */}
            <View style={styles.textInputWrapperImage}>
            <View style={styles.warapperFotoss}>
          <View style={styles.wrapperPerubahan}>
            <View style={styles.greenLine} />
            <Text style={{ fontSize: 14, fontWeight: "bold", marginLeft: 10 }}>Unggah Foto </Text>
          </View>
          <TouchableOpacity
            style={styles.wrapperUnggah}
            onPress={() => setZoomPhoto(true)}
            disabled={!resultPhoto}
          >
            {resultPhoto && (
              <Image
                source={resultPhoto}
                style={{
                  width: Dimensions.get("window").width / 1.2,
                  height: heightPercentageToDP(18),
                  marginHorizontal: 20,
                  marginTop: heightPercentageToDP(12),
                }}
              />
            )}
            {iconPhoto && (
              <Image source={require('@images/account.png')} style={{ width: 70, height: 70, marginTop: "30%" }}></Image>
            )}
            {title && (
              <Text style={{ fontSize: 12, color: "grey", marginBottom: "30%" }}>
                Belum ada gambar yang di upload
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapperButtonUpload} onPress={() => {
              openCamera()
            }}>
                 <Text style={styles.textButtonUpload}>Upload Photo</Text>
            </TouchableOpacity>
        </View>

            </View>   

       

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Tambah Contact</Text>
              <View style={styles.circle1}>
                {/* <Image
                  source={require('@images/rightarrow.png')}
                  style={[styles.icons, {marginRight: 0}]}
                /> */}
              </View>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
    <Modal
        animationType="fade"
        transparent={true}
        visible={zoomPhoto}
        onRequestClose={() => {
          setZoomPhoto(!zoomPhoto)
        }}
      >
        <View style={{ backgroundColor: "rgba(59, 59, 55, 0.8)", flex: 1 }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 10,
              position: "absolute",
              top: "20%",
            }}
          >
            <ImageZoom
              cropWidth={Dimensions.get("window").width}
              cropHeight={Dimensions.get("window").width}
              imageWidth={Dimensions.get("window").width / 1.2}
              imageHeight={Dimensions.get("window").width}
            >
              <Image style={{ width: "100%", height: "100%" }} source={resultPhoto} />
            </ImageZoom>
          </View>
        </View>
      </Modal>
  </View>
  )
}

export default AddScreen

const styles = StyleSheet.create({
    mainWrapper: {
        paddingHorizontal: 20,
        paddingTop: 30,
        flex: 1,
      },
      title: {
        fontSize: 18,
        color: '#009092',
        marginBottom: 10,
      },
      desc: {
        fontSize: 12,
        color: '#000000',
      },
      textInputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#808080',
        borderWidth: 0.5,
        height: 40,
        paddingHorizontal: 20,
        marginTop: 30,
      },
      icons: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
        marginRight: 20,
      },
      button: {
        flexDirection: 'row',
        backgroundColor: '#009092',
        borderRadius: 5,
        height: 48,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 23,
        marginBottom: 50,
      },
      buttonText: {
        fontSize: 14,
        color: '#fff',
        marginLeft: 50,
      },
      circle1: {
        backgroundColor: '#0d9698',
        width: 48,
        height: 48,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
      },
      warning: {
        marginTop: 20,
        color: '#000000',
      },
      warapperFotoss: {
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 1,
        flex: 1,
        marginHorizontal: 1,
        marginVertical: 15,
        paddingVertical: 10,
      },
      wrapperPerubahan: {
        flexDirection: "row",
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 1,
        alignItems: "center",
        // backgroundColor:'red',
      },
      greenLine: {
        backgroundColor: "#006885",
        height: 15,
        marginLeft: 10,
        width: 5,
      },
      wrapperUnggah: {
        alignItems: "center",
        backgroundColor: "#eeeeee",
        borderColor: "#eeeeee",
        borderRadius: 5,
        borderWidth: 1,
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 20,
        marginVertical: 10,
      },
      textInputWrapperImage: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#808080',
        borderWidth: 0.5,
        height: heightPercentageToDP(32),
        paddingHorizontal: 20,
        marginTop: 30,
      },

      textButtonUpload: {
        alignSelf: 'center',
        color: '#fff',
        fontFamily: 'Montserrat-Bold',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
        textAlign: 'center',
  
      },
      wrapperButtonUpload: {
        backgroundColor: "#006885",
        borderRadius: 30,
        flexDirection: 'row',
        height: heightPercentageToDP(5),
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 20
        // marginTop: 25,
        // marginBottom:50,
  
      }

})