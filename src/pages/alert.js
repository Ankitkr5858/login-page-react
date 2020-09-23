import React , {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Alert} from 'react-bootstrap';

const Toast = ({ alerts }) => {
    useEffect(()=>{
        setShow(true);
    })
  const [show, setShow] = useState(true);
  let body = document.querySelector("body");
  body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div  className= 'container-fluid' key={alert.id}>
        <Alert style = {{width : "60%", margin : "0 auto"}} show = {show} onClose = {() => {setShow(false)}} variant= {`${alert.alertType === `error` ? `danger`: alert.alertType }`} dismissible >
            <p>{alert.msg}</p> 
        </Alert>
      </div>
    ))
  );
};

Toast.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Toast);