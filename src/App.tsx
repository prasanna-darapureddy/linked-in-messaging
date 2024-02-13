import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/signUp/SignUp';
import SignIn from './components/signIn/SignIn';
import SignInHome from './components/signInHome/SignInHome';
import Messaging from './components/messagingPage/messagingHome/Messaging';
import Notifications from './components/notificationPage/notificationHome/NotificationHome';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '/signup' element={<SignUp/>}/>
          <Route path = '/signin' element={<SignIn/>}/>
          <Route path = '/' element={<SignInHome/>}/>
          <Route path = '/messaging' element={<Messaging/>}/>
          <Route path = '/notifications' element={<Notifications/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
