import axios from "axios";
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";
import "./Episode.css";

import CharcterDesign from "./CharcterDesign";

import EpisodeDetails from "./EpisodeDetails";

const Episode1 = (props) => {
  const { eId } = useParams();
  console.log({ eId });
  const [episode, setEpisode] = useState();

  const getEpisode = async () => {
    try {
      const ans = await axios.get(
        "https://rickandmortyapi.com/api/character/" + eId
      );
      console.log(ans.data);
      setEpisode(ans.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEpisode();
  }, []);

  const def = (a) => {
    var s = a;
    var spl = s.split("/");

    var num = 0;
    var last = spl[spl.length - 1];

    for (var i = 0; i < last.length; i++) {
      num = num * 10 + (last[i] - "0");
    }

    return num;
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar_episode">
        <div className="container-fluid">
          <h3 className="navbar-brand navbar_epi">Episode Details</h3>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/main">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="main1">
        {episode != null && (
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-sm-4">
                <div className="card p-3 m-auto mt-4 mb-4 shadow">
                  <CharcterDesign
                    imgsrc={episode.image}
                    mname={episode.name}
                    lname={episode.location.name}
                    oname={episode.origin.name}
                    species={episode.species}
                    gender={episode.gender}
                    status={episode.status}
                  />
                  <a
                    className="btn btn-primary mt-1 btn_episode"
                    onClick={() => {
                      props.history.push({
                        pathname: "/location/" + def(episode.location.url),
                      });
                    }}
                  >
                    Details
                  </a>

                  <a
                    className="btn btn-primary mt-2 btn_episode"
                    onClick={() => {
                      props.history.push({
                        pathname: "/location/" + def(episode.origin.url),
                      });
                    }}
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
            <EpisodeDetails edetails={episode.episode} />
          </div>
        )}
      </div>
    </>
  );
};

export default withRouter(Episode1);

// {episode.gender == "Male" && <FaMale />}
