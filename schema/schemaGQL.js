import { gql } from "apollo-server";

const typeDefs = gql`
type Query{
    user(id:ID!): User
    users: [User]
    quotes: [Quote]
    iquote(by:ID!): [Quote]
}

type User{
    id:ID
    firstName:String
    lastName:String
    email:String
    quotes:[Quote]
}

type Quote{
    name:String,
    by:ID
}
`

export default typeDefs