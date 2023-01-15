import {
    StyleSheet,
    Text,
    View,
    ListRenderItemInfo,
    FlatList,
} from 'react-native';
import React, { useContext } from 'react';
import MealItem from '../components/MealItem';
import Meal from '../models/meal';
import { ScreenNavigation } from './CategoriesScreen';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen: React.FC<ScreenNavigation> = ({ navigation, route }) => {
    const favoriteMealsContext = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter(meal =>
        favoriteMealsContext!.ids.includes(meal.id)
    );

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
                data={favoriteMeals}
                keyExtractor={item => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
