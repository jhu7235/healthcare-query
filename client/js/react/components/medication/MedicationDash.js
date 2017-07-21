import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMedicationsThunkCreator } from '../../../redux/actions';
import SingleMedicationDash from './SingleMedicationDash';

class MedicationDash extends Component {

  componentDidMount() {
    this.props.dispatchFetchMedicationsThunk();
  }

  render() {

    const medications = this.props.medications;

    return (


      <div className="col s12 m12 l12">
        <ul id="medications-collection" className="collection">
          <li className="collection-item avatar">
            <i className="material-icons circle light-blue darken-2">reorder</i>
            <span className="collection-header"><h3>Medications</h3></span>
            <a href="#" className="secondary-content"><i className="mdi-action-grade"></i></a>
          </li>
          <li className="collection-item">
            <div className="row">
              <div className="col s2">
                <h5 className="collections-title">Date Written</h5>
              </div>
              <div className="col s4">
                <h5 className="collections-title">Medication</h5>
              </div>
              <div className="col s2">
                <h5 className="collections-title">Prescriber</h5>
              </div>
              <div className="col s2">
                <h5 className="collections-title">Dosage</h5>
              </div>
              <div className="col s2">
                <h5 className="collections-title">Refills?</h5>
              </div>
            </div>
          </li>
          {
            medications.map(medication => {
              return <li className="collection-item" key={medication.resourceId}><SingleMedicationDash medication={medication} /></li>;
            })
          }
        </ul>
      </div>

    );
  }

}

const mapStateToProps = ({ medications }) => {
  return {
    medications,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchFetchMedicationsThunk: () => dispatch(fetchMedicationsThunkCreator()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicationDash);

