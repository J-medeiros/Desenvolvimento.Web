import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormComponent from "./components/FormComponent";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/:lessonId" element={<LessonPage />} /> */}
                <Route path="/aula-1" element={<FormComponent />} />
            </Routes>
        </Router>
    );
}

export default App;
