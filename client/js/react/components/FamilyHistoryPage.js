import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
//import { fetchAllergiesThunkCreator } from '../../../redux/actions';
// need familyHistory version

export default class FamilyHistoryPage extends React.Component {

  constructor(props) {
    super(props);
    //take out in favor of store
    this.state = ({familyHistoryOutputArray: []});
  }

  componentDidMount() {
 //   this.props.dispatchFetchAllergiesThunk();
// need to make a familyHistory version
    axios.get('/api/request/patient/1/FamilyMemberHistory')
  .then(response => {
    const familyHistory = response.data.entry;
    return familyHistory.map((familyHistoryEntry, index) => {
      const resource = familyHistoryEntry.resource;
      const resourceId = index
      const type = resource.resourceType;
      const date = Date(resource.date)
      const patientName = resource.patient.display;

      const relativeName = resource.name
      const relationship = resource.relationship.text;

      let conditionsArray = []

      if (resource.condition){
      for (let i = 0; i < resource.condition.length; i++) {
        conditionsArray.push(resource.condition[i].code.text)
      }
      }

      return {type, patientName, resourceId, date, relativeName, relationship, conditionsArray };
    })
  })
    .then((familyHistoryArray) => {
      this.setState({familyHistoryOutputArray: familyHistoryArray})
    })
  }
  render () {
    //need to make this state for now
    const familyHistory = this.state.familyHistoryOutputArray;

    return (
      <div>
      {
        familyHistory.map((familyHistoryEntry) => {
          return (<div key={familyHistoryEntry.resourceId} className="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Resource Type: {familyHistoryEntry.type}</span>
                  <p>Patient: {familyHistoryEntry.patientName}</p>
                  <p>Date: {familyHistoryEntry.date}</p>
                  <p>Relative Name: {familyHistoryEntry.relativeName}</p>
                  <p>Relation: {familyHistoryEntry.relationship}</p>
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
// const mapStateToProps = ({familyHistory}) => {
//   return {
//     familyHistory,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     dispatchFetchfamilyHistoryThunk: () => (dispatch(fetchfamilyHistoryThunkCreator())),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(FamilyHistoryPage);

