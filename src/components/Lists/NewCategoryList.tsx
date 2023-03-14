import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import Colors from '../../common/colors/Colors';
import ImagePath from '../../common/images/ImagePath';
import CustomButton from '../Buttons/CustomButton';


export interface NavigationProps {
    navigation: any;
    route?: any;
    item?: any;
    onChangeCategoryName : (e:string,id:number) => void,
    deleteField : (id:number) => void,
    createNewFields : (id:number) => void,
    addNewField : (item:any,fieldType:string) => void
    removeCategory : (id:number) => void,
}

function NewCategoryList(props:NavigationProps) {
  const {
    item,
    onChangeCategoryName,
    deleteField,
    createNewFields,
    addNewField,
    removeCategory,
  } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{item.categoryName || 'New Category'}</Text>
      <TextInput
        value={item.categoryName}
        onChangeText={e => {
          onChangeCategoryName(e, item.id);
        }}
        style={styles.txtInput}
      />

      {item.fields.map((field: any) => {
        return (
          <>
            <View style={styles.row}>
              <TextInput
                value=""
                onChangeText={e => {
                  console.log('e', e);
                }}
                style={styles.txtInput1}
              />
              <View style={styles.txtContainer}>
                <Text style={styles.typeTxt}>{field.fieldType}</Text>
              </View>
              <TouchableOpacity
                style={{justifyContent: 'center'}}
                onPress={() => deleteField(field.id)}>
                <Image
                  source={ImagePath.deleteIcon}
                  style={{
                    width: 20,
                    height: 20,
                    alignSelf: 'center',
                    marginLeft: '10%',
                  }}
                />
              </TouchableOpacity>
            </View>
          </>
        );
      })}

      <CustomButton
        title="Add New Category"
        style={styles.cat}
        onPress={() => {}}
      />

      <View style={{flexDirection: 'row'}}>
        <CustomButton
          title="Add New Field"
          style={styles.btnContainer}
          titleStyle={{color: Colors.black, fontSize: 12}}
          onPress={() => {
            createNewFields(item.id);
          }}
        />
        {item.createNewField && (
          <View
            style={{
              width: 100,
              height: 120,
              backgroundColor: Colors.green,
              position: 'absolute',
              bottom: 0,
              left: 10,
            }}>
            {['Text', 'CheckBox', 'Date', 'Number'].map((element, index) => {
              return (
                <TouchableOpacity
                  style={styles.box}
                  onPress={() => {
                    addNewField(item, element);
                  }}>
                  <Text>{element}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
        <CustomButton
          title="Remove Category"
          style={styles.removeBtn}
          titleStyle={styles.btnTitle}
          onPress={() => {
            removeCategory(item.id);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    minHeight: 140,
    backgroundColor: Colors.white,
    marginVertical: 10,
    padding: 10,
  },
  heading: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  txtInput: {
    width: '100%',
    height: 40,
    borderColor: Colors.grey,
    borderWidth: 1,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
  },
  cat: {
    width: '100%',
    height: 30,
    marginTop: 10,
  },
  btnContainer: {
    width: '40%',
    height: 30,
    marginTop: 10,
    backgroundColor: Colors.white,
    borderColor: Colors.grey,
    borderRadius: 2,
    borderWidth: 1,
  },
  box: {
    marginTop: 10,
    backgroundColor: Colors.green,
  },
  txtInput1: {
    width: '50%',
    height: 40,
    borderColor: Colors.grey,
    borderWidth: 1,
    borderRadius: 5,
  },
  txtContainer: {
    width: '30%',
    height: 40,
    borderColor: Colors.grey,
    borderWidth: 1,
  },
  txtType: {
    alignSelf: 'center',
    marginTop: 10,
    color: Colors.black,
    fontWeight: '700',
  },
  removeBtn: {
    width: '40%',
    height: 30,
    marginTop: 10,
    backgroundColor: Colors.white,
    borderColor: Colors.grey,
    borderRadius: 2,
    borderWidth: 1,
    marginLeft: 5,
  },
  btnTitle: {
    color: Colors.black,
    fontSize: 12,
  },
  typeTxt:{
    alignSelf:'center',
    marginTop:10,
    color:Colors.black,
    fontWeight:'700'
}
});

export default NewCategoryList;
