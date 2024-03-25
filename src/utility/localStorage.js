
const getStoredJobApplication = () =>{

    const storedApplication = localStorage.getItem('job-application')

    if(storedApplication){
        return JSON.parse(storedApplication)
    }
    return []
}

const saveJobApplication = (id)=>{

    const storedJobApplication = getStoredJobApplication()

    const isExist = storedJobApplication.find(jobId => jobId === id)

    if(!isExist){
        storedJobApplication.push(id)

        localStorage.setItem('job-application' , JSON.stringify(storedJobApplication))
    }





}

export {getStoredJobApplication, saveJobApplication}