import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CommentCreate(props) {
  const [formData, setFormData] = useState({
    content: '',
    rating: 0,
  });
  const { content, rating } = formData;
  const { handleUpdate, comments } = props;
  const { id } = useParams();
  
  useEffect(() => {
    const comment = comments.find((comment) => {
     return comment.id === Number(id)
   })
    setFormData({
      content: comment.content,
      rating: comment.rating,
    });
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
    }}>
      <h3>Update Comment</h3>
      <label>Content:
        <input
          type='text'
          name='content'
          value={content}
          onChange={handleChange}
        />
      </label>
      <label>Rating:
        <input
          type='number'
          name='rating'
          value={rating}
          onChange={handleChange}
        />
      </label>
      
      <br />
      <button>Submit</button>
    </form>
  )
}