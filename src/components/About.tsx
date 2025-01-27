import {useState, useEffect} from 'react';
import '../styles/about.css'

interface Post {
    id: number;
    title: string;
    body: string;
}

function About() {

    const [item, setItems] = useState<Post[]>([])  
    const [visibleItems, setVisivbleItems] = useState<number>(12)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.log("Error fetching data", error))
    }, [])

    const showMore = () => {
        setVisivbleItems(prevVisibleItems => prevVisibleItems + 12)
    }

    return (
        <div className="about">
            <div className='grid-container'>
                {item.slice(0, visibleItems).map(item => (
                    <div key={item.id} className='grid-item'>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>
                ))}
                
            </div>
            {visibleItems < item.length && (
                <button className="show-more-button" onClick={showMore}>Show More</button>
            )}
        </div>
    )
}

export default About;