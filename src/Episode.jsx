/* This is final without useparams */
import React from "react";
import { withRouter } from "react-router";
import "./Episode.css";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { FaBookDead } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import EpisodeDetails from "./EpisodeDetails";

const Episode = (props) => {
  console.log(props.location.state);

  let genderId;
  let firstValue = "Male";
  let secondValue = "Female";

  if (props.location.state.gender == firstValue) {
    genderId = <FaMale />;
  } else if (props.location.state.gender == secondValue) {
    genderId = <FaFemale />;
  }

  return (
    <>
      <div className="main1">
        <nav className="navbar navbar-light bg-success">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 m-auto h1">
              Details of Episodes
            </span>
          </div>
        </nav>

        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-sm-4">
              <div className="card p-3 m-auto mt-4 mb-4 shadow">
                <div className="upper-container">
                  <img
                    src={props.location.state.imgsrc}
                    alt=""
                    height="100px"
                    width="100px"
                  />
                </div>
                <div className="lower-container">
                  <h3 className="heading">{props.location.state.sname}</h3>

                  <span
                    className="heading"
                    data-tip={props.location.state.gender}
                  >
                    {genderId}
                  </span>

                  <h3 className="heading">{props.location.state.species}</h3>
                  <h3 className="heading">{props.location.state.loc}</h3>

                  <span
                    className="heading"
                    data-tip={props.location.state.status}
                  >
                    <FaBookDead />
                  </span>
                  <ReactTooltip />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <EpisodeDetails edetails={props.location.state.episode} />
      </div>
    </>
  );
};

export default withRouter(Episode);
