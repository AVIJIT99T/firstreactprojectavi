/* This is final without useparams */
import React, { useState, useEffect } from "react";
import "./Main.css";
import { withRouter } from "react-router";
import img1 from "./Images/pic1.jpg";
import axios from "axios";

const Main1 = (props) => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    }, [value]);

    return debouncedValue;
  };

  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const getUsers = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      console.log(data.results);
      setUsers(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(props);
  useEffect(() => {
    getUsers();
  }, []);

  const getData = async () => {
    const res = await axios.get(
      "https://rickandmortyapi.com/api/character/?name=" + debouncedSearchTerm
    );
    setUsers(res.data.results);
    console.log("ABC" + debouncedSearchTerm);
  };

  useEffect(() => {
    getData();
  }, [debouncedSearchTerm]);

  return (
    <>
      <div className="main">
        <nav className="navbar navbar-light bg-danger">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src={img1}
                alt=""
                width="50"
                height="50"
                className="d-inline-block align-text-top ms-5 img_main"
              />
            </a>
            <span className="navbar-brand mb-1 m-auto h1">
              Rick And Morty API Characters
            </span>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                onChange={(data) => {
                  setSearchTerm(data.target.value);
                }}
              />
            </form>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            {users.map((curElem, index) => {
              return (
                <>
                  <div
                    className="col-sm-8 col-md-6 col-lg-4 mt-5 mb-2"
                    key={curElem.id}
                  >
                    <div className="card col-sm-8 col-lg-6">
                      <img src={curElem.image} className="card-img-top" />
                      <div className="card-body">
                        <h5 className="card-title">{curElem.name}</h5>

                        <a
                          // href="/episode"
                          className="btn btn-primary"
                          onClick={() => {
                            props.history.push({
                              pathname: "/episode",
                              state: {
                                imgsrc: curElem.image,
                                sname: curElem.name,
                                gender: curElem.gender,
                                species: curElem.species,
                                loc: curElem.location.name,
                                status: curElem.status,
                                episode: curElem.episode,
                              },
                            });
                          }}
                        >
                          Check Details
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Main1);
