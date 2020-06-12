import React from "react";

export const Smurf = props=>{
    const { age, height, name } = props.smurf
    return (
        <div className='smurf'>
            <h1>{name}</h1>
            <h5>{`Age:  ${age}`}</h5>
            <h5>{`Height:  ${height}`}</h5>
        </div>
    )
}