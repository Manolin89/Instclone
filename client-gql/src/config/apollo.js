import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";

const httplnk = createHttpLink({
    uri: "http://localhost4000",
});

const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: httplnk
});

export default client;