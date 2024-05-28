//single selection

import { useState } from "react";
import data from "./data";

// mulitple selection
export default function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleSingleSlection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  console.log(selected)

  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0
          ? data.map(dataItem =>
              <div className="item">
                <div
                  onClick={() => handleSingleSlection(dataItem.id)}
                  className="title"
                >
                  <h3>
                    {dataItem.question}
                  </h3>
                  <span>+</span>
                </div>
                {selected === dataItem.id
                  ? <div className="content">
                      {dataItem.answer}
                    </div>
                  : null}
              </div>
            )
          : <div>No data found!</div>}
      </div>
    </div>
  );
}
