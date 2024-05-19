import { useState } from "react";


function Home(){
    // useState is a reactive hook for react to re-render
    const [name, setName] = useState('kris')
    const [age, setAge] = useState(25)

    const handleClick = (name, e) => {
        setName('Yesheng')
        setAge(30)
        console.log('Hello! ' + name, e.target)
    }
    return (
        // if add handleClick(), then it will automatically invoke the click without user actually click it.
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={(e) => {handleClick('kris', e)}}>Click Me</button>
        </div>
    );
}

export default Home