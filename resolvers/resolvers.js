import { users, quotes } from "../fakedb.js"
import { randomBytes } from 'crypto'

const resolvers = {
    Query: {
        user: (_, { id }) => users.find(user => user.id == id),    //"_" underscore for first argument because it takes parent of element
        users: () => users,
        quotes: () => quotes,
        iquote: (_, { by }) => quotes.filter(quote => quote.by == by)
    },

    User: {
        quotes: (user) => quotes.filter(quote => quote.by == user.id)
    },

    Mutation: {
        signupUserDummy: (_, { userNew }) => {
            const id = randomBytes(5).toString("hex")
            users.push({
                id,
                ...userNew
            })
            return users.find(user => user.id == id)
        }
    }
}

export default resolvers