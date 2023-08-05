import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserProvider } from './context/userContext.jsx'
import './index.css'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
const { VITE_URL_BACKEND } = import.meta.env
import { setContext } from '@apollo/client/link/context';
import { LanguageProvider } from './context/languageContext.jsx'
import './config/i18next.config.js'

const httpLink = createHttpLink({
  uri: VITE_URL_BACKEND,
});

const authLink = setContext((_, { headers }) => {
  const data = localStorage.getItem('User');
  const token = JSON.parse(data)?.token
  
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  name: 'MeetWorkspaces',
  version: '1.0'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <LanguageProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </LanguageProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
