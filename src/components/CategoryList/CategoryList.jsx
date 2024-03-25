import { useEffect, useState } from "react";
import List from "../List/List";



const CategoryList = () => {

    // state

    const [categoryLists, setCategoryList] = useState([])

    // Effect

    useEffect(() => {
        fetch('catergoryList.json')
            .then(res => res.json())
            .then(data => setCategoryList(data))
    }, [])



    return (

        <div className="my-10">
            <div className="text-center my-10">
                <h1 className="text-5xl mb-5">Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-4 gap-10">


                {
                    categoryLists.map((categoryList, index) => <List key={index} categoryList={categoryList} ></List>)
                }

            </div>

        </div>



    );
};

export default CategoryList;