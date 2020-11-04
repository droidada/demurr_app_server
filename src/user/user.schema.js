import { GraphQLID, GraphQLString, GraphQLNonNull, GraphQLList } from 'graphql/type';
import { getCurrentUser, getAllUsers, login, signUp, editUserProfile, editUserAddress, getUserDetails } from './user.service';
import { UserType, ClientType, LoginType, UserProfileType, UserAddressType } from './user.types';

export const UserQuery = {
  type: UserType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
    client: { type: GraphQLNonNull(ClientType) }
  },
  resolve: (root, args, context) => getUserDetails(args, context),
};

export const CurrentUserQuery = {
  type: UserType,
  resolve: (root, args, context) => getCurrentUser(args, context),
};

export const AllUsersQuery = {
  type: GraphQLList(UserType),
  resolve: (root, args, context) => getAllUsers(args, context),
};

  export const LoginMutation = {
    type: LoginType,
    args: {
        client: { type: GraphQLNonNull(ClientType) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: (root, args, context) => login(args, context),
  }; 

  export const UserAddressMutation = {
    type: UserAddressType,
    args: {
      id: { type: GraphQLID },
      userId: { type: GraphQLNonNull(GraphQLID) },
      name: { type:  GraphQLNonNull(GraphQLString) },
      line1: { type: GraphQLNonNull(GraphQLString) },
      line2: { type: GraphQLString },
      city: { type: GraphQLNonNull(GraphQLString)  }, 
      state: { type: GraphQLNonNull(GraphQLString)  }, 
      zipCode: { type: GraphQLNonNull(GraphQLString)  },
      phoneNumber: { type:  GraphQLNonNull(GraphQLString) }, 
    },
    resolve: (root, args, context) => editUserAddress(args, context),
  }; 

  export const UserProfileMutation = {
    type: UserProfileType,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        username: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        bio: { type: GraphQLString },
        avatar: { type: GraphQLString },  
        phoneNumber: { type: GraphQLString }, 
    },
    resolve: (root, args, context) => editUserProfile(args, context),
  }; 

  export const SignUpMutation = {
    type: GraphQLString,
    args: {
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
        phoneNumber: { type: GraphQLNonNull(GraphQLString) },
        client: { type: GraphQLNonNull(ClientType) },
    },
    resolve: (root, args, context) => signUp(args, context),
  };
