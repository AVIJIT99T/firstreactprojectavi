import axios from "axios";
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";
import "./Episode.css";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { FaBookDead } from "react-icons/fa";
import CharcterDesign from "./CharcterDesign";
import ReactTooltip from "react-tooltip";
import EpisodeDetails from "./EpisodeDetails";
import { NavLink } from "react-router-dom";

const Episode1 = () => {
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

  return (
    <>
      {/* <nav className="navbar navbar-light navbar_episode">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 m-auto h1">
            Details of Episodes
          </span>
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
            <ul className="navbar-nav px-2 ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <nav className="navbar navbar-expand-lg navbar-light navbar_episode">
        <div className="container-fluid">
          <div className="navbar_heading">
            <h3 className="navbar-brand m-auto">Episode Details</h3>
          </div>
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
                <a className="nav-link active" href="/episode/:eId">
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
                  {/* <div className="upper-container">
                    <img
                      src={episode.image}
                      alt=""
                      height="100px"
                      width="100px"
                    />
                  </div>
                  <div className="lower-container">
                    <h3 className="heading">{episode.name}</h3>
                    <span className="heading" data-tip={episode.gender}>
                      {episode.gender == "Male" ? <FaMale /> : <FaFemale />}
                    </span>
                    <ReactTooltip />
                    <h3 className="heading">{episode.location.name}</h3>
                    <h3 className="heading">{episode.origin.name}</h3>
                    <h3 className="heading">{episode.species}</h3>

                    <span className="heading" data-tip={episode.status}>
                      <FaBookDead />
                    </span>
                    <ReactTooltip />
                  </div> */}

                  <CharcterDesign
                    imgsrc={episode.image}
                    mname={episode.name}
                    lname={episode.location.name}
                    oname={episode.origin.name}
                    species={episode.species}
                    gender={episode.gender}
                    status={episode.status}
                  />
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
