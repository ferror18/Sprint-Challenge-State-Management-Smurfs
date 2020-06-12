import React,{ useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions/index.js";
import Axios from "axios";

// console.log(postSmurf());

const initialStateForm = {
    name: '',
    age: '',
    height: '',
}
export const SmurfForm = (props)=>{
    const [ newSmurf, setNewSmurf ] = useState(initialStateForm)
    const onChange = event=>{
        event.preventDefault();
        setNewSmurf({...newSmurf,
            [event.target.name]: event.target.value}
            )
    }
    const onSubmit = event=>{
        event.preventDefault();
        // props.postSmurf();
        Axios.post("http://localhost:3333/smurfs", newSmurf).then(res=>console.log(res)).catch(err=>console.log(err))
        document.getElementById("smurfForm").reset();

    }
    return (
        <form id='smurfForm' onChange={onChange} onSubmit={onSubmit}>
            {console.log(props)}
            <input type="text" placeholder='name' value={newSmurf.name} name='name'/>
            <input type="text"placeholder='age' value={newSmurf.age} name='age'/>
            <input type="text" placeholder='height' value={newSmurf.value} name='height'/>
            <input type='submit' value='submit'/>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        error: state.error,
    };
  };
  
  export default connect(mapStateToProps, { postSmurf })(SmurfForm);