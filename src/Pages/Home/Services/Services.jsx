import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css"
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("fakedb.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='services-container container d-flex justify-content-center align-items-center flex-column'>
            <h2 className='heading text-center'>My services</h2>
            <div className="float bg-info mt-3" ></div>
            <div className="services">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;