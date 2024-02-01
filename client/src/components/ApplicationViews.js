import { PostForm } from "./PostForm";
import PostList from "./PostList"
import { Routes, Route, Navigate} from "react-router-dom";

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={<PostList />}/>
            <Route path="/posts/create" element={<PostForm />} />
        </Routes>
    )
}