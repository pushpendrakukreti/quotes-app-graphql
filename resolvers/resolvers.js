import { users, quotes } from "../fakedb.js"

const resolvers = {
    Query: {
        user: (_, { id }) => users.find(user => user.id == id),    //"_" underscore for first argument because it takes parent of element
        users: () => users,
        quotes: () => quotes,
        iquote: (_, { by }) => quotes.filter(quote => quote.by == by)
    },

    User: {
        quotes: (user) => quotes.filter(quote => quote.by == user.id)
    }
}

export default resolvers