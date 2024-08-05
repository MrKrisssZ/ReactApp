import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [pending, setPending] = useState(false);
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}

        setPending(true)
        // headers means that the content type we need to send to the server
        // json stringify means that we pass an object and turn it into json string
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            setPending(false)
            history.push('/')
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}> 
                <label>Blog Title: </label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}></input>

                <label>Blog Body: </label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

                <label>Blog Author: </label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value='mario'>mario</option>
                    <option value='yoshi'>yoshi</option>
                </select>
                {!pending && <button>Add Blog</button>}
                {pending && <button disabled>Adding Blog.....</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}

export default Create;