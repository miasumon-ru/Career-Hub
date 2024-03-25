import { Link } from "react-router-dom";



const ErrorPage = () => {
    return (
        <div className="text-center flex flex-col justify-center items-center gap-7 mt-20">
            <p>Oops!!!</p>
            <button className="btn btn-primary" ><Link to={"/"} >Go Back</Link></button>
        </div>
    );
};

export default ErrorPage;