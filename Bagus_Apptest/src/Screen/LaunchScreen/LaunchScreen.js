import React , {useEffect} from 'react'
import { StyleSheet, Text, Dimensions, View, Image } from 'react-native'


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const LaunchScreen = ({navigation}) => {
    const checkWelcome = async () => {
        setTimeout(() => {
          navigation.replace('Home');
        }, 2000);
      };

      useEffect(() => {
        checkWelcome();
      }, []);
  return (
    <View style={styles.container}>
  
        <Image
          source={require('@images/Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
  )
}

export default LaunchScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo: {
        marginTop: 30,
        alignSelf: 'center',
        width: 200,
      },
      text: {
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 11,
      },
})