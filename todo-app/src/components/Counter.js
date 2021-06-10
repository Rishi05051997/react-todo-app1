import React, { Fragment, useState } from "react";




const Counter = () => {
    const [counter, setCounter] = useState(0);
    const increament = () => setCounter(counter + 1);

    const decreament = () => {
        if(counter > 0){
            setCounter(counter - 1);
        }
    }
    return (
        <Fragment>
            <h2>Your Current Counter: </h2> 
            <div className="input-group mb-3 w-25">
                <button className='btn btn-primary' onClick={decreament}>-</button>
                <input type="text" className="form-control" value={counter} readOnly />
                <button className='btn btn-primary' onClick={increament}>+</button>
            </div>
        </Fragment>
       
    )
}

export default Counter;