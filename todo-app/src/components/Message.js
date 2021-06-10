import React, {useState} from "react";

const Message = () => {
    const [message, setMessage] = useState(
        "Please update your browser as soon as possible"
        );
        // const sayHello = (name) => {
        //     console.log(`Hello ${name}`)
        // }

        const [show, setShow] = useState(true);
        const update = () => {
            setMessage('Your browser successfully update');
            setTimeout(()=> {setShow(false);}, 2000)
        }

        if(show){
            return (
                <div className="message">
                    <p>{message}</p>
                    <button onClick={update}>Update Now</button>
                </div>
            )
        } else {
            return <h1> Your Browser is up-to-date</h1>
        }
    
}

export default Message;