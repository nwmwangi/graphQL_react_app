import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client';
import DisplayData from "./DisplayData";

// Edit your uri to the the api endpoint

function App(){
	const client = new ApolloClient({
		cache: new InMemoryCache(),
		uri: "http://localhost:3001/graphql"
	})
	return {
		<ApolloProvider client = {client}>
			<div className="App">
				<DisplayData />

			</div>;

		</ApolloProvider>
	}
	
}

export default App;