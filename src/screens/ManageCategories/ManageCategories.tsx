import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    Text,
    ImageBackground,
    ScrollView,
    ActivityIndicator,
    TouchableOpacity,
    Image,
    TextInput,
} from 'react-native';
import Colors from '../../common/colors/Colors';
import ImagePath from '../../common/images/ImagePath';
import CustomButton from '../../components/Buttons/CustomButton';
import SimpleHeader from '../../components/Headers/SimpleHeader';
import NewCategoryList from '../../components/Lists/NewCategoryList';
import styles from './styles';

export interface NavigationProps {
    navigation: any;
    route?: any;
}
export interface newField {
    id?: number,
    field?: string,
    fieldType?: string,
}
export default function ManageCategories(props: NavigationProps) {
    const { navigation } = props;

    const [categoryList, setCategoryList] = useState<any>([]);


    const createNewCategory = () => {
        const num = 23;
        let data = {
            id: Math.random(num) * 100,
            categoryName: '',
            createNewField: false,
            fields: [
                {
                    id: Math.random(num) * 1000,
                    field: '',
                    fieldType: 'text',
                }
            ]
        }
        setCategoryList([...categoryList, data])
    }

    const addNewField = (item: any,fieldType:string) => {
        let art = {
            id: Math.random(23) * 1000,
            field: '',
            fieldType: fieldType,
        }

        var temp: newField[] = []
        categoryList.forEach((element: any) => {
            element.id === item.id ?
                temp.push({ ...element, fields: [...element.fields, art], createNewField: false })
                : temp.push(element)
        });
        setCategoryList(temp)
    }

    const removeCategory = (id: Number) => {
        let temp = categoryList.filter((item: any) => item.id !== id)
        setCategoryList(temp)
    }

    const onChangeCategoryName = (e: any,id:number) => {
        var temp: any[] = []
        categoryList.forEach((element: any) => {
            element.id ===  id ?
            temp.push({ ...element, categoryName: e }): temp.push(element)
               
        });
        setCategoryList(temp)
    }

    const createNewFields=(id:number)=>{
        var temp: any[] = []
        categoryList.forEach((element: any) => {
            element.id ===  id ?
            temp.push({ ...element, createNewField: true }): temp.push(element)
               
        });
        setCategoryList(temp)
    }

    const deleteField =(fieldID:number,id:number,index:number)=>{
        var temp: any[] = []
        categoryList.forEach((element: any) => {
            element.id ===  id ?
            temp.push({ ...element, fields: element.fields.filter((item:any)=>item.id!==fieldID) }) : 
            temp.push(element)
        })
        setCategoryList(temp)
    }
    return (
        <View style={{ flex: 1, width: '100%', height: '100%' }}>
            <SimpleHeader
                title={'Manage Categories'}
                containerStyle={{}}
                onPress={()=>navigation.openDrawer()} />

            <View style={styles.container}>

                <FlatList
                    data={categoryList}
                    renderItem={({ item, index }) => (
                        <NewCategoryList
                        item={item}
                        onChangeCategoryName={(e:any,item:any)=>onChangeCategoryName(e,id)}
                        deleteField={(id:any)=>deleteField(id,item.id,index)}
                        createNewFields={(e:any) => { createNewFields(e) }} 
                        addNewField={(a:any,b:any) => { addNewField(a,b) }}
                        removeCategory={(id:number) => { removeCategory(id)}}/>
                      )}
                    // renderItem={({ item, index }) => {
                    //     return (

                    //         <View style={{ width: '80%', minHeight: 140, backgroundColor: Colors.white, marginVertical: 10, padding: 10 }}>
                    //             <Text style={{ color: Colors.black, fontWeight: 'bold', fontSize: 16 }}>{item.categoryName || 'New Category'}</Text>
                    //             <TextInput
                    //                 value={item.categoryName}
                    //                 onChangeText={(e) => { onChangeCategoryName(e,item.id) }}
                    //                 style={{ width: '100%', height: 40, borderColor: Colors.grey, borderWidth: 1, borderRadius: 5 }} />


                    //             {item.fields.map((field, indexs) => {
                    //                 return (
                    //                     <>
                    //                         <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    //                             <TextInput
                    //                                 value=''
                    //                                 onChangeText={(e) => { console.log('e', e) }}
                    //                                 style={{ width: '50%', height: 40, borderColor: Colors.grey, borderWidth: 1, borderRadius: 5 }} />
                    //                             <View style={{ width: '30%', height: 40, borderColor: Colors.grey, borderWidth: 1, }}>
                    //                                 <Text style={{alignSelf:'center',marginTop:10,color:Colors.black,fontWeight:'700'}}>{field.fieldType}</Text>
                    //                             </View>
                    //                             <TouchableOpacity style={{ justifyContent: 'center' }} onPress={()=>deleteField(field.id,item.id,index)}>
                    //                                 <Image source={ImagePath.deleteIcon} style={{ width: 20, height: 20, alignSelf: 'center', marginLeft: '10%' }} />
                    //                             </TouchableOpacity>
                    //                         </View>
                    //                     </>
                    //                 )
                    //             })}

                    //             <CustomButton
                    //                 title='Add New Category'
                    //                 style={{ width: '100%', height: 30, marginTop: 10 }}
                    //                 onPress={() => { }} />

                    //             <View style={{ flexDirection: 'row' }}>
                    //                 <CustomButton
                    //                     title='Add New Field'
                    //                     style={{ width: '40%', height: 30, marginTop: 10, backgroundColor: Colors.white, borderColor: Colors.grey, borderRadius: 2, borderWidth: 1 }}
                    //                     titleStyle={{ color: Colors.black, fontSize: 12 }}
                    //                     onPress={() => { createNewFields(item.id) }} />
                    //                    {item.createNewField &&   <View style={{width:100,height:120,backgroundColor:Colors.green,position:'absolute',bottom:0,left:10}}>
                    //                         {['Text','CheckBox','Date','Number'].map((element,index)=>{
                    //                             return(
                    //                                 <TouchableOpacity style={{marginTop:10,backgroundColor:Colors.green,}} onPress={() => { addNewField(item,element) }}>
                    //                                     <Text>{element}</Text>
                    //                                 </TouchableOpacity>
                    //                             )
                    //                         })}
                    //                     </View>}
                    //                 <CustomButton
                    //                     title='Remove Category'
                    //                     style={{ width: '40%', height: 30, marginTop: 10, backgroundColor: Colors.white, borderColor: Colors.grey, borderRadius: 2, borderWidth: 1, marginLeft: 5 }}
                    //                     titleStyle={{ color: Colors.black, fontSize: 12 }}
                    //                     onPress={() => { removeCategory(item.id)}} />
                    //             </View>
                               

                    //         </View>
                    //     )
                    // }}
                    ListEmptyComponent={<Text style={{ alignSelf: 'center', color: Colors.black, fontSize: 14,fontWeight:'bold',marginTop:'50%' }}>No Category Found</Text>}
                    keyExtractor={(item, index) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <CustomButton
                title='Add New Category'
                style={{ alignSelf: 'center', width: '90%', position: 'absolute', bottom: 10 }}
                onPress={() => createNewCategory()} />
        </View>
    );
}
