import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";
import CharacterDetails from "./CharacterDetails";
import "./Character.css";
import { useHistory } from "react-router-dom";

const Character = () => {
  const { id } = useParams();

  const [value, setValue] = useState();

  //   console.log({ id });
  let history = useHistory();

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
      <nav className="navbar navbar-light navbar_char">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 m-auto h1">
            Details of Characters
          </span>
          {/* <button
            onClick={() => {
              history.push("/episode");
            }}
          >
            Previous
          </button> */}
        </div>
      </nav>

      <div className="main_char">
        {value != null && (
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-sm-4">
                <div className="card p-3 mt-3 mb-3 shadow text-center card_char">
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
                    <CharacterDetails char={def(curr)} />
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
