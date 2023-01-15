import { StyleSheet, View, Text } from 'react-native';
import React, { ReactElement } from 'react';

interface dataList {
    data?: string[];
}

const List = ({ data }: dataList) => {
    return (
        <>
            {data!.map(dataPoint => (
                <View style={styles.listItem} key={dataPoint}>
                    <Text style={styles.itemText}>{dataPoint}</Text>
                </View>
            ))}
        </>
    );
};

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#f1f1f1',
    },
    itemText: {
        color: '#191919',
        textAlign: 'center',
    },
});
