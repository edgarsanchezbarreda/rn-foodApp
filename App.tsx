import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style='dark' />
            {/* Wrap entire screens with NavigationContainer */}
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name='Meals Categories'
                        component={CategoriesScreen}
                    />
                    <Stack.Screen
                        name='Meals Overview'
                        component={MealsOverviewScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
