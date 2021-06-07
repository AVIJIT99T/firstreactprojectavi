import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import "./CharacterDetails.css";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { FaBookDead } from "react-icons/fa";
import { BiFemaleSign } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import CharcterDesign from "./CharcterDesign";

const CharacterDetails = (props) => {
  const getImage = props.char;
  console.log(getImage);

  const [img, setImg] = useState();

  const getImages = async () => {
    try {
      const res = await axios.get(
        "https://rickandmortyapi.com/api/character/" + getImage
      );
      console.log(res.data);
      setImg(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImages();
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
      {img != null && (
        <div className="col-sm-8 col-md-6 col-lg-4 col-xl-3 p-3 mb-2">
          <div className="character-card card p-3 shadow">
            {/* <div className="upper-container-character">
              <img
                src={img.image}
                className="img-fluid rounded-circle"
                alt=""
                height="100px"
                width="100px"
              />
            </div>
            <div className="lower-container-character">
              <h3 className="heading">{img.name}</h3>
              <h3 className="heading">{img.location.name}</h3>
              <h3 className="heading">{img.origin.name}</h3>

              <span className="heading" data-tip={img.gender}>
                {img.gender == "Male" && <FaMale />}
                {img.gender == "Female" && <FaFemale />}
                {img.gender == "unknown" && <FaBookDead />}
              </span>

              <h3 className="heading">{img.species}</h3>
              <span className="heading" data-tip={img.status}>
                <FaBookDead />
              </span>
              <ReactTooltip />
            </div> */}
            <CharcterDesign
              imgsrc={img.image}
              mname={img.name}
              lname={img.location.name}
              oname={img.origin.name}
              species={img.species}
              gender={img.gender}
              status={img.status}
            />

            <a
              className="btn btn-primary mt-1 btn_char"
              onClick={() => {
                props.history.push({
                  pathname: "/location/" + def(img.location.url),
                });
              }}
            >
              Details
            </a>

            <a
              className="btn btn-primary mt-2 btn_char"
              onClick={() => {
                props.history.push({
                  pathname: "/location/" + def(img.origin.url),
                });
              }}
            >
              Details
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(CharacterDetails);

{
  /* <div className="container-fluid mt-5">
          <div className="row text-center">
            <div className="col-10 mt-5">
              <div className="card p-2">
                <div className="d-flex align-items-center">
                  <div className="image">
                    <img src={img.image} className="rounded" width="155" />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */
}
