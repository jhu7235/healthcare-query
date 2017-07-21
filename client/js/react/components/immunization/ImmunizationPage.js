import React from 'react';
import { connect } from 'react-redux';
import { fetchImmunizationsThunkCreator } from '../../../redux/actions';


class ImmunizationPage extends React.Component {

  componentDidMount() {
    this.props.dispatchFetchImmunizationsThunk();
  }

  render () {

    const immunizations = this.props.immunizations;

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

const mapStateToProps = ({immunizations}) => {
  return {
    immunizations,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchFetchImmunizationsThunk: () => (dispatch(fetchImmunizationsThunkCreator())),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImmunizationPage);

