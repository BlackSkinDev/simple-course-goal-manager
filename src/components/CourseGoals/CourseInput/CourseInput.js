import React, { useState,useEffect,useRef } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';
import ErrorModal from './ErrorModal';

const CourseInput = props => {
  //const [enteredValue, setEnteredValue] = useState('');
  const [error, setError] = useState(null);

  const goalInputRef = useRef();

  // const goalInputChangeHandler = event => {
  //   setEnteredValue(event.target.value);
  // };

 const onConfirmHandler = ()=>{
   setError(null);
 }

  const formSubmitHandler = event  => {
    event.preventDefault();
    const enteredGoal = goalInputRef.current.value
    console.log(enteredGoal);
    if(enteredGoal.trim()===''){
      setError({title: 'Error Encountered',message: 'Please Enter Goal'});
      return;
    }
    props.onAddGoal(enteredGoal);
   goalInputRef.current.value=''
  };

  return (
    <>
    {error && <ErrorModal title={error.title} message={error.message} onClick={onConfirmHandler}/>}
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']}`}>
        <label>Course Goal</label>
        <input ref={goalInputRef} type="text"
        //  onChange={goalInputChangeHandler} value={enteredValue}
          />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
    </>
  );
};

export default CourseInput;
