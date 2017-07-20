import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllergiesThunkCreator } from '../../../redux/actions';
import SingleAllergyDash from './SingleAllergyDash';

class AllergyDash extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatchfetchAllergiesThunk();
  }

  render() {

    const allergies = this.props.allergies;

    return (


      <div id="work-collections">
        <div className="row">
          <div className="col s12 m12 l6">
            <ul id="allergies-collection" className="collection">
              <li className="collection-item avatar">
                <i className="material-icons circle light-blue darken-2">announcement</i>
                <span className="collection-header"><h3>Allergies</h3></span>
                <a href="#" className="secondary-content"><i className="mdi-action-grade"></i></a>
              </li>
              {
                allergies.map((allergy, index) => {
                  return <li className="collection-item" key={index}><SingleAllergyDash allergy={allergy} /></li>;
                })
              }
            </ul>
          </div>
        </div>
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
    dispatchfetchAllergiesThunk: () => dispatch(fetchAllergiesThunkCreator()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllergyDash);

