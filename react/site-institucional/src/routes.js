import React from "react";
import Home from "./pages/home/Home";
import Responsavel from "./pages/responsavel/Responsavel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Motorista from "./pages/motorista/Motorista";


function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/responsavel" element={<Responsavel />} />
                    <Route path="/motorista" element={<Motorista />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}


export default Rotas;