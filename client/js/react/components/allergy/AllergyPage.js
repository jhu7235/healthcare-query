import React from 'react';
import { connect } from 'react-redux';
import { fetchAllergiesThunkCreator } from '../../../redux/actions';
import { Row, Col, ProgressBar } from 'react-materialize';

class AllergyPage extends React.Component {

  componentDidMount() {
    this.props.dispatchFetchAllergiesThunk();

  }
  render () {

    const allergies = this.props.allergies;

    return (
      <div>
      <Row>
        <Col s={12}>
          <ProgressBar progress={70} />
        </Col>
      </Row>
      {
        allergies.map((allergy) => {
          return (<div key={allergy.substance} className="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Resource Type: {allergy.type}</span>
                  <p>Patient: {allergy.patientName}</p>
                  <p>Substance: {allergy.substance}</p>
                  <p>Certainty: {allergy.certainty}</p>
                  <p>Onset at: {allergy.onsetAt}</p>
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

const mapStateToProps = ({allergies}) => {
  return {
    allergies,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchFetchAllergiesThunk: () => (dispatch(fetchAllergiesThunkCreator())),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllergyPage);

