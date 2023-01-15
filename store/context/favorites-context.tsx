import { createContext, useState } from 'react';

interface IFavoritesContext {
    ids: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
}

export const FavoritesContext = createContext<IFavoritesContext | null>({
    ids: [],
    addFavorite: (id: string) => {},
    removeFavorite: (id: string) => {},
});
// export const FavoritesContext = createContext({
//     ids: [],
//     addFavorite: (id: string) => {},
//     removeFavorite: (id: string) => {},
// });

// type FavContextProvidorId = {
//     ids: [];
// };

const FavoritesContextProvider = ({ children }: any) => {
    const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

    const addFavorite = (id: string) => {
        console.log(favoriteMealIds);
        setFavoriteMealIds(currentFavIds => [...currentFavIds, id]);
    };

    const removeFavorite = (id: string) => {
        setFavoriteMealIds(currentFavIds =>
            currentFavIds.filter(mealId => mealId !== id)
        );
    };

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContextProvider;
