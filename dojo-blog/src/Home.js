function Home(){

    const handleClick = (name, e) => {
        console.log('Hello! ' + name, e.target)
    }
    return (
        // if add handleClick(), then it will automatically invoke the click without user actually click it.
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={(e) => {handleClick('kris', e)}}>Click Me</button>
        </div>
    );
}

export default Home