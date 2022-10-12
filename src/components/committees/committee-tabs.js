import React, { useState } from "react"
import CommitteeCards from "./committee-cards"

import "./committee-tabs.scss"

/* Displays Committee Cards by batch */
export default function CommitteeTabs({ batches }) {
  const currentBatch = Object.keys(batches).sort().pop()
  const [visibleBatch, setVisibleBatch] = useState(currentBatch)

  return (
    <div>
      <div id="committee-batches">
        {Object.keys(batches).length > 1 
				&& Object.keys(batches).map(batch => (
          <button key={batch} 
						onClick={() => setVisibleBatch(batch)}
						className={visibleBatch === batch && "selected"}>
            <h6>{batch}</h6>
          </button>
        ))}
      </div>
      <CommitteeCards members={batches[visibleBatch]} />
    </div>
  )
}
