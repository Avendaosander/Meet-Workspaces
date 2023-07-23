import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserProvider } from './context/userContext.jsx'
import './index.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
const { VITE_URL_BACKEND } = import.meta.env

const client = new ApolloClient({
  uri: VITE_URL_BACKEND,
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <UserProvider>
        <App />
      </UserProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
