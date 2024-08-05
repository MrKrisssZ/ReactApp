
import BlogList from './BlogList'
import useFetch from "./useFetch";

function Home(){
    
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')

    const handleClick = (name, e) => {
        
        // setBlogs([
        //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
        // ])
        console.log('Hello! ' + name, e.target)
    }
    // const handleDelete = (id) => {
    //     let newBlogs = blogs.filter((blog) => blog.id !== id)
    //     setBlogs(newBlogs)
    // }



    // key property is something that react uses to keep track of each item in the dom, otherwise react can not distinguise items and it must be unique
    return (
        // if add handleClick(), then it will automatically invoke the click without user actually click it.
        // function inside the map called return back function.

        // blogs && is logical and in javascript. It evaluates left first. we have to add blogs && because we initially set the blogs to null and the blogs is mapping to null.
        <div className="home">
            <h1>Homepage</h1>
            {error && <div>{ error }</div>}
            {isLoading && <div>Loading ......</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs!'></BlogList>}
            {blogs && <button onClick={(e) => handleClick('kris', e)}>Click Me</button>}
            
        </div>
    );
}

export default Home;