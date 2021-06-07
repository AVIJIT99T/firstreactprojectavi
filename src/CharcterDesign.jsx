import React from "react";
import { withRouter } from "react-router";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import { FaBookDead } from "react-icons/fa";
import "./CharacterDesign.css";

const CharcterDesign = (props) => {
  return (
    <>
      <div className="upper-container">
        <img src={props.imgsrc} alt="" height="100px" width="100px" />
      </div>
      <div className="lower-container">
        <h3 className="heading">{props.mname}</h3>

        <h3 className="heading">{props.lname}</h3>
        <h3 className="heading">{props.oname}</h3>

        <span className="heading" data-tip={props.gender}>
          {props.gender == "Male" ? <FaMale /> : <FaFemale />}
        </span>
        <ReactTooltip />
        <h3 className="heading">{props.species}</h3>
        <span className="heading" data-tip={props.status}>
          <FaBookDead />
        </span>
        <ReactTooltip />
      </div>
    </>
  );
};

export default withRouter(CharcterDesign);
