import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllergiesThunkCreator } from '../../../redux/actions';
import SingleAllergyDash from './SingleAllergyDash';

class AllergyDash extends Component {

  componentDidMount() {
    this.props.dispatchFetchAllergiesThunk();
  }

  render() {

    const allergies = this.props.allergies;

    return (

      <div className="col s12 m12 l6">
        <ul id="allergies-collection" className="collection">
          <li className="collection-item avatar">
            <i className="material-icons circle light-blue darken-2">announcement</i>
            <span className="collection-header"><h3>Allergies</h3></span>
            <a href="#" className="secondary-content"><i className="mdi-action-grade"></i></a>
          </li>
          <li className="collection-item">
            <div className="row">
              <div className="col s5">
                <h5 className="collections-title">Substance</h5>
              </div>
              <div className="col s4">
                <h5 className="collections-title">Onset</h5>
              </div>
              <div className="col s3">
                <h5 className="collections-title">Certainty</h5>
              </div>
            </div>
          </li>

          {
            allergies.map(allergy => {
              return <li className="collection-item" key={allergy.susbtance}><SingleAllergyDash allergy={allergy} /></li>;
            })
          }
        </ul>
      </div>

    );
  }

}

const mapStateToProps = ({ allergies }) => {
  return {
    allergies,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchFetchAllergiesThunk: () => dispatch(fetchAllergiesThunkCreator()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllergyDash);

