import { View, Text, ListRenderItemInfo } from 'react-native';
import React from 'react';
import { ScreenNavigation } from './CategoriesScreen';
import Meal from '../models/meal';

const MealDetail: React.FC<Meal> = ({ id }) => {
    return (
        <View>
            <Text>MealDetail</Text>
        </View>
    );
};

export default MealDetail;
