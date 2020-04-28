import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const plantDashboard = () => {
    const [plantList, setPlantList] = useState([]);

        useEffect(() => {
            axiosWithAuth()
            .get(`/api/${plantList.id}/plants`)
            .then( res => {
                setPlantList(res.data);
                console.log({setPlantList});
            })
            .catch(err => console.log(err))
        }, [])

    return (
        <PlantList />
    )
}

export default plantDashboard;


