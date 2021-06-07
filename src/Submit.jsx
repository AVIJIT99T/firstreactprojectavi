import React, { useState } from "react";
import "./Submit.css";

const Submit = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (data.email && data.password) {
      alert(`"Login Successful"`);
    } else if (data.email) {
      alert(`"password is required"`);
    } else if (data.password) {
      alert(`"email is required"`);
    } else {
      alert(`"email & password is compulsory"`);
    }
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light navbar_submit">
        <div class="container-fluid">
          <h3 class="navbar-brand text-center">LOGIN</h3>
        </div>
      </nav>

      <div className="container mt-5 submit_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email
                </label>
                <br />
                <input
                  type="email"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Password
                </label>
                <br />
                <input
                  type="password"
                  id="exampleFormControlInput1"
                  name="password"
                  value={data.password}
                  onChange={InputEvent}
                  placeholder="Enter your password here"
                />
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Submit;
