import { useLoaderData, useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";


const JobDetails = () => {

    const jobs = useLoaderData()
    const {id} = useParams()

    const idInt = parseInt(id)
    console.log(jobs, idInt)

    const job = jobs.find(job => job.id === idInt)

    const {job_description,job_responsibility,educational_requirements} = job


    const handleApplyJob = () =>{

        saveJobApplication(idInt)
        
        toast('you have successfully applied')

      
    }

    

    return (
        <div className="my-10">
            <div className="bg-[url('/bg1.png')] bg-cover bg-left py-20 text-center text-4xl font-bold">
            <p>Jobs Details of : {idInt} </p>
            </div>

            <div className="grid grid-cols-4 gap-4 my-20">

                <div className="col-span-3 border p-10">

                    <p>
                      <span  className="text-2xl font-bold">job description :</span>  {job_description}
                    </p>

                    <p>
                      <span  className="text-2xl font-bold">job Responsibility :</span>  {job_responsibility}
                    </p>

                    <p>
                      <span  className="text-2xl font-bold">job Requirements:</span>  {educational_requirements}
                    </p>

                </div>
                <div  className="border text-center">
                    <button onClick={handleApplyJob} className="btn btn-primary">Apply Now</button>
                </div>

                <ToastContainer></ToastContainer>
            </div>


        </div>
    );
};

export default JobDetails;