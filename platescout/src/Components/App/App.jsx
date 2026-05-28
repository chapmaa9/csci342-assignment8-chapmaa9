import { Routes,Route } from 'react-router-dom'

import HomePage from '../../pages/HomePage.jsx';
import LoginForm from '../../forms/LoginForm.jsx';
import SignupForm from '../../forms/SignupForm.jsx';
import PageNotFound from '../../pages/PageNotFound.jsx';
import Profile from '../../pages/Profile';
import Navigation from '../Navigation/Navigation.jsx';
import ProtectedRoute from '../ProtectedRoute.jsx';
import './App.css'


function App() {

  const searchYelp = (term, location, sortBy) => {
  console.log('Searching Yelp with: Term ' + term + ', Location ' + location + ', Sort By ' + sortBy);
}

return (
  <div className="App">
    <>
    <Navigation/>
    <Routes>
      <Route path ="/" element={<HomePage/>}/>
      <Route path ="/signup" element={<SignupForm/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route element={<ProtectedRoute/>}>
        <Route path="/profile" element={<Profile/>}/>
      </Route>
      <Route path ="*" element={<PageNotFound/>}/>
    </Routes>
    </>
  </div>
)
};
export default App;
