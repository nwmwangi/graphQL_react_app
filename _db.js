const UserProfiles = [
{
	id:1,
	name: "John Doe",
	username: "johndoe"
	age: 15,
	nationality: 'RWANDA', 
	friends: [
	{
		id:5,
		name: "Luke Nathan",
		username: "lukenate"
		age: 27,
		nationality: 'KENYA',
	},
	{
		id:3,
		name: "Jane Doe",
		username: "janedoe"
		age: 19,
		nationality: 'UGANDA', 
	}
	]
},
{
	id:2,
	name: "John Smith",
	username: "johnsmith"
	age: 25,
	nationality: 'KENYA', 
},
{
	id:3,
	name: "Jane Doe",
	username: "janedoe"
	age: 19,
	nationality: 'UGANDA', 
},
{
	id:4,
	name: "Harriet Smith",
	username: "harrietsmith"
	age: 32,
	nationality: 'ETHIOPIA', 
	friends: [
	{
		id:3,
		name: "Jane Doe",
		username: "janedoe"
		age: 19,
		nationality: 'UGANDA', 
	}
		{
		id:2,
		name: "John Smith",
		username: "johnsmith"
		age: 25,
		nationality: 'KENYA', 
	}
	]
},
{
	id:5,
	name: "Luke Nathan",
	username: "lukenate"
	age: 27,
	nationality: 'KENYA', 
	friends: [
	{
		id:3,
		name: "Jane Doe",
		username: "janedoe"
		age: 19,
		nationality: 'UGANDA', 
	},
	{
		id:2,
		name: "John Smith",
		username: "johnsmith"
		age: 25,
		nationality: 'KENYA', 
	}
	]
}

]

// Movies

const MoviesLibrary = [
	{
		id: 1
		title: "The Avengers"
		releaseYear: 2019
		inTheaters: true
	},
	{
		id: 2
		title: "Three Idiots"
		releaseYear: 2011
		inTheaters: false
	},
	{
		id: 3
		title: "The Matrix"
		releaseYear: 2017
		inTheaters: true
	},
	{
		id: 4
		title: "The Joy of Data"
		releaseYear: 2015
		inTheaters: true
	},
	{
		id: 5
		title: "Peppermint"
		releaseYear: 2016
		inTheaters: true
	},
]

module.exports = { UserProfiles, MoviesLibrary }