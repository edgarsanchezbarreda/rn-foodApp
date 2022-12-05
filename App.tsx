import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealDetail from './screens/MealDetail';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style='light' />
            {/* Wrap entire screens with NavigationContainer */}
            <NavigationContainer>
                <Stack.Navigator
                    // To set same styles for all screens, place screenOptions in the Stack.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: '#191919' },
                        headerTintColor: '#f1f1f1',
                        contentStyle: { backgroundColor: '#191919' },
                    }}
                >
                    {/* First Screen to be displayed is the first screen that is written below by default */}
                    <Stack.Screen
                        name='MealsCategories'
                        component={CategoriesScreen}
                        // You can set multiple options for each screen
                        // Make sure to read docs because there are MANY options
                        options={{
                            title: 'All Categories',
                        }}
                    />
                    <Stack.Screen
                        name='MealsOverview'
                        component={MealsOverviewScreen}
                        // options={({ navigation, route }: ScreenNavigation) => {
                        //     const categoryId = route.params.categoryId;
                        //     return {
                        //         title: categoryId,
                        //     };
                        // }}
                    />
                    <Stack.Screen name='MealDetail' component={MealDetail} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
