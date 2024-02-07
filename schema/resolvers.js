const {UserProfiles, MoviesLibrary } = require("../_db")
const _ = require("lodash")

const resolvers = {
	Query: {
		users(parent) =>{
			console.log(parent)
			return UserProfiles;

		},
		user: (parent, args, context, info) => {
			const id = args.id;
			const user = _.find(UserProfiles, { id: Number()});
			return user

		},

// movie resolvers
		movies: () =>{
			return MoviesLibrary;

		},

		movie: (parent, args) => {
			const title = args.title;
			const movie = _.find(MoviesLibrary, { title });
			return movie

			
		},
	},

	User: {
		favourite_movies: (parent) => {
			console.log(parent)
			return _.filter(
				MoviesLibrary,
				(movie) => movie.releaseYear >= 2011 && movie.releaseYear < 2019
				);
		},
	},
	Mutation: {
		createUser: (parent, args) =>{
			const user = args.input;
			// Get the id of last_user entry in the database
			const last_id = UserProfiles[UserProfiles.length - 1].id;
			user.id = last_id + 1
			UserProfiles.push(user);
			return user;
		},

		updateUser: (parent, args) =>{
			const (id, new_username) = args.input;
			let updated_user:
			UserProfiles.forEach((user) =>{
				if (user.id === id) {
					user.username = new_username;
					updated_user = user;

				}
			});
			return updated_user;
		},
		deleteUser: (parent, args) =>{
			const id = args.id;
			_.remove(UserProfiles, (user) => user.id === Number(id));
			return null;
		},
	},
};

module.exports = { resolvers }