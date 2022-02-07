import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import WorkList from '../components/WorkList';

const Works = () => {
    const [works,setWorks] = useState([]);

    useEffect(() => {
        axios.get('http://www.idocean.co.kr/_api/works.php')
            .then(response => {
                // console.log(response.data.results);
                setWorks(response.data.results);
            });
    },[]);

    useEffect(()=>{
        //console.log(works)
    }, [works])

    return (
        <>
            <WorkList works={works} />
        </>
    );
}

export default Works;