import React, { useState } from "react";
import { useQuery, useLazyQuery, useMutation, gql } from "@apollo/client";

const QUERY_ALL_USERS = gql`
	query GetAllUsers {
		users {
		id
		name
		username
		age
	}
	}
`

const QUERY_ALL_MOVIES = gql`
	query GetAllMovies {
		movies{
			title
			releaseYear
			inTheaters
		}	
	}
`;

const GET_MOVIE_BY_TITLE = gql`
	query Movie($title: title){
		movie(title: $title){
			title
			releaseYear
		}
	}	
`;

const CREATE_USER_MUTATION = gql`
	mutation CreateUser($input: CreUserInput!){
		createUser(input: $input){
			name
			id
		}
	}
`;

function DisplayData(){

	const [movieSearched, setMovieSearched] = useState("")

	// User States Creation

	const [name, setName] = useState("")
	const [username, setUserName] = useState("")
	const [Age, setAge] = useState(0)
	const [Nationality, setNationality] = useState("")

	const {data, loading, refetch } = useQuery(QUERY_ALL_USERS);
	const {data: MovieData } = useQuery(QUERY_ALL_MOVIES);

	const [
			fetchMovie, { data: movieSearchedData, error: MovieError},
		] = useLazyQuery(GET_MOVIE_BY_TITLE);

	const [createUser] = useMutation(CREATE_USER_MUTATION);
	if (loading){
		return '<h1> Loading Data... </h1>';
	}

	// if (error){
	// 	console.log(error);
	// }

	// if (movieSearchedData){
	// 	console.log(movieSearchedData);
	// }
	// if (MovieError){
	// 	console.log(MovieError);
	// }

	return (
		<div>

			<div>

				<input type="text" placeholder="Name..." onChange={(event) =>{
						setName(event.target.value);
					}}/>
				<input type="text" placeholder="Username..." onChange={(event) =>{
						setUserName(event.target.value);
					}}/>
				<input type="number" placeholder="Age..." onChange={(event) =>{
						setAge(event.target.value);
					}}/>
				<input type="text" placeholder="Nationality..." onChange={(event) =>{
						setNationality(event.target.value.toUpperCase());
					}}/>

				<button onClick={() =>{
					createUser({
						variables: { input{name, username, Number(age), nationality }},
					});
					refetch()
				}}> Create New User </button>
			</div>


			{ data && data.users.map((user) => {
				return (
				<div>
					<h1> Name: {user.name}</h1>
					<h1> Username: {user.username}</h1>
					<h1> Age: {user.age}</h1>
				</div>

				);
			},)}

			{ MovieData && MovieData.movies.map((movie) => {
				return (
				<div>
					<h1> Movie Title: {movie.title}</h1>
					<h1> Year of Release: {movie.releaseYear}</h1>
					
				</div>

				);
			})}
			<div>

				<input type = "text" placeholder="...."
					onChange={(event) =>{
						setMovieSearched(event.target.value);
					}}
					/>
				<button> onClick={() =>{
					fetchMovie({
						variables:{
							name:movieSearched,
						},
					});
				}}> Fetch Data</button>
				<div>
					{movieSearchedData && {

					<div>
					
						<h1>Movie: {movieSearchedData.movie.title} </h1>
						<h1>Year of Release: {movieSearchedData.movie.releaseYear} </h1>{""}
				</div>	
				}}
				{MovieError && <h1> Movie does not exist! </h1>}
				</div>

			</div>




		</div>
	);
}

export default DisplayData;









