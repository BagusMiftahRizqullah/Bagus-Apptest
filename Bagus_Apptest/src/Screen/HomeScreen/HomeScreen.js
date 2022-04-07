import React, {useState, useEffect, Fragment, useCallback} from 'react'
import { StyleSheet, Text, View, Dimensions,TextInput, Image, TouchableOpacity, FlatList, ScrollView, RefreshControl } from 'react-native'
import {useSelector, useDispatch} from 'react-redux';
import { actionGetContact } from '../../Actions/HomeAction';
import CardList from '../../Components/CardList/CardList';

const HomeScreen = ({navigation}) => {
    const [search, setSearch] = useState('')
    const [dataHomeSearch, setDataHomeSearch] = useState([])
    const [refreshing, setRefreshing] = useState(false);
    
    const dispatch = useDispatch();
    const DataContact = useSelector(state => {
        console.log(state, '<===== ini state');
        // ini aku tambahin untuk handling data pertama kali waktu masih null
        if (
          state.HomeReducer.dataContact != null &&
          state.HomeReducer.dataContact.length > 0
        ) {
          return state.HomeReducer.dataContact
        } else {
          return [];
        }
       
      });
      console.log(DataContact, 'ini hasil data DataContact');

    useEffect(() => {
        dispatch(actionGetContact());
      }, [navigation]);

      
      const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await  dispatch(actionGetContact());
        setRefreshing(false);
      }, []);

   

      const SearchName =(a)=>{
        setSearch(a)
        const logicSearch =  DataContact.filter((data)=> data.firstName.toUpperCase().includes(a.toUpperCase()))
        console.log("searchhh", logicSearch)
        setDataHomeSearch(logicSearch)
      }



     const renderItem = ({item}) => {
       console.log("itemss", item)
        return (
          <CardList
            firstName={item.firstName}
            lastName={item.lastName}
            ID={item.id}
            Navigation={navigation}
            name={`${item.firstName} ${item.lastName}`}
            AGE={item.age}
            image={item.photo.includes('jpg') ? {uri :item.photo} : require('@images/default_pp_acount.png')}
          />
        );
      };

  return (
    <View style={styles.mainWrapper}>
    <Fragment>
      <View style={styles.wrapperInput}>
        <Image
          source={require('@images/search.png')}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Cari berdasarkan nama..."
          onChangeText={(a)=> SearchName(a)}
          value={search}
        />
        {/* <Image
          source={require('@images/sort-icon.png')}
          style={styles.searchIcon}
        /> */}
      </View>
    </Fragment>

    <View style={{flex: 1}}>
    <ScrollView
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={() => onRefresh()} />
    }
        style={styles.wrapperScroll}
        showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: 200}}>
          <FlatList
            data={dataHomeSearch.length >0 ? dataHomeSearch : DataContact}
            renderItem={(item)=> renderItem(item)}
            keyExtractor={item => item.id}
          />
        </View>
     </ScrollView>
       <TouchableOpacity onPress={()=> navigation.navigate('Add')} style={styles.containerPlus}>
              <Image
                style={styles.buttonPlus}
                source={require('@images/ButtonNewPlus.png')}
              />
        </TouchableOpacity>
    </View>
  </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainWrapper: {
        backgroundColor: '#fff',
        paddingHorizontal: 20, 
        flex: 1
      },

      wrapperInput: {
        borderWidth: 1,
        borderColor: '#E6E6E',
        borderRadius: 5,
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        // paddingVertical: 2,
        paddingHorizontal: 14,
      },
      textInput: {
        fontFamily: '#000000',
        fontSize: 10,
        marginLeft: 17,
        width: '100%',
        flex: 1,
      },
      searchIcon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
      },
      wrapperScroll: {
        marginTop: 4,
      },
      containerPlus:{
        marginBottom:23,
        position: 'absolute',
        margin: 0,
        right: 0,
        bottom: -1,
      },
      buttonPlus: {
          height: 70,
          width: 70,
      },
})