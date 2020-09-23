import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadEmployee } from "../redux/actions/auth";
import Loading from "./animations/loading";
import logo from "../assets/crown.svg";


class Employee extends React.Component {
  
  componentDidMount() {
    this.props.loadEmployee();
  }
  
  render() {
    return (
        this.props.auth.loading ? (
            <Loading/>
        ):(
            <div style = {{width : "100%", display: "flex", flexDirection: "column"}}>
                <div style = {{width: "80%", margin: "0 auto",
                display : "flex", flexDirection: "row", 
                justifyContent: "space-between"}}>
                <div onClick = {()=>{
                     window.location.href = "/";
                }} style = {{margin: 50, cursor: "pointer", display: "flex", 
                flexDirection: "column"}}className='mb-4'>
                    <h3>Logout</h3>
                  </div>
                    <h2 style = {{margin: 50, marginRight: 0}}>List of Employees</h2>
                </div>
                <table style = {{width: "80%", margin: "0 auto"}} class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    {
        this.props.auth.employees ?(
            this.props.auth.employees.map(item=>(
                <tr key = {item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.gender}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneNo}</td>
                </tr>
            ))
        ): null
    }
  </tbody>
</table>
            </div>
        )
    );
  }
}
Employee.propTypes = {
  loadEmployee : PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loadEmployee })(Employee);