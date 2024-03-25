import './Banner.css'



const Banner = () => {
    return (
        <div className="flex flex-row gap-4 bg-sky-50 p-10">
            <div className="flex flex-col justify-center items-center">
                <div className="space-y-8 max-w-xl">
                    <h1 className="text-6xl font-bold">One Step <br /> Closer To Your <br /> <span className="text-blue-600" >Dream Job</span></h1>

                    <p className="" >Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>

            <div className="banner">

                <img src="user.png" alt="" />

            </div>

        </div>
    );
};

export default Banner;