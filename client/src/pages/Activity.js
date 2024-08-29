import React, { Fragment, useEffect, useState } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import Posts from '../components/Posts';
import SubsidiaryHeader from '../components/SubsidiaryHeader';

function Activity({setAuth}) {
    const { id } = useParams();
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate()

    async function getPosts() {  
        try {
            const response = await fetch(`http://localhost:5000/dashboard/activity/${id}`, {
                method: "POST",
                headers: { token: localStorage.token }
            });
            const parseResponse = await response.json();
            setPosts(parseResponse);
        } catch (error) {
            console.error(error.message);
        }
    }

    const refreshPosts = () => {
        getPosts(); 
    };

    useEffect(() => {
        getPosts();
    }, []);

    function handleCreate(){
        navigate(`/create/${id}`)
    }

    return (
        <Fragment>
            <div className='container'>
                <SubsidiaryHeader setAuth={setAuth}/>
                <h3 className='my-3'>My posts:</h3>
                <button className='btn btn-success my-2' onClick={handleCreate}>Create Post</button>
                {posts.map((post) => (
                    <Posts key={post.id} 
                        id={post.id}
                        user_id={id}
                        refreshPosts={refreshPosts}
                        topic={post.topic}
                        title={post.title} 
                        post_date={post.post_date}
                        post_content={post.post_content}
                    />
                ))}
            </div>
        </Fragment>
    );
}

export default Activity;
