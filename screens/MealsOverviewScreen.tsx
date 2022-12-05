import { StyleSheet, View, FlatList, ListRenderItemInfo } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { ScreenNavigation } from './CategoriesScreen';
import MealItem from '../components/MealItem';
import Meal from '../models/meal';
import MealDetail from './MealDetail';

const MealsOverviewScreen: React.FC<ScreenNavigation> = ({
    navigation,
    route,
}) => {
    const categoryId = route.params.categoryId;

    // Fix this type
    const displayedMeals: any[] = MEALS.filter(mealItem => {
        if (mealItem.categoryIds) {
            return mealItem.categoryIds.indexOf(categoryId) >= 0;
        }
    });

    useLayoutEffect(() => {
        // Add an exclamation after this variable because we know that the category will exist.
        // I believe that this is needed when iterating an array or object or something because TS does not know if the value will exist but we KNOW that it does so we can explicity say that it will exist with the exclamation.
        const categoryTitle = CATEGORIES.find(
            category => category.id === categoryId
        )!.title;

        navigation.setOptions({
            title: categoryTitle,
        });
    }, [categoryId, navigation]);

    const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
        const navigationHandler = () => {
            navigation.navigate('MealDetail', {
                categoryId: itemData.item.id,
            });
        };

        const item = itemData.item;

        return (
            <MealItem
                id={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
                duration={item.duration}
                complexity={item.complexity}
                affordability={item.affordability}
                onPress={navigationHandler}
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={item => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
