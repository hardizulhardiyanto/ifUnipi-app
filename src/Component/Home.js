import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="container">
          <div className="form-check mb-2 mr-sm-2">
            <label className="form-check-label mr-3" htmlFor="inlineFormCheck">
              <h6>name</h6>
            </label>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              id="inlineFormInputName2"
              placeholder="name"
              name="nameFilter"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
