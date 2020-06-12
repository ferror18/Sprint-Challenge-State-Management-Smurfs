import React,{ useState, useEffect } from "react";
import { connect } from "react-redux";
import { postSmurf, putSmurf, fetchSmurfs } from "../actions/index.js";
import Axios from "axios";

// console.log(postSmurf());

const initialStateForm = {
    name: '',
    age: '',
    height: '',
}
const initialStateFormUpdate = {
    nameu: '',
    ageu: '',
    heightu: '',
    idu: ''
}
export const SmurfForm = (props)=>{
    //Form - PUT
    const [ newSmurf, setNewSmurf ] = useState(initialStateForm)
    const onChange = event=>{
        event.preventDefault();
        setNewSmurf({...newSmurf,
            [event.target.name]: event.target.value}
            )
    }
    // UPDATE - PUT
    const [ upSmurf, setUpSmurf ] = useState(initialStateFormUpdate)
    const onChangeUp = event=>{
        event.preventDefault();
        setUpSmurf({...upSmurf,
            [event.target.name]: event.target.value}
            )
    }
    const onSubmit = event=>{
        event.preventDefault();
        // props.postSmurf();
        Axios.post("http://localhost:3333/smurfs", newSmurf).then(res=>console.log(res)).catch(err=>console.log(err))
        window.location.reload()

    }
    const onSubmitUp = event=>{
        event.preventDefault();
        const changes = {...upSmurf}
        let changesF = {}
        let changesy = []
        console.log(Object.entries(changes));
        changesy = Object.entries(changes).filter(i=>{return i[1] !== ''})
        changesy.forEach(element => {
           return  changesF[element[0].slice(0, (element[0].length - 1))] = element[1]
        });
        console.log(changesF);
        
        
        Axios.put(`http://localhost:3333/smurfs/${upSmurf.idu}`, changesF).then(res=>console.log(res)).catch(err=>console.log(err))
        window.location.reload()

    }
    // useEffect(() => {
    //       props.fetchSmurfs();
    //     }, [props.smurfs]);
    return (
        <form id='smurfForm'>
            {console.log(props)}
            <input onChange={onChange} type="text" placeholder='name' value={newSmurf.name} name='name'/>
            <input onChange={onChange} type="text"placeholder='age' value={newSmurf.age} name='age'/>
            <input onChange={onChange} type="text" placeholder='height' value={newSmurf.value} name='height'/>
            <input type='submit' value='submit' onClick={onSubmit}/>
            <br/><br/><br/>
            
            <input onChange={onChangeUp} type='text'  placeholder='name' value={upSmurf.name} name='nameu'/>
            <input onChange={onChangeUp} type='text' placeholder='age' value={upSmurf.age} name='ageu'/>
            <input onChange={onChangeUp} type='text'  placeholder='height' value={upSmurf.value} name='heightu'/>
            <input required onChange={onChangeUp} type='text'  placeholder='id' value={upSmurf.value} name='idu'/>
            <input type='button' value='Update' onClick={onSubmitUp}/>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        error: state.error,
    };
  };
  
  export default connect(mapStateToProps, { postSmurf, postSmurf, fetchSmurfs })(SmurfForm);