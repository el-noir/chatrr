import React, { Children, useEffect, useState } from 'react'
import './index.css'
import {Button} from '@/components/ui/button.jsx'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Auth from './pages/auth/index'
import Profile from './pages/profile/index';
import Chat from './pages/chat/index';
import { useAppStore } from './store';
import apiClient from './lib/api.client';
import { GET_USER_INFO } from '@/utils/constants';


const PrivateRoute = ({children})=> {
  const {userInfo} = useAppStore();
  const isAuthenticated = !!userInfo;
  return isAuthenticated ? children: <Navigate to="/auth" />;
}

const AuthRoute = ({children})=> {
  const {userInfo} = useAppStore();
  const isAuthenticated = !!userInfo;
  return isAuthenticated ? children: <Navigate to="/chat" />;
}

const App = () => {
  const {userInfo, setUserInfo} = useAppStore();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await apiClient.get(GET_USER_INFO, { withCredentials: true });
        if (response.status === 200 && response.data.id) {
          setUserInfo(response.data);
        } else {
          setUserInfo(undefined);
        }
      } catch (error) {
        setUserInfo(undefined);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
  
    getUserData();
  }, []);  // ✅ Empty dependency array ensures it runs only on mount
  
   if(loading){
    return <div>Loading...</div>
   }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="auth" element = {
        <AuthRoute>
          <Auth />
        </AuthRoute>
      }/>
      <Route path='*' element = {<Navigate to = "/auth" />} />
      <Route path = "profile" element={
        <PrivateRoute>
          <Profile/>
        </PrivateRoute>
      }  />
      <Route path = "chat" element={
        <PrivateRoute>
          <Chat/>
        </PrivateRoute>
      }  />
      </Routes>
      </BrowserRouter>
  );
}


export default App