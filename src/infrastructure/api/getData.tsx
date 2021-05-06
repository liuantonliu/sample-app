import axios from 'axios';

export interface JSONDataInterface {
    name: string;
    type: string;
    image: string;
    keywords: string[];
  }

const url = 'https://next.json-generator.com/api/json/get/E1HWKqdd8';

const GetData = async () => // no {} brackets needed here
    axios.get(url)
    .then((response) => {
        const arrayData: JSONDataInterface[] = response.data;
        return arrayData;
    })
    .catch((e) => []);

export default GetData;