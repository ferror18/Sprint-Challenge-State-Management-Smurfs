import React,{ useState } from "react";
import axios from "axios";

const initialState = {
    name: '',
    age: '',
    height: '',
}

export const SmurfForm = props=>{
    const [ newSmurf, setNewSmurf ] = useState(initialState)
    const onChange = event=>{
        event.preventDefault();
        setNewSmurf({...newSmurf,
            [event.target.name]: event.target.value}
            )
    }
    const onSubmit = event=>{
        event.preventDefault();
        axios.post("http://localhost:3333/smurfs", newSmurf).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
    }
    return (
        <form className='smurfForm' onChange={onChange} onSubmit={onSubmit}>
            <input type="text" placeholder='name' value={newSmurf.name} name='name'/>
            <input type="text"placeholder='age' value={newSmurf.age} name='age'/>
            <input type="text" placeholder='height' value={newSmurf.value} name='height'/>
            <input type='submit' value='submit'/>
        </form>
    )
}