import { useState, useEffect } from "react";
import BlogList from './BlogList'

function Home(){
    // useState is a reactive hook for react to re-render
    // const [name, setName] = useState('kris')
    // const [age, setAge] = useState(25)

    const [blogs, setBlogs] = useState(null)
    const handleClick = (name, e) => {
        
        // setBlogs([
        //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
        // ])
        console.log('Hello! ' + name, e.target)
    }
    const handleDelete = (id) => {
        let newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }

    // the second argument is an empty array which means the function inside will only run once after the initial render. It controls when the function inside runs
    useEffect(() => {
        fetch('http://localhost:8000/blogs').then((res) => {return res.json()}).then((data) => setBlogs(data))
    }, [])


    // key property is something that react uses to keep track of each item in the dom, otherwise react can not distinguise items and it must be unique
    return (
        // if add handleClick(), then it will automatically invoke the click without user actually click it.
        // function inside the map called return back function.
        <div className="home">
            <h1>Homepage</h1>
            {blogs && <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete}></BlogList>}
            {blogs &&<BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" handleDelete={handleDelete}></BlogList>}
            <button onClick={(e) => handleClick('kris', e)}>Click Me</button>
        </div>
    );
}

export default Home