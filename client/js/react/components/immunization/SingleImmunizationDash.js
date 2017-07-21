import React from 'react';

const SingleImmunizationDash = (props) => {
  const immunization = props.immunization;
  return (
    <div className="row">
      <div className="col s5">
        <p className="collections-title">{immunization.vaccineCode}</p>
      </div>
      <div className="col s7">
        <p className="collections-title">{immunization.date}</p>
      </div>
    </div>

  );
};

export default SingleImmunizationDash;
