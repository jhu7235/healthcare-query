import React from 'react';

const SingleProcedureDash = (props) => {
  const procedure = props.procedure;
  return (
    <div className="row">
      <div className="col s5">
        <p className="collections-title">{procedure.procedure1}</p>
      </div>
      <div className="col s5">
        <p className="collections-title">{procedure.date}</p>
      </div>
      <div className="col s2">
        <p className="collections-title">{procedure.status}</p>
      </div>
    </div>

  );
};

export default SingleProcedureDash;
