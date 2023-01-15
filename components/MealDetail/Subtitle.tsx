import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

const Subtitle = ({ children }: any) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
};

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: '#f1f1f1',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 2,
    },
});
