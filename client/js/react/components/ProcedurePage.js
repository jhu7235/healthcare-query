import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
//import { fetchAllergiesThunkCreator } from '../../../redux/actions';
// need procedures version

export default class ProcedurePage extends React.Component {

  constructor(props) {
    super(props);
    //take out in favor of store
    this.state = ({procedureOutputArray: []})
  }

  componentDidMount() {
 //   this.props.dispatchFetchAllergiesThunk();
// need to make a procedures version
    axios.get('/api/request/patient/1/Procedure')
  .then(response => {
    const procedures = response.data.entry;
    return procedures.map(procedure => {
      const resource = procedure.resource;
      const resourceId = resource.id

      const patientName = resource.subject.display;
      const type = resource.resourceType;

      return {type, patientName, resourceId };
    })
  })
    .then((procedureArray) => {
      this.setState({procedureOutputArray: procedureArray})
    })
  }
  render () {
    //need to make this state for now
    const procedures = this.state.procedureOutputArray;

    return (
      <div>
      {
        procedures.map((procedure) => {
          return (<div key={procedure.resourceId} className="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Resource Type: {procedure.type}</span>
                  <p>Patient: {procedure.patientName}</p>
                  <p>Date: {procedure.date}</p>
                  <p>Vaccine Code: {procedure.vaccineCode2}</p>
                  <p>Vaccine Code (other note): {procedure.vaccineCode}</p>
                  <p>Given?: {!procedure.wasNotGiven}</p>
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
// const mapStateToProps = ({procedures}) => {
//   return {
//     procedures,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     dispatchFetchproceduresThunk: () => (dispatch(fetchproceduresThunkCreator())),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ProcedurePage);

