class Meal {
    id: string;
    categoryIds?: string[];
    title?: string;
    imageUrl?: string;
    ingredients?: string[];
    steps?: string[];
    duration?: number;
    complexity?: string;
    affordability?: string;
    isGlutenFree?: boolean;
    isVegan?: boolean;
    isVegetarian?: boolean;
    isLactoseFree?: boolean;
    onPress?: () => void;
    constructor(
        id: string,
        categoryIds: string[],
        title: string,
        affordability: string,
        complexity: string,
        imageUrl: string,
        duration: number,
        ingredients: string[],
        steps: string[],
        isGlutenFree: boolean,
        isVegan: boolean,
        isVegetarian: boolean,
        isLactoseFree: boolean,
        onPress: () => void
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients;
        this.steps = steps;
        this.duration = duration;
        this.complexity = complexity;
        this.affordability = affordability;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
        this.isLactoseFree = isLactoseFree;
        this.onPress = onPress;
    }
}

export default Meal;
