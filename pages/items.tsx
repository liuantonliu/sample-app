import React, { useState, useEffect, useContext } from "react";
import Nav from "../src/presentation/components/nav";
import GetData from "../src/infrastructure/api/getData";
import { JSONDataContext } from '../src/application/contexts/data';
import MakeCard from "../src/presentation/components/cardFormat";

export default function Items() {
    const dataContext = useContext(JSONDataContext);
    const [hasErrored, setHasErrored] = useState(false);

    const loadMore  = async () => {
        const data = await GetData();
        if (data.length === 0) {
            setHasErrored(true);
        } else {
            setHasErrored(false);
            dataContext.dispatch({ type: 'add', payload: data });
        }
    }

    useEffect(() => {
        loadMore ();
    }, []);

    //? idk how efficient this is? people say adding a key get react to think that no need to load it again
    return ( 
      <div>
        <Nav />
        <h1>
          Items
        </h1>
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {dataContext.state.map((x,i) =>
                <MakeCard key={i} index={i}/>
            )} 
        </div>
        <button onClick={loadMore}>
            Load more
        </button>
      </div>
    )
}