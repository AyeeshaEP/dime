import React from 'react';
import { Link } from 'react-router-dom';

export default function Foods(props) {
  const { comments, handleDelete, currentUser } = props;

  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <React.Fragment key={comment.id}>
          <Link to={`/comments/${comment.id}`}><p>{comment.name}</p></Link>
          { comment.user_id === currentUser?.id &&
            <>
              <Link to={`/comments/${comment.id}/edit`}><button>edit</button></Link>
              <button onClick={() => handleDelete(comment.id)}>delete</button>
            </>
          }
        </React.Fragment>
      ))}
      <br />
      <Link to='/foods/new'><button>Create</button></Link>
    </div>
  )
}