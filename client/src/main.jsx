import React from 'react';
import { createRoot } from 'react-dom/client';
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
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
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
  </ApolloProvider>
);
