import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormComponent from "./components/FormComponent";
import ListaComponent from "./components/LIstaComponent";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/:lessonId" element={<LessonPage />} /> */}
                <Route path="/aula-1" element={<FormComponent />} />
                <Route path="/aula-2" element={<ListaComponent />} />
            </Routes>
        </Router>
    );
}

export default App;
