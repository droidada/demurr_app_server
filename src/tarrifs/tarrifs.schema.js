import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLList } from 'graphql/type';
import { TarrifType } from './tarrifs.type';
import { getTarrif, editTarrif, getCompayTarrifs, getTarrifs } from './tarrifs.service';


export const TarrifsQuery = {
  type: TarrifType,
  resolve: (root, args, context) => getTarrifs(args, context),
};

export const TarrifQuery = {
  type: GraphQLList(TarrifType),
  args: {
      tarrifId: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve: (root, args, context) => getTarrif(args, context),
};

export const CompanyTarrifsQuery = {
  type: GraphQLList(TarrifType),
  args: {
    companyId: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve: (root, args, context) => getCompayTarrifs(args, context),
};

export const EditTarrifMutation = {
  type: TarrifType,
  args: {
      companyId: { type: GraphQLNonNull(GraphQLID) },
      dryLower: { type: GraphQLInt },
      dryUpper: { type: GraphQLInt },
      dry20Feet: { type: GraphQLInt },
      dry40Feet: { type: GraphQLInt },
      reefLower: { type: GraphQLInt },
      reefUpper: { type: GraphQLInt },
      reef20Feet: { type: GraphQLInt },
      reef40Feet: { type: GraphQLInt },
      flatLower: { type: GraphQLInt },
      flatUpper: { type: GraphQLInt },
      flat20Feet: { type: GraphQLInt },
      flat40Feet: { type: GraphQLInt },
  },
  resolve: (root, args, context) => editTarrif(args, context),
};
