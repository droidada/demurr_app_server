import { GraphQLID, GraphQLFloat, GraphQLString, GraphQLList, GraphQLNonNull } from 'graphql/type';
import { RestaurantType, RestaurantItemType, RestaurantItemCategoryType } from './restaurant.types';
import { ShopAddressInputType } from '../grocery-store';
import { 
    getRestaurant, 
    getRestaurants, 
    editRestaurant, 
    getRestaurantItem, 
    getRestaurantItems, 
    getRestaurantItemCategories, 
    getRestaurantItemsByCategory,
    editRestaurantItem, 
    editRestaurantItemCategory, 
    deleteRestaurantItemCategory, 
    deleteRestaurantItem, 
    deleteRestaurant 
} from './restaurant.service'

export const RestaurantQuery = {
    type: RestaurantType,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve: (root, args, context) => getRestaurant(args, context),
};

export const RestaurantsQuery = {
    type: GraphQLList(RestaurantType),
    resolve: (root, args, context) => getRestaurants(args, context),
};

export const EditRestaurantMutation = {
    type: RestaurantType,
    args: {
        id: { type: GraphQLID },
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        image: { type: GraphQLNonNull(GraphQLString) },
        address: { type: GraphQLNonNull(ShopAddressInputType) },
    },
    resolve: (root, args, context) => editRestaurant(args, context),
}; 

export const DeleteRestaurantMutation = {
    type: GraphQLString,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve: (root, args, context) => deleteRestaurant(args, context),
};

export const RestaurantItemQuery = {
    type: RestaurantItemType,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve: (root, args, context) => getRestaurantItem(args, context),
};

export const RestaurantItemsQuery = {
    type: GraphQLList(RestaurantItemType),
    args: {
        restaurantId: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve: (root, args, context) => getRestaurantItems(args, context),
};

export const RestaurantItemsByCategoryQuery = {
    type: GraphQLList(RestaurantItemType),
    args: {
        categoryId: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve: (root, args, context) => getRestaurantItemsByCategory(args, context),
};

export const EditRestaurantItemMutation = {
    type: RestaurantItemType,
    args: {
        id: { type: GraphQLID },
        restaurantId: { type: GraphQLNonNull(GraphQLID) },
        categoryId: { type: GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLNonNull(GraphQLString) },
        price: { type: GraphQLNonNull(GraphQLFloat) },
        description: { type: GraphQLString },
        image: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: (root, args, context) => editRestaurantItem(args, context),
}; 

export const DeleteRestaurantItemMutation = {
    type: GraphQLString,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve: (root, args, context) => deleteRestaurantItem(args, context),
};


export const RestaurantItemCategoriesQuery = {
    type: GraphQLList(RestaurantItemCategoryType),
    args: {
        restaurantId: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve: (root, args, context) => getRestaurantItemCategories(args, context),
};

export const EditRestaurantItemCategoryMutation = {
    type: RestaurantItemCategoryType,
    args: {
        id: { type: GraphQLID },
        restaurantId: { type: GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
    },
    resolve: (root, args, context) => editRestaurantItemCategory(args, context),
}; 

export const DeleteRestaurantItemCategoryMutation = {
    type: GraphQLString,
    args: {
        id: { type: GraphQLID },
    },
    resolve: (root, args, context) => deleteRestaurantItemCategory(args, context)
};