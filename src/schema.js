import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql/type';

import { 
  CurrentUserQuery,
  UserQuery, 
  LoginMutation, 
  SignUpMutation, 
  UserProfileMutation, 
  UserAddressMutation, 
  AllUsersQuery 
} from './user';

import { EditAvatarMutation } from './uploads';

import {
  GroceryStoreQuery, 
  GroceryStoresQuery, 
  EditGroceryStoreMutation,
  DeleteGroceryStoreMutation,
  GroceryStoreItemQuery,
  GroceryStoreItemsQuery,
  GroceryStoreItemsByCategoryQuery,
  EditGroceryStoreItemMutation,
  DeleteGroceryStoreItemMutation,
  GroceryStoreItemCategoriesQuery,
  EditGroceryStoreItemCategoryMutation,
  DeleteGroceryStoreItemCategoryMutation, 
} from './grocery-store'

import {
  RestaurantQuery, 
  RestaurantsQuery, 
  EditRestaurantMutation,
  DeleteRestaurantMutation,
  RestaurantItemQuery,
  RestaurantItemsQuery,
  RestaurantItemsByCategoryQuery,
  EditRestaurantItemMutation,
  DeleteRestaurantItemMutation,
  RestaurantItemCategoriesQuery,
  EditRestaurantItemCategoryMutation, 
  DeleteRestaurantItemCategoryMutation
} from './restaurant'

const query = new GraphQLObjectType({
  name: 'QueryType',
  fields: {
      User: UserQuery,
      CurrentUser: CurrentUserQuery,
      AllUsers: AllUsersQuery,
      Task: TaskQuery,
  },
});

const mutation = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    login: LoginMutation,
    signUp: SignUpMutation,
    EditAvatarMutation,
    CreateTaskMutation,
    UserProfileMutation,
    UserAddressMutation
  }
})

export default new GraphQLSchema({
  query,
  mutation,
  //,
});

