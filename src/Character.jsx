import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";
import CharacterDetails from "./CharacterDetails";
import "./Character.css";

const Character = () => {
  const { id } = useParams();

  const [value, setValue] = useState();

  //   console.log({ id });

  const getValue = async () => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/episode/" + id
      );
      const data = await response.json();
      console.log(data);
      setValue(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getValue();
  }, []);

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 m-auto h1">
            Details of Characters
          </span>
        </div>
      </nav>

      <div className="main_char">
        {value != null && (
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-sm-4">
                <div className="card p-3 mt-3 mb-3 shadow text-center">
                  <h3 className="heading">{value.name}</h3>
                  <h3 className="heading">{value.air_date}</h3>
                  <h3 className="heading">{value.episode}</h3>
                </div>
              </div>
            </div>

            <div className="row">
              {/* <div className="equal"> */}
              {value.characters.map((curr, index) => {
                console.log(curr);
                return (
                  <>
                    <CharacterDetails char={curr.substring(42)} />
                  </>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default withRouter(Character);
