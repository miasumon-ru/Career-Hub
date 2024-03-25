import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";



const RootPage = () => {
    return (
        <div>

            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default RootPage;