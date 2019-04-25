import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Tables.css';
import * as actions from '../../store/actions/index';

class Tables extends Component {
    state = {
        sourceTables: {
              first_name: '',
              last_name: '',
              date_of_birth: '',
              joining_date: '',
              qualification: '',
              role: '',
            },
    }
    
    onSubmitTable = (e) => {
        e.preventDefault();

        const tableData = {
            first_name: this.state.sourceTables.first_name,
            last_name: this.state.sourceTables.last_name,
            date_of_birth: this.state.sourceTables.date_of_birth,
            joining_date: this.state.sourceTables.joining_date,
            qualification: this.state.sourceTables.qualification,
            role: this.state.sourceTables.role,
        }

        this.props.onTables(tableData);
    }

    onChangeTable = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        // console.log(this.state);  
    }

  render() {
    return (
      <div className={classes.Tables}>
        <div>
            <h3>Table</h3>
            <form onSubmit={this.onSubmitTable}>
                <label>first_name</label>
                <input type="text" name="first_name" placeholder="first_name" onChange={this.onChangeTable}  />
                <label>last_name</label>
                <input type="text" name="last_name" placeholder="last_name" onChange={this.onChangeTable} />
                <label>date_of_birth</label>
                <input type="date" name="date_of_birth" placeholder="date of birth" onChange={this.onChangeTable} />
                <label>joining_date</label>
                <input type="date" name="joining_date" placeholder="joining date" onChange={this.onChangeTable} />
                <label>qualification</label>
                <input type="text" name="qualification" placeholder="qualification" onChange={this.onChangeTable} />
                <label>Role</label>
                <input type="text" name="role" placeholder="role" onChange={this.onChangeTable} />
                <button type="submit">Submit</button>
            </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      loading: state.tables.loading,
      token: state.auth.token,
      userId: state.auth.userId,
      email: state.auth.email
  }
};

const mapDispatchToProps = dispatch => {
  return {
      onTables: (tableData, token) => dispatch(actions.tables(tableData, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tables); 