import React from 'react';

const SingleAllergyDash = (props) => {
  const allergy = props.allergy;
  return (
    <div className="row">
      <div className="col s5">
        <p className="collections-title">{allergy.substance}</p>
      </div>
      <div className="col s4">
        <span className="collections-title">{Date(allergy.onsetAt)}</span>
      </div>
      <div className="col s3">
        <p className="collections-title">{allergy.certainty}</p>
      </div>
    </div>

  );
};

export default SingleAllergyDash;