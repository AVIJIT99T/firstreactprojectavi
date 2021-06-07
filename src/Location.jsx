import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaLastfm } from "react-icons/fa";
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";
import "./Location.css";

const Location = (props) => {
  const { lc } = useParams();
  console.log({ lc });

  const [location, setLocation] = useState();

  const func = async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/location/" + lc
    );
    console.log(response.data);
    setLocation(response.data);
  };

  useEffect(() => {
    func();
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
      <nav className="navbar navbar-light bg-info">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 m-auto h1">
            Details of Location
          </span>
        </div>
      </nav>

      <div className="location_main">
        {location != null && (
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-sm-4">
                <div className="card p-3 mt-3 mb-3 shadow text-center card_location">
                  <h3 className="heading">{location.name}</h3>
                  <h3 className="heading">{location.dimension}</h3>
                  <h3 className="heading">{location.type}</h3>
                </div>
              </div>
            </div>

            <div className="row justify-content-md-center">
              <div className="col-sm-4">
                <div className="card p-3 mt-3 mb-3 shadow text-center">
                  {location.residents.map((curr, index) => {
                    console.log(curr.length);
                    return (
                      <>
                        <a
                          className="btn btn-primary mt-1 mb-1 btn_location"
                          onClick={() => {
                            props.history.push({
                              pathname: "/character/" + def(curr),
                            });
                          }}
                        >
                          Check Details
                        </a>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default withRouter(Location);
