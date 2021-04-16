import React from "react"
import { Link } from "gatsby"

import "../../styles/var.scss"
import "../../styles/global.scss"

export default function Navlink({ name, to, active, isAlgoLink}) {
  if(!isAlgoLink){
    return (
      <div className=" navlink" id={active ? "active" : ""}>
        <Link to={to}>
          <span>{name}</span>
        </Link>
      </div>
    )
  }else{
    return (
      <div className="algolink navlink" id={active ? "active" : ""}>
        <a href="https://algolympics.upacm.net/">
          <span>
            <span className="red">Al</span>
            <span className="yellow">go</span>
            <span className="green">lym</span>
            <span className="blue">pics</span>
          </span>
        </a>
      </div>
    )
  }
}
