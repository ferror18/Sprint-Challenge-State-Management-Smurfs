import React, { useEffect } from "react";
import { Smurf } from "./Smurf";

import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/index.js";

const SmurfList = (props) => {
  console.log(props);
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div>
      <div className="card-container">
        {props.smurfs.map((smurf) => (
          <Smurf key={smurf.id} smurf={smurf} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);