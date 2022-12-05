import { FlatList, ListRenderItemInfo } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';

export interface ScreenNavigation {
    navigation?: any;
    route?: any;
}

const CategoriesScreen: React.FC<ScreenNavigation> = ({ navigation }) => {
    const renderCategoryItem = (itemData: ListRenderItemInfo<Category>) => {
        const navigationHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        };

        const item = itemData.item;

        return (
            <CategoryGridTile
                title={item.title}
                color={item.color}
                onPress={navigationHandler}
            />
        );
    };
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
};

export default CategoriesScreen;
