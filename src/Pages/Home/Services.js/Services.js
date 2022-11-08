import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl mb-4 font-bold text-orange-600">Services</p>
                <h2 className="text-5xl mb-4 font-semibold">My Workout Programs</h2>
                <p>My goal is to make health and fitness attainable, affordable and approachable. </p>
            </div>
            <div className='grid gap-6 ml-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;