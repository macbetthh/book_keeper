import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import SearchBooks from './pages/SearchBooks'; 
import SavedBooks from './pages/SavedBooks'; 
import LoginForm from './components/LoginForm'; 
import SignupForm from './components/SignupForm'; 

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="search" element={<SearchBooks />} />
            <Route path="saved" element={<SavedBooks />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignupForm />} />
          </Route>
        </Routes>
      </React.StrictMode>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
