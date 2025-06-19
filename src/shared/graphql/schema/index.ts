import {mergeTypeDefs} from "@graphql-tools/merge";
import {mergeResolvers} from "@graphql-tools/merge";
import userResolvers from "./userResolver";
import blogResolvers from "./blogResolver";
import userTypeDefs from "./userTypedef";
import blogTypeDefs from "./blogTypedefs";
export const resolvers = mergeResolvers(
    [
        userResolvers,
        blogResolvers

    ]
)
export const typeDefs =  mergeTypeDefs(
    [
        userTypeDefs,
        blogTypeDefs
    ]
)

