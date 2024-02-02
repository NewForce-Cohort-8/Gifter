import React from "react";
import "./App.css";
import PostList from "./components/PostList";
import { BrowserRouter } from 'react-router-dom'
import { PostForm } from "./components/PostForm";
import { ApplicationViews } from "./components/ApplicationViews";

function App() {
 return (
<>
<BrowserRouter>
    
    <ApplicationViews />
  </BrowserRouter>
</>
)
}

export default App;