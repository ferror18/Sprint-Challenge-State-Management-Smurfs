import React from "react";

export const Smurf = props=>{
    const { age, height, name, id } = props.smurf
    return (
        <div className='smurf'>
            <h1>{name}</h1>
            <h5>{`Age:  ${age}`}</h5>
            <h5>{`Height:  ${height}`}</h5>
            <h5>{`ID:  ${id}`}</h5>
        </div>
    )
}