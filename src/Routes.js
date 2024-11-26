import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ProjectsPage } from "./pages/ProjectsPage";

export const RoutesPath = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AboutPage />}></Route>
                <Route path="/projects" element={<ProjectsPage />}></Route>
                <Route path="/contact" element={<ContactPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
