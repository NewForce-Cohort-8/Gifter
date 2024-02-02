import React from "react";
import "./App.css";
import PostList from "./components/PostList";
import { BrowserRouter } from 'react-router-dom'
import { PostForm } from "./components/PostForm";

function App() {
 return (
<>
<BrowserRouter>
    
    <PostList />
  </BrowserRouter>
</>
)
}

export default App;