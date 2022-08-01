import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import App from "./../App";
import Create from "./../Component/User/Create"
import Login from "./../Component/User/Login";
import Menu from "./../Component/Sidebar/Menu";

const Routers = () => {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="login" element={<Login />} />
                <Route path="addUser" element={<Create />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>Theres nothing here!</p>
                            Click<Link to="/"> here</Link> to Home
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;