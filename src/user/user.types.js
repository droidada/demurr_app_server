import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLEnumType, GraphQLID
} from 'graphql/type';
import { TaskType, getUserTasks } from '../task';
import { getUserAddresses } from '../user';

export const UserType = new GraphQLObjectType({
    name: 'UserType',
    description: 'Ruby Nav User object',
    fields: () => ({
        accessToken: {
            type: GraphQLString,
            description: 'Access token',
        },
        id: {
            type: GraphQLID,
            description: 'User id',
            resolve: (obj, args, context) => obj._id || obj.id
        },
        username: {
            type: GraphQLString,
            description: 'User unique username',
        },
        email: {
            type: GraphQLString,
            description: 'User email address',
        },
        avatar: {
            type: GraphQLString,
            description: 'User profile picture url',
        },
        firstName: {
            type: GraphQLString,
            description: 'User First Name',
        },
        lastName: {
            type: GraphQLString,
            description: 'User Last Name',
        },
        bio: {
            type: GraphQLString,
            description: 'User Bio',
        },
        phoneNumber: {
            type: GraphQLString,
            description: 'User Phone Number',
        },
        addresses: {
            type: new GraphQLList(UserAddressType),
            description: 'User Addresses',
            //resolve: (obj, args, context) => getUserAddresses(Object.assign({}, args, { accessToken: obj.accessToken, userId: obj.id }), context),
        },
        tasks: {
            type: new GraphQLList(TaskType),
            description: 'List of User Tasks',
            resolve: (obj, args, context) => getUserTasks(Object.assign({}, args, { roles: obj.roles, id: obj.id || obj._id }), context),
        }
    })
});

export const UserProfileType = new GraphQLObjectType({
    name: 'UserProfileType',
    description: 'Ruby Nav User Profile object',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'User id',
            resolve: (obj, args, context) => obj._id || obj.id
        },
        username: {
            type: GraphQLString,
            description: 'User unique username',
        },
        email: {
            type: GraphQLString,
            description: 'User email address',
        },
        avatar: {
            type: GraphQLString,
            description: 'User profile picture url',
        },
        firstName: {
            type: GraphQLString,
            description: 'User First Name',
        },
        lastName: {
            type: GraphQLString,
            description: 'User Last Name',
        },
        bio: {
            type: GraphQLString,
            description: 'User Bio',
        },
        phoneNumber: {
            type: GraphQLString,
            description: 'User Phone Number',
        },
        addresses: {
            type: new GraphQLList(UserAddressType),
            description: 'User Addresses',
           // resolve: (obj, args, context) => getUserAddresses(Object.assign({}, args, { accessToken: obj.accessToken, userId: obj.id }), context),
        }
    })
});

export const UserAddressType = new GraphQLObjectType({
    name: 'UserAddressType',
    description:'Address information',
    fields: () => ({
        id: { 
            type: GraphQLID,
            resolve: (obj, args, context) => obj._id || obj.id
        },
        title: { type:  GraphQLString },
        name: { type:  GraphQLString },
        line1: { type: GraphQLString },
        line2: { type: GraphQLString },
        city: { type: GraphQLString  }, 
        state: { type: GraphQLString  }, 
        zipCode: { type: GraphQLString  },
        phoneNumber: { type:  GraphQLString }, 
    })
});

export const ClientType = new GraphQLEnumType({
    name: 'ClientType',
    values: {
      ADMIN: {
        value: 'admin'
      },
      RUBER: {
        value: 'ruber'
      },
      RUBY: {
        value: 'ruby'
      }
    }
  });

  export const LoginType = new GraphQLObjectType({
    name: 'LoginType',
    description: 'Ruby Nav Login object',
    fields: () => ({
        accessToken: {
            type: GraphQLString,
            description: 'Access token',
        },
        id: {
            type: GraphQLID,
            description: 'User id',
            resolve: (obj, args, context) => obj._id || obj.id
        },
        username: {
            type: GraphQLString,
            description: 'User unique username',
        },
        email: {
            type: GraphQLString,
            description: 'User email address',
        },
        avatar: {
            type: GraphQLString,
            description: 'User profile picture url',
        },
        firstName: {
            type: GraphQLString,
            description: 'User First Name',
        },
        lastName: {
            type: GraphQLString,
            description: 'User Last Name',
        },
        bio: {
            type: GraphQLString,
            description: 'User Bio',
        },
        phoneNumber: {
            type: GraphQLString,
            description: 'User Phone Number',
        },
        addresses: {
            type: new GraphQLList(UserAddressType),
            description: 'User Addresses'
        },
    })
});

export const SignUpType = new GraphQLObjectType({
    name: 'SignUpType',
    description: 'Sign Up return type',
    fields: () => ({
        status: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'Request Status',
        },
        message: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'Response Message',
        },
    })
});

