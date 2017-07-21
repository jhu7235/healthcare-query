import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImmunizationsThunkCreator } from '../../../redux/actions';
import SingleImmunizationDash from './SingleImmunizationDash';

class ImmunizationDash extends Component {

  componentDidMount() {
    this.props.dispatchFetchImmunizationsThunk();
  }

  render() {

    const immunizations = this.props.immunizations;

    return (


      <div id="work-collections">
        <div className="row">
          <div className="col s12 m12 l6">
            <ul id="allergies-collection" className="collection">
              <li className="collection-item avatar">
                <i className="material-icons circle light-blue darken-2">announcement</i>
                <span className="collection-header"><h3>Immunizations</h3></span>
                <a href="#" className="secondary-content"><i className="mdi-action-grade"></i></a>
              </li>
              {
                immunizations.map(immunization => {
                  return <li className="collection-item" key={immunization.resourceId}><SingleImmunizationDash immunization={immunization} /></li>;
                })
              }
            </ul>
          </div>
        </div>
      </div>

    );
  }

}

const mapStateToProps = ({ immunizations }) => {
  return {
    immunizations,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchFetchImmunizationsThunk: () => dispatch(fetchImmunizationsThunkCreator()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImmunizationDash);

