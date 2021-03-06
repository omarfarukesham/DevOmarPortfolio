
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import About from './components/About';
import Home from './components/Home';
import Friends from './components/Friends/Friends';
import NotFound from './components/NotFound';
import Details from './components/Details/Details';
import ProjectDetails from './components/ProjectDetails';
import ProjectDetails1 from './components/ProjectDetails1';
import Blogs from './components/Blogs';
import { Contact } from './components/Contact';
import Service from './components/Header/Service';
import Login from './components/Login';
import Training from './Training';
import RequireAuth from './components/RequireAuth';
import SignUp from './components/SignUp';
import Human from './components/Human';
import Programming from './components/Programming';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='About' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="/human" element={<Human></Human>}></Route>
        <Route path="/programming" element={<Programming></Programming>}></Route>


        <Route path="/training" element={
          <RequireAuth>
            <Training></Training>
          </RequireAuth>
        }></Route>

        <Route path='/projectDetails' element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path='/projectDetails1' element={<ProjectDetails1></ProjectDetails1>}></Route>
        <Route path='/friend/:friendId' element={<Details></Details>}></Route>
        <Route path="Friends" element={<Friends></Friends>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

    </div>
  );
}

export default App;
