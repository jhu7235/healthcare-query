import React from 'react';

const SingleMedicationDash = (props) => {
  const medication = props.medication;
  return (
    <div className="row">
      <div className="col s5">
        <p className="collections-title">{medication.dateWritten}</p>
      </div>
      <div className="col s4">
        <span className="collections-title">{medication.medicationReference}</span>
      </div>
      <div className="col s3">
        <p className="collections-title">{medication.prescriber}</p>
      </div>
      <div className="col s3">
        <p className="collections-title">{medication.dosageInstruction}</p>
      </div>
      <div className="col s3">
        <p className="collections-title">{medication.refillsListed}</p>
      </div>
    </div>

  );
};

export default SingleMedicationDash;