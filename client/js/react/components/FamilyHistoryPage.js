import React from 'react';
import { connect } from 'react-redux';
import { fetchFamilyHistoryThunkCreator } from '../../redux/actions';


class FamilyHistoryPage extends React.Component {

  componentDidMount() {
    this.props.dispatchFetchFamilyHistoryThunk();
  }
  render () {

    const familyHistory = this.props.familyHistory;

    return (
      <div>
      {
        familyHistory.map((familyHistoryEntry) => {
          return (<div key={familyHistoryEntry.resourceId} className="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Resource Type: {familyHistoryEntry.type}</span>
                  <p>Patient: {familyHistoryEntry.patientName}</p>
                  <p>Date: {familyHistoryEntry.date}</p>
                  <p>Relative Name: {familyHistoryEntry.relativeName}</p>
                  <p>Relation: {familyHistoryEntry.relationship}</p>
                </div>
                <div className="card-action">
                  <a href="#">Mark as invalid</a>
                  <a href="#">Update (will keep original value as well)</a>
                </div>
              </div>
            </div>
          </div>);
        })
      }
      </div>
    );

  }

}

const mapStateToProps = ({familyHistory}) => {
  return {
    familyHistory,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchFetchFamilyHistoryThunk: () => (dispatch(fetchFamilyHistoryThunkCreator())),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FamilyHistoryPage);
