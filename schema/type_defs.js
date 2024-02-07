const { gql } = require("apollo-server");

const typeDefs = gql`

	type User {
		id: ID!
		name: String!
		username: String!
		age: int!
		nationality: Nationality!
		friends: [User]
		favourite_Movies: [Movie]
	}

	type Movie {
		id: ID!
		title: String!
		releaseYear: Int!
		inTheaters: Boolean!
	}
	type Query{
		users: [User!]!
		user(id: ID!):User!
		movies: [Movie!]!
		movie(name: String!): Movie!
	}


	input CreateUserInput {
		name: String!
		username: String!
		age: int!
		nationality: Nationality = KENYA

	}

	input UpdateUserInput{
		id: ID!
		new_username: String!
	}

		type Mutation {
			createUser(input: CreateUserInput!): User!
			updateUser(input: UpdateUserInput!): User
			deleteUser(id: ID):User
	}
	enum Nationality {
		RWANDA
		KENYA
		UGANDA
		ETHIOPIA
	}
`;

module.exports = { typeDefs }