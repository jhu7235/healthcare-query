import React from 'react';

const SingleImmunizationDash = (props) => {
  const immunization = props.immunization;
  return (
    <div className="row">
      <div className="col s1"></div>
      <div className="col s5">
        <p className="collections-title">{immunization.vaccineCode}</p>
      </div>
      <div className="col s5">
        <p className="collections-title">{immunization.date}</p>
      </div>
      <div className="col s1"></div> 
    </div>

  );
};

export default SingleImmunizationDash;
