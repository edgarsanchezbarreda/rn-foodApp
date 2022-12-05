import { View, Text } from 'react-native';
import React from 'react';
import Category from '../models/category';

// NEED TO FIX
const MealItem = ({ title }) => {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
};

export default MealItem;
