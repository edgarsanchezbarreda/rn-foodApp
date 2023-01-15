import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
// import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = (): JSX.Element => {
    return (
        // This creates a Drawer Navigator, with the Categories Screen becoming a stack screen once a Category is picked like before
        // Do more research
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#191919' },
                headerTintColor: '#f1f1f1',
                sceneContainerStyle: { backgroundColor: '#191919' },
                drawerContentStyle: { backgroundColor: '#191919' },
                drawerInactiveTintColor: '#f1f1f1',
            }}
        >
            <Drawer.Screen
                name='Categories'
                component={CategoriesScreen}
                options={{
                    title: 'All Categories',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name='list' color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name='Favorites'
                component={FavoritesScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name='star' color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

export default function App() {
    return (
        <>
            <StatusBar style='light' />
            {/* Wrap entire screens with NavigationContainer */}
            {/* <FavoritesContextProvider> */}
            <Provider store={store}>
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
                            name='Drawer'
                            // name='MealsCategories'
                            // component={CategoriesScreen}
                            component={DrawerNavigator}
                            // You can set multiple options for each screen
                            // Make sure to read docs because there are MANY options
                            options={{
                                title: 'All Categories',
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name='MealsOverview'
                            component={MealsOverviewScreen}
                        />
                        <Stack.Screen
                            name='MealDetail'
                            component={MealDetailScreen}
                            options={{
                                title: 'Recipe',
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
            {/* </FavoritesContextProvider> */}
        </>
    );
}
