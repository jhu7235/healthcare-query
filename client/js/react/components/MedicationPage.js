import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
//import { fetchAllergiesThunkCreator } from '../../../redux/actions';
// need medications version

export default class MedicationPage extends React.Component {

  constructor(props) {
    super(props);
    //take out in favor of store
    this.state = ({medicationsOutputArray: []})
  }

  componentDidMount() {
 //   this.props.dispatchFetchAllergiesThunk();
// need to make a medications version
    axios.get('/api/request/patient/1/MedicationOrder')
  .then(response => {
    const medications = response.data.entry;
    return medications.map(medication => {
      const resource = medication.resource;
      const resourceId = resource.id

      const type = resource.resourceType;
      const dateWritten = resource.dateWritten
      const status = resource.status
      const patientName = resource.patient.display;

      const prescriber = resource.prescriber.display;
      const medicationReference = resource.medicationReference.display
      const dosageInstruction = resource.dosageInstruction[0].text;
      const routeOrMethod = resource.dosageInstruction[0].route.text
      const refillsListed = resource.dispenseRequest.numberOfRepeatsAllowed || 'none listed'
      return {type, patientName, dateWritten, status, prescriber, medicationReference, dosageInstruction, routeOrMethod, refillsListed, resourceId};
    })
  })
    .then((medicationArray) => {
      this.setState({medicationsOutputArray: medicationArray})
    })
  }
  render () {
    //need to make this state for now
    const medications = this.state.medicationsOutputArray;

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
                  <a href="#">This is a link</a>
                  <a href="#">This is a link</a>
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
// need to uncomment when store is ready
// const mapStateToProps = ({medications}) => {
//   return {
//     medications,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     dispatchFetchMedicationsThunk: () => (dispatch(fetchMedicationsThunkCreator())),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(MedicationPage);

