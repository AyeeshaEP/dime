import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { getAllSeries } from '../services/series';
import { getAllComments } from '../services/comments';
import Series from '../screens/Series';
import Comments from '../screens/Comments';

export default function MainContainer(props) {
  const [comments, setComments] = useState([]);
  const [series, setSeries] = useState([]);
  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchComments = async () => {
      const commentsList = await getAllComments();
      setComments(seriesComments);
    }
    fetchComments();
  }, [])

  useEffect(() => {
    const fetchSeries = async () => {
      const seriesList = await getAllSeries();
      setSeries(seriesList);
    }
    fetchComments();
  }, [])
  const handleCreate = async (formData) => {
    const newComment = await postComment(formData);
    setComment(prevState => [...prevState, newComment]);
    history.push('/comments');
  }

  const handleDelete = async (id) => {
    await destroyComment(id);
    setComment(prevState => prevState.filter((comment) => comment.id !== id))
  }

  const handleUpdate = async (id, formData) => {
    const updatedComment = await putComment(id, formData);
    setComment(prevState => prevState.map((comment) => {
      return comment.id === Number(id) ? updatedCooment : comment
    }));
    history.push('/comments');
  }

  return (
    <Switch>
      {
        !currentUser &&
        <Redirect to='/' />
      }
      <Route path='/comments/new'>
        <CommentCreate handleCreate={handleCreate} />
      </Route>
      <Route path='/comments/:id/edit'>
        <CommentEdit
          comments={comments}
          handleUpdate={handleUpdate}
        />
      </Route>
      <Route path='/comments/:id'>
        <CommentDetail comments={comments} />
      </Route>
      <Route path='/comments'>
        <Foods
          commentss={comments}
          currentUser={currentUser}
          handleDelete={handleDelete}
        />
      </Route>
      <Route path='/comments'>
        <Flavors
          flavors={comments}
        />
      </Route>
    </Switch>
  )
}