import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
     
    const [jobs, setJobs] = useState([])

    const [dataLength , setDataLength] = useState(4)

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])

    console.log(jobs)

    return (
        <div>
              <div className="text-center my-10">
                <h1 className="text-5xl mb-5">Featured Jobs : {jobs.length}  </h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

           <div className="grid grid-cols-2 gap-4">
            {
                jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
            }
           </div>

           <div className={ dataLength === jobs.length ? 'hidden' : 'text-center my-10' }>
            <button  onClick={()=>setDataLength(jobs.length)} className="btn btn-primary">Show All </button>
           </div>
            
        </div>
    );
};

export default FeaturedJobs;