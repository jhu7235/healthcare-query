import React from 'react';
const axios = require('axios');

export default class Allergy extends React.Component {

contructor() {
  super()
  this.setState({allergyOutputArray: []})
}
render () {

axios.get('https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/AllergyIntolerance?patient=Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB')
.then(res => {
  let allergyDataArray = res.data.entry
  //console.log(allergyDataArray)
  for (let i = 0; i < allergyDataArray.length; i++) {

    let type = allergyDataArray[i].resource.resourceType
    let patientName = allergyDataArray[i].resource.patient.display
    let substance = allergyDataArray[i].resource.substance.text
    let certainty = allergyDataArray[i].resource.reaction[0].certainty
    let onsetAt =  allergyDataArray[i].resource.reaction[0].onset
    this.setState({allergyOutputArray: [...this.state.allergyOutputArray, {type, patientName, substance, certainty, onsetAt}]})
  }
})
.catch(console.error);

return (
  <div>
  {this.allergyOutputArray.map((allergyObj) => {
      return (<div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Resource Type: {allergyObj.type}</span>
              <p>Patient: {allergyObj.patientName}</p>
              <p>Substance: {allergyObj.substance}</p>
              <p>Certainty: {allergyObj.certainty}</p>
              <p>Onset at: {Date(allergyObj.onsetAt)}</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>)
  })}
  </div>
)

}

}
