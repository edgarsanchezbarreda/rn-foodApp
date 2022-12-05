import {
    StyleSheet,
    View,
    Text,
    Pressable,
    Image,
    Platform,
} from 'react-native';
import React from 'react';
import Meal from '../models/meal';

const MealItem: React.FC<Meal> = ({
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    onPress,
}) => {
    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={onPress}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>
                            DURATION: {duration}m
                        </Text>
                        <Text style={styles.detailItem}>
                            {complexity?.toUpperCase()}
                        </Text>
                        <Text style={styles.detailItem}>
                            {affordability?.toUpperCase()}
                        </Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        margin: 8,
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: '#f1f1f1',
        elevation: 4,
        shadowColor: '#191919',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
    },
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
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    buttonPressed: {
        opacity: 0.5,
    },
});
