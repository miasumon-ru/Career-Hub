import { FaLocationDot } from "react-icons/fa6";

import { FaDollarSign } from "react-icons/fa6";


const Job = ({job}) => {

    const {logo, job_title, company_name, remote_or_onsite,location, salary, job_type } = job

    const jobStyle = {
        border : '1px solid black',
        padding : '25px',
        background:' linear-gradient(90.00deg, rgba(126, 144, 254, 0.05),rgba(152, 115, 255, 0.05) 100%)'
        
    }

    return (
        <div className="" style={jobStyle}>

            <img src={logo} alt="" />
            <h1>{job_title}</h1>
            <p>{company_name}</p>

            <div className="mt-3">
                <button className="btn btn-primary mr-3"> {remote_or_onsite} </button>

                <button className="btn btn-primary"> {job_type} </button>


            </div>

            <div className="flex mt-3 items-center gap-2">

                <p className="flex justify-center items-center gap-2 mr-5"><FaLocationDot />{location} </p>

                <p className="flex justify-center items-center gap-2"><FaDollarSign /> Salary :  {salary} </p>

            </div>

            <button className="btn btn-primary">View Details</button>




            
        </div>
    );
};

export default Job;