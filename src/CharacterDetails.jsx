import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import "./CharacterDetails.css";
import { FaMale } from "react-icons/fa";
// import { FaFemale } from "react-icons/fa";
import { FaBookDead } from "react-icons/fa";
// import { BiFemale } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

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

  //   let genderId;
  //   let firstValue = "Male";
  //   let secondValue = "Female";

  //   if (img.gender == firstValue) {
  //     genderId = <FaMale />;
  //   } else if (img.gender == secondValue) {
  //     genderId = <FaFemale />;

  //     } else {
  //       genderId = <BiFemale />;
  //     }
  //   console.log(img.gender);

  return (
    <>
      {img != null && (
        <div className="col-sm-8 col-md-6 col-lg-4 col-xl-3 p-3 mb-2">
          <div className="character-card card p-3 shadow">
            <div className="upper-container-character">
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
              {/* <h3 className="heading">{img.gender}</h3>
              <h3 className="heading">{img.status}</h3> */}

              <span className="heading" data-tip={img.gender}>
                <FaMale />
              </span>

              <h3 className="heading">{img.species}</h3>
              <span className="heading" data-tip={img.status}>
                <FaBookDead />
              </span>
              <ReactTooltip />
              {/* <span className="heading" data-tip={props.location.state.status}>
              <FaBookDead />
            </span>
            <ReactTooltip />
            <br /> */}
              <br />
              <a class="btn btn-primary mt-2" href="/main" role="button">
                Link
              </a>
            </div>
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
