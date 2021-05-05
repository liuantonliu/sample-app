import React, {useState, useEffect} from "react";
import axios from 'axios';
import MakeCard from "../../presentation/components/cardFormat";

export default function GetData() { // https://levelup.gitconnected.com/fetch-api-data-with-axios-and-display-it-in-a-react-app-with-hooks-3f9c8fa89e7b
    const [data, getData] = useState([]);
    const url = 'https://next.json-generator.com/api/json/get/E1HWKqdd8';
    
    useEffect(() => {
        getAllData();
    }, []);

    const getAllData = () => {
        axios.get(url)
        .then((response) => {
            const allData = response.data;
            getData(allData);
        })
        .catch(error => console.error(`Error: $(e)`));
    }

    return(
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {data.map((data,key) => {
                return ( // https://www.pluralsight.com/guides/load-and-render-json-data-into-react-components
                    <MakeCard name={data.name} type={data.type} image={data.image} keywords={data.keywords} />
                )
            })}
        </div>
    )
}