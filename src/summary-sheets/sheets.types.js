import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLInputObjectType,
    GraphQLFloat,
  } from 'graphql/type';


  export const SheetType = new GraphQLObjectType({
    name: 'SheetType',
    description: 'Summary sheet provided by shipping company',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'Summary sheet Id',
        },
        serialNo: {
            type: GraphQLInt,
            description: 'Mimetype',
        },
        encoding: {
          type: GraphQLString,
          description: 'Encoding',
        }
    })
  });