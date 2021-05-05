import React, { useState, useEffect } from "react";
import Nav from "../src/presentation/components/nav";
import GetData from "../src/infrastructure/api/getData";

export default function Items() {
    const [count, setCount] = useState(1);

    // load the Json array "count" number of times
    const loadMore = () => {
        setCount((prev) => prev + 1);
    }

    //? idk how efficient this is? people say adding a key get react to think that no need to load it again
    return ( 
      <div>
        <Nav />
        <h1>
          Items
        </h1>
        <div>
            {[...Array(count)].map((x,i) =>
                <GetData key={i}/>
            )} 
        </div>
        <button onClick={loadMore}>
            Load more
        </button>
      </div>
    )
}