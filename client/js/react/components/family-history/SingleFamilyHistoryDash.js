import React from 'react';

const SingleFamilyHistoryDash = (props) => {
  const familyHistoryEntry = props.familyHistoryEntry;
  return (
    <div className="row">
      <div className="col s4">
        <p className="collections-title">{familyHistoryEntry.relativeName}</p>
      </div>
      <div className="col s4">
        <p className="collections-title">{familyHistoryEntry.relationship}</p>
      </div>
      <div className="col s4">
        <p className="collections-title">{familyHistoryEntry.date}</p>
      </div>
    </div>

  );
};

export default SingleFamilyHistoryDash;
