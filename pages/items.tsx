import React, { useState, useEffect } from "react";
import Nav from "../src/presentation/components/nav";
import GetData from "../src/infrastructure/api/getJson";

export default function Items() {
    const [count, setCount] = useState(1);

    const loadMore = () => {
        setCount((prev) => prev + 1);
    }

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