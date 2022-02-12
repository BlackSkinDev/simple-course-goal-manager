import React from 'react';
import ReactDOM from 'react-dom';

import classes from './ErrorModal.module.css';

const Backdrop = props => {
    return  <div className={classes.backdrop} onClick={props.onClick}></div>
}

const Modal = props => {
    return ( <div className={classes.modal}>
        <div className={classes.card}>
        <div className={classes.header}>
            <h2>{props.title}</h2>
        </div>
        <div className={classes.content}>
            <p className={classes.text}>{props.message}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={props.onClick}>Okay</button>
        </div>
        </div>
    </div>)
}


const ErrorModal =props => {
  return (
    <React.Fragment>
    {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>,document.getElementById('backdrop-root'))} 
    {ReactDOM.createPortal(<Modal onClick={props.onClick} title={props.title} message={props.message} />,document.getElementById('modal-root'))}     
    </React.Fragment>
  );
};

export default ErrorModal
