import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllergiesThunkCreator } from '../../redux/actions'

class AllergyDash extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.dispatchfetchAllergiesThunk();
  }

  render(){
    console.log('allergies', this.props.allergies);
    return (
      <h1>Hello dude</h1>
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

const AllergyDashwithProps = connect(mapStateToProps, mapDispatchToProps)(AllergyDash);
export default AllergyDashwithProps;
