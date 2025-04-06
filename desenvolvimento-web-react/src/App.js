import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormComponent from "./components/FormComponent";
import ListaComponent from "./components/LIstaComponent";
import ContadorComEstado from "./components/ContadorComEstado";
import ContadorSemEstado from "./components/contadorSemEstado";
import HookCard from "./pages/HookCard";
import UseRefExample from "./components/UseRefExample";
import UseReducerExample from "./components/UseReduceExample";
import UseLayoutEffectExample from "./components/UseLayoutEffectExample";
import UseImperativeHandleExample from "./components/UseImperativeHandleExample";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/:lessonId" element={<LessonPage />} /> */}
                <Route path="/aula-1" element={<FormComponent />} />
                <Route path="/aula-2" element={<ListaComponent />} />
                <Route path="/contador-com-estado" element={<ContadorComEstado />} />
                <Route path="/contador-sem-estado" element={<ContadorSemEstado />} />
                <Route path="/hooks" element={<HookCard />} />
                <Route path="/useRefExample" element={<UseRefExample />} />
                <Route path="/useReducerExample" element={<UseReducerExample />} />
                <Route path="/useLayoutEffectExample" element={<UseLayoutEffectExample />} />
                <Route path="/useImperativeHandleExample" element={<UseImperativeHandleExample />} />

            </Routes>
        </Router>
    );
}


export default App;
