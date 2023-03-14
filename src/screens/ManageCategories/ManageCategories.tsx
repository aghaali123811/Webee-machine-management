import React, { useState } from 'react';
import {
    View,
    FlatList,
    Text,
} from 'react-native';
import Colors from '../../common/colors/Colors';
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
