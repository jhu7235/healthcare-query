import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
//import { fetchAllergiesThunkCreator } from '../../../redux/actions';
// need immunizations version

export default class ImmunizationPage extends React.Component {

  constructor(props) {
    super(props);
    //take out in favor of store
    this.state = ({immunizationOutputArray: []})
  }

  componentDidMount() {
 //   this.props.dispatchFetchAllergiesThunk();
// need to make a immunizations version
    axios.get('/api/request/patient/1/Immunization')
  .then(response => {
    const immunizations = response.data.entry;
    return immunizations.map(immunization => {
      const resource = immunization.resource;
      const resourceId = resource.id

      const type = resource.resourceType;
      const date = Date(resource.date)
      const wasNotGiven = resource.wasNotGiven
      const patientName = resource.patient.display;

      const vaccineCode = resource.vaccineCode.text;
      const vaccinceCode2 = resource.vaccineCode.coding[0].display
      return {type, patientName, resourceId, date, wasNotGiven, vaccineCode, vaccinceCode2 };
    })
  })
    .then((immunizationArray) => {
      this.setState({immunizationOutputArray: immunizationArray})
    })
  }
  render () {
    //need to make this state for now
    const immunizations = this.state.immunizationOutputArray;

    return (
      <div>
      {
        immunizations.map((immunization) => {
          return (<div key={immunization.resourceId} className="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Resource Type: {immunization.type}</span>
                  <p>Patient: {immunization.patientName}</p>
                  <p>Date: {immunization.date}</p>
                  <p>Vaccine Code: {immunization.vaccineCode2}</p>
                  <p>Vaccine Code (other note): {immunization.vaccineCode}</p>
                  <p>Given?: {!immunization.wasNotGiven}</p>
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
// need to uncomment when store is ready
// const mapStateToProps = ({immunizations}) => {
//   return {
//     immunizations,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     dispatchFetchimmunizationsThunk: () => (dispatch(fetchimmunizationsThunkCreator())),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ImmunizationPage);

