import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProceduresThunkCreator } from '../../../redux/actions';
import SingleProcedureDash from './SingleProcedureDash';

class ProcedureDash extends Component {

  componentDidMount() {
    this.props.dispatchFetchProceduresThunk();
  }

  render() {

    const procedures = this.props.procedures;

    return (


      <div className="col s12 m12 l6">
        <ul id="procedures-collection" className="collection">
          <li className="collection-item avatar">
            <i className="material-icons circle light-blue darken-2">event</i>
            <span className="collection-header"><h3>Procedures</h3></span>
            <a href="#" className="secondary-content"><i className="mdi-action-grade"></i></a>
          </li>
          <li className="collection-item">
            <div className="row">
              <div className="col s5">
                <h5 className="collections-title">Procedure</h5>
              </div>
              <div className="col s4">
                <h5 className="collections-title">Date of procedure</h5>
              </div>
              <div className="col s3">
                <h5 className="collections-title">Status</h5>
              </div>
            </div>
          </li>
          {
            procedures.map(procedure => {
              return <li className="collection-item" key={procedure.resourceId}><SingleProcedureDash procedure={procedure} /></li>;
            })
          }
        </ul>
      </div>

    );
  }

}

const mapStateToProps = ({ procedures }) => {
  return {
    procedures,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchFetchProceduresThunk: () => dispatch(fetchProceduresThunkCreator()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProcedureDash);

