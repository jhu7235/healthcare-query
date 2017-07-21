import React from 'react';

const SingleFamilyHistoryDash = (props) => {
  const familyHistoryEntry = props.familyHistoryEntry;
  return (
    <div className="row">
      <div className="col s3">
        <p className="collections-title">{familyHistoryEntry.relativeName}</p>
      </div>
      <div className="col s3">
        <p className="collections-title">{familyHistoryEntry.relationship}</p>
      </div>
      <div className="col s6">
        <p className="collections-title">{Date(familyHistoryEntry.date)}</p>
      </div>
    </div>

  );
};

export default SingleFamilyHistoryDash;
