import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Landing from "./assets/pages/Landing";
import TeacherList from "./assets/pages/TeacherList";
import TeacherForm from "./assets/pages/TeacherForm";

function RoutesPage() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Landing} />
                <Route path="/study" Component={TeacherList} />
                <Route path="/give-classes" Component={TeacherForm} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesPage;