import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { ReactNode } from "react";
import "./App.scss";

function App({ children }: { children: ReactNode }) {
    const { pathname } = useLocation();
    return (
        <div className="page">
            <Header
                title={pathname === "/" ? "Product List Page" : "Product Page"}
            />

            <div className="content">
                <Sidebar />
                {children}
            </div>
        </div>
    );
}

export default App;
