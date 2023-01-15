import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { ScreenNavigation } from './CategoriesScreen';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
// import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/redux/store';
import { addFavorite, removeFavorite } from '../store/redux/favorites';
// import { FavoritesContext } from '../store/context/favorites-context';

interface FavMealsState {
    ids: string;
    favoriteMeals: any;
}

const MealDetailScreen: React.FC<ScreenNavigation> = ({
    route,
    navigation,
}) => {
    // const favoriteMealsContext = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state: FavMealsState) => state.ids);
    // const favoriteMealIds = useSelector(
    //     (state: FavMealsState) => state.favoriteMeals.ids
    // );

    const dispatch = useDispatch();

    const mealId: string = route.params.categoryId;
    console.log(mealId);

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    const mealIsFavorite = favoriteMealIds?.includes(mealId);
    // const mealIsFavorite = favoriteMealIds!.ids.includes(mealId);
    // const mealIsFavorite = favoriteMealsContext!.ids.includes(mealId);

    const favoritesHandler = () => {
        if (mealIsFavorite) {
            dispatch(removeFavorite({ id: mealId }));
            // favoriteMealIds!.removeFavorite(mealId);
        } else {
            dispatch(addFavorite({ id: mealId }));
            // favoriteMealIds!.addFavorite(mealId);
        }
    };

    // const headerButtonPressHandler = () => {};

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        onPress={favoritesHandler}
                        icon={mealIsFavorite ? 'star' : 'star-outline'}
                        color='#f1f1f1'
                    />
                );
            },
        });
    }, [navigation, favoritesHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                style={styles.image}
                source={{ uri: selectedMeal?.imageUrl }}
            />
            <Text style={styles.title}>{selectedMeal?.title}</Text>
            <MealDetails
                duration={selectedMeal?.duration}
                complexity={selectedMeal?.complexity}
                affordability={selectedMeal?.affordability}
                textStyle={styles.textStyle}
            />

            <View style={styles.outerListContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal?.ingredients} />

                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal?.steps} />
                </View>
            </View>
        </ScrollView>
    );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: '#f1f1f1',
    },
    textStyle: {
        color: '#f1f1f1',
    },
    listContainer: {
        width: '80%',
    },
    outerListContainer: {
        alignItems: 'center',
    },
});
