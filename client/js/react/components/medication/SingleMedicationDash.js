import React from 'react';

const SingleMedicationDash = (props) => {
  const medication = props.medication;
  return (
    <div className="row">
      <div className="col s2">
        <p className="collections-title">{medication.dateWritten}</p>
      </div>
      <div className="col s4">
        <p className="collections-title">{medication.medicationReference}</p>
      </div>
      <div className="col s2">
        <p className="collections-title">{medication.prescriber}</p>
      </div>
      <div className="col s2">
        <p className="collections-title">{medication.dosageInstruction}</p>
      </div>
      <div className="col s2">
        <p className="collections-title">{medication.refillsListed}</p>
      </div>
    </div>

  );
};

export default SingleMedicationDash;