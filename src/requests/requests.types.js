import {
  GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLInputObjectType,
    GraphQLFloat,
  } from 'graphql/type';
import { ShopAddressType } from '../grocery-store';


  export const RestaurantType = new GraphQLObjectType({
    name: 'RestaurantType',
    description: 'Ruby Nav Restaurant object',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'Grocery Restaurant id',
            resolve: (obj, args, context) => obj._id || obj.id
        },
        name: {
            type: GraphQLString,
            description: 'Restaurant title',
        },
        description: {
          type: GraphQLString,
          description: 'Restaurant description',
        },
        image: {
          type: GraphQLString,
          description: 'Restaurant image',
        },
        address: {
          type: ShopAddressType,
          description: 'Grocery Restaurant address',
        }
    })
  });

  export const RestaurantItemType = new GraphQLObjectType({
    name: 'RestaurantItemType',
    description: 'Ruby Nav Restaurant item object',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'Grocery Restaurant item id',
            resolve: (obj, args, context) => obj._id || obj.id
        },
        title: {
            type: GraphQLString,
            description: 'Restaurant title',
        },
        price: {
          type: GraphQLFloat,
          description: 'Restaurant item price',
        },
        description: {
          type: GraphQLString,
          description: 'Restaurant description',
        },
        image: {
          type: GraphQLString,
          description: 'Restaurant image',
        },
        category: {
          type: RestaurantItemCategoryType,
          description: 'Restaurant image',
        },
        restaurant: {
          type: RestaurantType,
          description: 'Restaurant',
        },
    })
  });

  export const RestaurantItemCategoryType = new GraphQLObjectType({
    name: 'RestaurantItemCategoryType',
    description: 'Ruby Nav Restaurant item object',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'Grocery Restaurant item category id',
            resolve: (obj, args, context) => obj._id || obj.id
        },
        title: {
            type: GraphQLString,
            description: 'Restaurant title',
        },
        description: {
          type: GraphQLString,
          description: 'Restaurant description',
        },
    })
  });
  
  export const RestaurantFilterType = new GraphQLInputObjectType({
    name: 'RestaurantFilterType',
    fields: () => ({
      startDate: {
        type: GraphQLString,
      },
      endDate: {
        type: GraphQLString,
      },
      orderBy: {
        type: GraphQLString,
      },
      limit: {
        type: GraphQLInt,
      },
    }),
  });
  
  