import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Cookies from 'js-cookie';
import {onError} from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    for ( const err of graphQLErrors) {
      console.log(err.message,"graphqlerror");
      
      if (
        err.message.includes('jwt expired') ||
        err.extensions?.code === 'UNAUTHENTICATED'
      ) {
        // Redirect to login
        Cookies.remove('token');
        window.location.href = '/login';
      }
    }
  }
});

const httpLink = new HttpLink({
  uri:"/api/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get("token")
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    }
  }
});

 export function createApolloClient() {
    return new ApolloClient({
      link:from([
        errorLink,
        authLink.concat(httpLink)  
      ]) ,
      cache: new InMemoryCache(),
    });
  }





