import { Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { colors } from '../config/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const AfterSpilt = ({navigation, route}) => {
  const {theme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode];
  const data = route.params;

  const styles = StyleSheet.create({
    screen:{
      flexDirection:'row',
      justifyContent:'center',
    },
    page:{
      backgroundColor: ActiveColor.background,
      flex:1
    },
    BackButton:{
      marginLeft:15,
      marginTop:20,
      color: ActiveColor.icon
    },
    title:{
        textAlign:'center',
        flex:1,
        marginTop:20,
        fontSize:18,
        fontWeight:'700',
        marginRight:15,
        color: ActiveColor.text
    },
    box1:{
      marginBottom:10,
      marginTop:30,
      padding:10,
      flexDirection:'row',
      backgroundColor:ActiveColor.background2,
      borderRadius:20,
      marginHorizontal:15,
    },
    textheaderItem:{
      fontFamily:'Montserrat-Regular',
      color: ActiveColor.text,
      marginLeft:20,
      fontSize:18,
      textAlign:'left',
      flex:1
    },
    textheaderqty:{
      fontFamily:'Montserrat-Regular',
      color: ActiveColor.text,
      fontSize:18,
      flex:1,
      // alignSelf:'center',
      textAlign:'center'
    },
    textheaderprice:{
      fontFamily:'Montserrat-Regular',
      color: ActiveColor.text,
      textAlign:'right',
      fontSize:18,
      flex:1,
      marginRight:20
    },
    textItem:{
      fontFamily:'Montserrat-Regular',
      color: ActiveColor.text,
      marginLeft:20,
      fontSize:15,
      textAlign:'left',
      flex:1
    },
    textqty:{
      fontFamily:'Montserrat-Regular',
      color: ActiveColor.text,
      fontSize:15,
      flex:1,
      textAlign:'center'
    },
    textprice:{
      fontFamily:'Montserrat-Regular',
      color: ActiveColor.text,
      textAlign:'right',
      fontSize:15,
      flex:1,
      marginRight:20
    },
    addButton:{
      alignSelf:'center',
      marginTop:10,
      backgroundColor:ActiveColor.button,
      paddingHorizontal:50,
      paddingVertical:10,
      borderRadius:15,
      marginRight:10
    },
    box:{
      marginBottom:10,
      marginTop:10,
      padding:5,
      flexDirection:'row',
      backgroundColor:ActiveColor.background2,
      borderRadius:20,
      marginHorizontal:15
    }
  })
  // console.log(data.cells[0])

  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, { item: '', quantity: '', price: null, selectedBy: [] }]);
  };

  const handleChange = (text, type, index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) => (i === index ? { ...item, [type]: text } : item))
    );
  };

  const removeItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const result = () => {
    console.log(items)
  };

  const validateAndNext = () => {
    const hasEmptyFields = items.some(
      (item) => item.item === '' || !isNumber(item.quantity) || item.price === null
    );

    if (hasEmptyFields) {
      const errorMessage = getErrorMessage(items);
      Alert.alert('Validation Error:', errorMessage);
      return;
    }

    // Handle navigating to the next page here (replace with your logic)
    navigation.navigate("AssignItem", {items})
  };

  const isNumber = (value) => {
    return !isNaN(value) && value !== ''; // Check for numeric value and not empty string
  };

  const getErrorMessage = (items) => {
    let errorMessage = '';
    items.forEach((item, index) => {
      if (item.item === '') {
        errorMessage += `Item ${index + 1}: Name is required.\n`;
      }
      if (!isNumber(item.quantity)) {
        errorMessage += `Item ${index + 1}: Quantity must be a number.\n`;
      }
      if (item.price === null) {
        errorMessage += `Item ${index + 1}: Price cannot be empty.\n`;
      }
    });
    return errorMessage;
  };

  return (    
    <SafeAreaView style={styles.page}>

      <View style={styles.screen}>
        <TouchableOpacity>
          <AntDesign 
              onPress={() => navigation.navigate("BottomTab") }
              name='left' 
              size={25} 
              style={styles.BackButton}/>
        </TouchableOpacity>
        <Text style={styles.title}>Split Bill</Text>
      </View>

      {/* <View style={styles.box1}>
        <Text style={styles.textheaderItem}>Item</Text>
        <Text style={styles.textheaderqty}>Qty</Text>
        <Text style={styles.textheaderprice}>Price</Text>
      </View> */}

      <ScrollView style={{marginBottom:1,flex:1}}>
        <View style={{marginTop:20}}>
          {items.map((item,index) =>{
            return(
              <View key={index} style={{paddingHorizontal:20}}>
                <TextInput
                  value={item.item}
                  onChangeText={(text) => handleChange(text, 'item', index)}
                  placeholder="Item Name"
                />
                
                <View style={{ flexDirection: 'row' }}>
                  <TextInput
                    value={item.quantity}
                    onChangeText={(text) => handleChange(text, 'quantity', index)}
                    keyboardType="numeric"
                    placeholder="Quantity"
                    style={{ flex: 1 }}
                  />
                  <TextInput
                    value={item.price}
                    onChangeText={(text) => handleChange(text, 'price', index)}
                    keyboardType="numeric"
                    placeholder="Price"
                    style={{ flex: 1 }}
                  />
                </View>
                
                <Button title="Remove" onPress={() => removeItem(index)} />
              </View>
            )
          })}
        </View>
        
        <View style={{marginBottom:20, flexDirection:'row', alignSelf:'center'}}>
          <TouchableOpacity onPress={addItem} style={styles.addButton}>
            <Text style={{fontSize:15, color:ActiveColor.text}}>Add</Text>
          </TouchableOpacity>  
          <TouchableOpacity onPress={validateAndNext} style={styles.addButton}>
            <Text style={{fontSize:15, color:ActiveColor.text}}>Next</Text>
          </TouchableOpacity> 
        </View>   
      </ScrollView>
    </SafeAreaView>
  )
}

export default AfterSpilt