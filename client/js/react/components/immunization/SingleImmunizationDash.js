import React from 'react';

const SingleImmunizationDash = (props) => {
  const immunization = props.immunization;
  return (
    <div className="row">
      <div className="col s5">
        <p className="collections-title">{immunization.vaccineCode}</p>
      </div>
      <div className="col s4">
        <span className="collections-title">{Date(immunization.date)}</span>
      </div>
      <div className="col s3">
        <p className="collections-title">{!immunization.wasNotGiven}</p>
      </div>
    </div>

  );
};

export default SingleImmunizationDash;