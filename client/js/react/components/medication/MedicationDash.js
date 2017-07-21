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


      <div id="work-collections">
        <div className="row">
          <div className="col s12 m12 l6">
            <ul id="medications-collection" className="collection">
              <li className="collection-item avatar">
                <i className="material-icons circle light-blue darken-2">announcement</i>
                <span className="collection-header"><h3>Medications</h3></span>
                <a href="#" className="secondary-content"><i className="mdi-action-grade"></i></a>
              </li>
              {
                medications.map(medication => {
                  return <li className="collection-item" key={medication.resourceId}><SingleMedicationDash medication={medication} /></li>;
                })
              }
            </ul>
          </div>
        </div>
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

