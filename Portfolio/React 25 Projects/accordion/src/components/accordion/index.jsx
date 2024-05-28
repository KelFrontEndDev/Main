//single selection

import { useState } from "react"

// mulitple selection
export default function Accordion() {

    const [selected, setSelected] = useState(null);

    return <div className="wrapper">
        <div className="accordion">
            {
                data && data.length
            }
        </div>

    </div>
}