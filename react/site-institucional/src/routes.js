import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/responsavel" element={<Responsavel />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    );
}


export default Rotas;