## Quotes App
#### This is a GraphQL project with client side on ReactJs. Using Apollo Client 3 to handle all the graphql requests to our Apollo server.
### Technology used:
##### Client Side - a). ReactJs, b). React Router v6, c). Apollo Client v3+ (it caches the data)
##### Server Side - a). Node.js, b). graphQL, c). apollo-server, d). express/apollo-server-express, e). mongoose, f). jsonwebtoken, g). bcryptjs (password hashing)
##### Database - a). MongoDB Atlas

### NOTE:
#### Apollo Client have hooks to Query or Mutate the data
#### To serve graphQL in Node.js we will require a package in http i.e., apollo-server
#### If you want to create REST API along with graphQL, need to use "express/apollo-server-express package" instead of "apollo-server"

<br>

#### GraphQL is an open-source query language and runtime for APIs

#### GraphQL differs from traditional REST (Representational State Transfer) APIs in the way it handles data requests. With REST, you typically have predefined endpoints that return fixed data structures. In contrast, GraphQL allows clients to specify the structure of the data they need and receive precisely that data in a single request.

#### Instead of making multiple requests to different endpoints for different resources, GraphQL enables clients to send a single query to a GraphQL server, specifying the fields they want in the response. The server then responds with the requested data, adhering to the structure defined in the query.

## Terms
#### Query - to Get data
#### Mutation - to Post / Update / Delete the data
#### Resolver - has logic to handle query or mutation operation

<br>

## Problems
#### Overfetching - when there is prefedined endpoint with fixed data structure, example a json response will all data (id, name, age, etc....)
#### Underfetching - when there is more than one api call has to be done to get data from two or more entitities, example of an ecommerce website where we want user details along with orders we have to make two api calls one for users and another for orders.

<br>

## Endpoints
#### Rest Api - has multiple endpoints like Get, Post, Put, Delete.
#### GraphQL - has only one endpoint i.e., Post

<br>

## Testing Platforms
#### Rest Api - Postman
#### GraphQL - Playground
