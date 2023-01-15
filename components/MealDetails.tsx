import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Meal from '../models/meal';
import { MealItemProps } from './MealItem';

const MealDetails: React.FC<MealItemProps> = ({
    id,
    duration,
    complexity,
    affordability,
    style,
    textStyle,
}) => {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailItem, textStyle]}>
                DURATION: {duration}m
            </Text>
            <Text style={[styles.detailItem, textStyle]}>
                {complexity?.toUpperCase()}
            </Text>
            <Text style={[styles.detailItem, textStyle]}>
                {affordability?.toUpperCase()}
            </Text>
        </View>
    );
};

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center',
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});
