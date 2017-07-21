import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchMedicationsThunkCreator } from '../../redux/actions';


class MedicationPage extends React.Component {

  componentDidMount() {
    this.props.dispatchFetchMedicationsThunk();
  }
  
  render () {

    const medications = this.props.medications;

    return (
      <div>
      {
        medications.map((medication) => {
          return (<div key={medication.resourceId} className="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Resource Type: {medication.type}</span>
                  <p>Patient: {medication.patientName}</p>
                  <p>Date Written: {medication.dateWritten}</p>
                  <p>Status: {medication.status}</p>
                  <p>Medication: {medication.medicationReference}</p>
                  <p>Prescriber: {medication.prescriber}</p>
                  <p>Dosage Instructions: {medication.dosageInstruction}</p>
                  <p>Method: {medication.routeOrMethod}</p>
                  <p>Refills?: {medication.refillsListed}</p>
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

const mapStateToProps = ({medications}) => {
  return {
    medications,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchFetchMedicationsThunk: () => (dispatch(fetchMedicationsThunkCreator())),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicationPage);

