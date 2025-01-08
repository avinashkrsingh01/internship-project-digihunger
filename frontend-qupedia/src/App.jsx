import React from "react";
import "./App.css";
import {Routes,Route} from 'react-router-dom';


import VideoEdit from "./components/Pages/VideoEdit/VideoEdit";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Webdevelopment from "./components/Pages/WebDeveloper/Webdevelopment";
import TwoD from "./components/Pages/TwoD/TwoD";
import ThreeD from "./components/Pages/ThreeD/ThreeD";
import DigitalMark from "./components/Pages/DigitalMark/DigitalMark";
import BookSession from "./components/Pages/BookSession/BookSession";
import Home from "./components/Pages/Home/Home";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";
import ProblemSolving from "./components/Pages/ProblemSolving/ProblemSolving";
import Login from "./components/Login/Login";


export default function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element:<> <Navbar/> <VideoEdit/> </>
  //   },
  //   {
  //     path: "/webdeveloper",
  //     element: <> <Navbar/> <Webdevelopment/> </>
  //   },
  // ]);
  return (
    <>
    <Routes>

      <Route exact path="/" Component={Home}/>
      <Route path="/twod" Component={TwoD}/>
      <Route path="/threed" Component={ThreeD}/>
      <Route path="/digitalmark" Component={DigitalMark}/>
      <Route path="/videoedit" Component={VideoEdit}/>
      <Route path="/webdeveloper" Component={Webdevelopment}/>
      <Route path="/booksession" Component={BookSession}/>
      <Route path="/problemsolving" Component={ProblemSolving}/>
      <Route path="/login" Component={Login}/>

      
    </Routes>
{/* 

      <RouterProvider router={router} />

 */}

{/* <VideoEdit/> */}
{/* <Webdevelopment/> */}
{/* <TwoD/> */}
{/* <BookSession/>
<ThreeD/> */}
{/* <DigitalMark/> */}
    </> 
  );
}
