import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home-Page";
import CallbackPage from "./components/Callback-Page";
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationGuard from './components/Authentication-Guard';
import TaskList from './components/Task-Details';



const App: React.FC = () => {

  const {isLoading} = useAuth0();

  if ( isLoading ) return (<div>Loading...</div>)


  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route
      path='/Task-Details'
      element={<AuthenticationGuard component={TaskList} />}
      />
      <Route path='/callback' element={<CallbackPage />} />
    </Routes>
  );
};

export default App;