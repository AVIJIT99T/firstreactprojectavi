import axios from "axios";
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";

const Location = () => {
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

  return (
    <>
      {location != null && (
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-sm-4">
              <div className="card p-3 mt-3 mb-3 shadow text-center">
                <h3 className="heading">{location.name}</h3>
                <h3 className="heading">{location.dimension}</h3>
                <h3 className="heading">{location.type}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(Location);
