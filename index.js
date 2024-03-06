import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// types
import { typeDefs } from './typeDefs';

// db
import db from './_db';

// resolvers
const resolvers = {
	Query: {
		games() {
			return db.games;
		},
		reviews() {
			return db.reviews;
		},
		authors() {
			return db.authors;
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);
