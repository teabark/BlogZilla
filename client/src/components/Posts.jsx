import React, { Fragment } from 'react';
import { useNavigate} from 'react-router-dom';

function Posts(props) {

    const user_id = props.user_id;
    const navigate = useNavigate();

    const truncateText = (text, length) => {
        if (text.length <= length) return text;
        return text.substring(0, length) + "...";
    };

    const handleReadMore = () => {
        navigate(`/read/${props.id}`); 
    };

    const handleEdit = () => {
        navigate(`/edit/${props.id}`, { state: { user_id } })
    }

    async function handleDelete() {
        try {
            const response = await fetch(`http://localhost:5000/dashboard/delete/${props.id}`, {
                method: "DELETE",
                headers: {
                    token: localStorage.token,
                    "Content-Type": "application/json",
                },
            });
    
            if (!response.ok) {
                throw new Error("Failed to delete the post");
            }
    
            props.refreshPosts();
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    }
    

    return (
        <Fragment>
            <div className="row g-0 border rounded overflow-hidden mb-4 shadow-sm h-md-250">
                <div className="col p-4 py-2 d-flex flex-column position-static">
                    <strong className="d-inline-block m-2 text-primary-emphasis"><span style={{textTransform: "capitalize"}}>{props.topic}</span></strong>
                    <h3 className="mb-0 mt-2">{truncateText(props.title, 50)}</h3>
                    <div className="mb-1 text-body-secondary">{props.post_date}</div>
                    <p className="card-text mb-2">
                        {truncateText(props.post_content, 100)}
                    </p>
                    <div className='d-flex my-3'>
                        <button className='btn btn-outline-success' onClick={handleReadMore}>View</button>
                        <button className='btn btn-warning mx-2' onClick={handleEdit}>Edit</button>
                        <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Posts;
