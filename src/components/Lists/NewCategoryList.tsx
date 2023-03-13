import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image, TextInput} from 'react-native';
import Colors from '../../common/colors/Colors';
import ImagePath from '../../common/images/ImagePath';
import CustomButton from '../Buttons/CustomButton';

function NewCategoryList(props) {
  const {item,onChangeCategoryName,deleteField,createNewFields,addNewField,removeCategory} = props;
  return (
    <View style={{ width: '80%', minHeight: 140, backgroundColor: Colors.white, marginVertical: 10, padding: 10 }}>
    <Text style={{ color: Colors.black, fontWeight: 'bold', fontSize: 16 }}>{item.categoryName || 'New Category'}</Text>
    <TextInput
        value={item.categoryName}
        onChangeText={(e) => { onChangeCategoryName(e,item.id) }}
        style={{ width: '100%', height: 40, borderColor: Colors.grey, borderWidth: 1, borderRadius: 5 }} />


    {item.fields.map((field, indexs) => {
        return (
            <>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <TextInput
                        value=''
                        onChangeText={(e) => { console.log('e', e) }}
                        style={{ width: '50%', height: 40, borderColor: Colors.grey, borderWidth: 1, borderRadius: 5 }} />
                    <View style={{ width: '30%', height: 40, borderColor: Colors.grey, borderWidth: 1, }}>
                        <Text style={{alignSelf:'center',marginTop:10,color:Colors.black,fontWeight:'700'}}>{field.fieldType}</Text>
                    </View>
                    <TouchableOpacity style={{ justifyContent: 'center' }} onPress={()=>deleteField(field.id)}>
                        <Image source={ImagePath.deleteIcon} style={{ width: 20, height: 20, alignSelf: 'center', marginLeft: '10%' }} />
                    </TouchableOpacity>
                </View>
            </>
        )
    })}

    <CustomButton
        title='Add New Category'
        style={{ width: '100%', height: 30, marginTop: 10 }}
        onPress={() => { }} />

    <View style={{ flexDirection: 'row' }}>
        <CustomButton
            title='Add New Field'
            style={{ width: '40%', height: 30, marginTop: 10, backgroundColor: Colors.white, borderColor: Colors.grey, borderRadius: 2, borderWidth: 1 }}
            titleStyle={{ color: Colors.black, fontSize: 12 }}
            onPress={() => { createNewFields(item.id) }} />
           {item.createNewField &&   <View style={{width:100,height:120,backgroundColor:Colors.green,position:'absolute',bottom:0,left:10}}>
                {['Text','CheckBox','Date','Number'].map((element,index)=>{
                    return(
                        <TouchableOpacity style={{marginTop:10,backgroundColor:Colors.green,}} onPress={() => { addNewField(item,element) }}>
                            <Text>{element}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>}
        <CustomButton
            title='Remove Category'
            style={{ width: '40%', height: 30, marginTop: 10, backgroundColor: Colors.white, borderColor: Colors.grey, borderRadius: 2, borderWidth: 1, marginLeft: 5 }}
            titleStyle={{ color: Colors.black, fontSize: 12 }}
            onPress={() => { removeCategory(item.id)}} />
    </View>
   

</View>
  );
}

const styles = StyleSheet.create({

});

export default NewCategoryList;
