import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
} from 'graphql/type';


export const TarrifType = new GraphQLObjectType({
  name: 'TarrifType',
  description: 'Type for Tarrif Object',
  fields: () => ({
      id: {
          type: GraphQLID,
          description: 'Tarrif id',
      },
      dryLower: {
          type: GraphQLInt,
          description: 'Dry Lower Limit',
      },
      dryUpper: {
        type: GraphQLInt,
        description: 'Dry Upper Limit',
      },
      dry20Feet: {
        type: GraphQLInt,
        description: 'Dry 20 Feet',
      },
      dry40Feet: {
        type: GraphQLInt,
        description: 'Dry 40 Feet',
      },
      reefLower: {
        type: GraphQLInt,
        description: 'Reef Lower Limit',
      },
      reefUpper: {
        type: GraphQLInt,
        description: 'Reef Upper Limit',
      },
      reef20Feet: {
        type: GraphQLInt,
        description: 'Reef 20 Feet',
      },
      reef40Feet: {
        type: GraphQLInt,
        description: 'Reef 40 Feet',
      },
      flatLower: {
        type: GraphQLInt,
        description: 'Flat Lower Limit',
      },
      flatUpper: {
        type: GraphQLInt,
        description: 'Flat Upper Limit',
      },
      flat20Feet: {
        type: GraphQLInt,
        description: 'Flat 20 Feet',
      },
      flat40Feet: {
        type: GraphQLInt,
        description: 'Flat 40 Feet',
      },
  })
});

