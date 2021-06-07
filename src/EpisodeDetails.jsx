import React from "react";
import { withRouter } from "react-router";
import "./EpisodeDetails.css";

const EpisodeDetails = (props) => {
  const ed = props.edetails;
  // console.log(ed);
  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-4">
            <div className="card card_details mb-3">
              <h2>List of Episodes</h2>
              {ed.map((curr, index) => {
                {
                  console.log(curr);
                  let name = "Avijit";
                  console.log("hello," + name);
                }
                return (
                  <>
                    <ul>
                      <h2>
                        Episode: {index + 1}
                        <button
                          className="btn3_details"
                          onClick={() => {
                            props.history.push({
                              pathname: "/episode/" + (index + 1),
                            });
                          }}
                        >
                          Watch Now
                        </button>
                      </h2>
                    </ul>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(EpisodeDetails);
