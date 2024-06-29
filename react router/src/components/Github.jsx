import React, { useState } from "react";
import { useEffect } from "react";

function Github(){
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/manav200612')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setdata(data)
        })
    }, [])

    return(
        <div className="text-center text-3xl bg-gray-700 text-white p-10">Github Followers: 54678 
        {/* <div className="text-center text-3xl bg-gray-700 text-white p-10">Github Followers: {data.followers}  */}
        <img className="m-auto mt-3 rounded-full border-2 shadow-md" src={data.avatar_url} alt="" /></div>
    )
}

export default Github