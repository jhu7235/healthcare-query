import React from 'react';
import { connect } from 'react-redux';
import { fetchProceduresThunkCreator } from '../../../redux/actions';


class ProcedurePage extends React.Component {

  componentDidMount() {
    this.props.dispatchFetchProceduresThunk();
  }
  render () {
    //need to make this state for now
    const procedures = this.props.procedures;

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
                  <p>Status: {procedure.status}</p>
                  <p>Procedure description: {procedure.procedure1}</p>
                  <p>Alternative description: {procedure.procedure2}</p>
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

const mapStateToProps = ({procedures}) => {
  return {
    procedures,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchFetchProceduresThunk: () => (dispatch(fetchProceduresThunkCreator())),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProcedurePage);

