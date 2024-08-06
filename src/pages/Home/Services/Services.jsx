
import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:4000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Seervices Area</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut corrupti vero reprehenderit <br/> cum delectus fugit vitae, deleniti nesciun</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                     key={service._id} service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;