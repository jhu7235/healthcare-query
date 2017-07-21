import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFamilyHistoryThunkCreator } from '../../../redux/actions';
import SingleFamilyHistoryDash from './SingleFamilyHistoryDash';

class FamilyHistoryDash extends Component {

  componentDidMount() {
    this.props.dispatchFetchFamilyHistoryThunk();
  }

  render() {

    const familyHistory = this.props.familyHistory;

    return (

      <div className="col s12 m12 l6">
        <ul id="family-history-collection" className="collection">
          <li className="collection-item avatar">
            <i className="material-icons circle light-blue darken-2">accessibility</i>
            <span className="collection-header"><h3>Family History</h3></span>
            <a href="#" className="secondary-content"><i className="mdi-action-grade"></i></a>
          </li>
          <li className="collection-item">
            <div className="row">
              <div className="col s3">
                <h5 className="collections-title">Name</h5>
              </div>
              <div className="col s3">
                <h5 className="collections-title">Relationship</h5>
              </div>
              <div className="col s6">
                <h5 className="collections-title">Date</h5>
              </div>
            </div>
          </li>


          {
            familyHistory.map(familyHistoryEntry => {
              return <li className="collection-item" key={familyHistoryEntry.resourceId}><SingleFamilyHistoryDash familyHistoryEntry={familyHistoryEntry} /></li>;
            })
          }
        </ul>
      </div>

    );
  }

}

const mapStateToProps = ({ familyHistory }) => {
  return {
    familyHistory,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchFetchFamilyHistoryThunk: () => dispatch(fetchFamilyHistoryThunkCreator()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FamilyHistoryDash);

