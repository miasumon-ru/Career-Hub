import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import { useEffect, useState } from "react";



const AppliedJobs = () => {

    const [appliedJobs, setAppliedJobs] = useState([])

    const [displayJobs, setDisplayJobs] = useState([])

    const jobs = useLoaderData()

    useEffect(() => {
        const storedJobId = getStoredJobApplication()

        // if(jobs.length > 0){
        //     const jobsApplied =  jobs.filter(job => storedJobId.includes(job.id))

        //     console.log(jobsApplied)
        // }

        // another way to get the things from localStorage

        const jobsApplied = []

        for (const id of storedJobId) {
            const job = jobs.find(job => job.id === id)
            if (job) {
                jobsApplied.push(job)
            }
        }

        setAppliedJobs(jobsApplied)
        setDisplayJobs(jobsApplied)

        console.log(jobsApplied)




    }, [jobs])

    
    const handleJobsFilter = (filter)=>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs)
        }
        else if( filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }
        else if(filter === 'onsite'){
            const onSite = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')

            setDisplayJobs(onSite)
        }
    }




    return (
        <div>
            <p>Applied jobs</p>

            <details className="dropdown">
                <summary className="m-1 btn">Filter</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=> handleJobsFilter("remote")} ><a>Remote</a></li>
                    <li onClick={()=> handleJobsFilter("onsite")} ><a>Onsite</a></li>
                    <li onClick={()=> handleJobsFilter("all")} ><a>All</a></li>
                </ul>
            </details>

            <ul>
                {
                    displayJobs.map(job => <li key={job.id}>
                        <span className="text-2xl font-bold mr-2">{job.job_title}</span>
                        <span className="mr-5">{job.company_name}</span>
                        <span >{job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>

        </div>
    );
};

export default AppliedJobs;