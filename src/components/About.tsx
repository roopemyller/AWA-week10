import {useState, useEffect} from 'react';
import '../styles/about.css'

interface Post {
    id: number;
    title: string;
    body: string;
}

function About() {

    const [item, setItems] = useState<Post[]>([])  

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.log("Error fetching data", error))
    }, [])

    return (
        <div className="about">
            <div className='grid-container'>
                {item.map((item) => (
                    <div key={item.id} className='grid-item'>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About;