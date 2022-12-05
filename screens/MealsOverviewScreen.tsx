import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import { MEALS } from '../data/dummy-data';
import { ScreenNavigation } from './CategoriesScreen';

const MealsOverviewScreen: React.FC<ScreenNavigation> = ({ route }) => {
    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter(mealItem => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={item => item.id} />
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
