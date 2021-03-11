import { useState, useEffect } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import { getAllSeries } from "../services/series";
import {
  getAllComments,
  postComment,
  putComment,
  destroyComment,
} from "../services/comments";
import Series from "../screens/Series";
import Comments from "../screens/Comments";
import Home from "../screens/Home";
import SeriesSelect from "../screens/SeriesSelect";
import CommentsCreate from "../screens/CommentsCreate";
import CommentsUpdate from "../screens/CommentsUpdate";

export default function MainContainer(props) {
  const [comments, setComments] = useState([]);
  const [series, setSeries] = useState([]);
  const [seriesOneId, setSeriesOneId] = useState(null);
  const [refreshComments, setRefreshComments] = useState(false);
  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchComments = async () => {
      const commentsList = await getAllComments();
      setComments(commentsList);
    };
    fetchComments();
  }, []);

  useEffect(() => {
    const fetchSeries = async () => {
      const seriesList = await getAllSeries();
      setSeries(seriesList);
    };
    fetchSeries();
  }, []);

  const handleCreate = async (formData, seriesId) => {
    formData.series_id = seriesId;
    formData.user_id = currentUser.id;
    const newComment = await postComment(formData);
    setComments((prevState) => [...prevState, newComment]);
    history.push(`/series-select/${seriesId}`);
  };

  const handleDelete = async (id) => {
    await destroyComment(id);
    setComments((prevState) =>
      prevState.filter((comment) => comment.id !== id)
    );
    setRefreshComments(prev => !prev)
  };

  const handleUpdate = async (id, formData) => {
    formData.series_id = seriesOneId;
    formData.user_id = currentUser.id;
    const updatedComment = await putComment(id, formData);
    setComments((prevState) =>
      prevState.map((comment) => {
        return comment.id === Number(id) ? updatedComment : comment;
      })
    );
    history.push(`/series-select/${seriesOneId}`);
  };

  const getPlatform = (platform) => {
    if (platform) {
      return series.filter((serie) => {
        return serie.platform.toLowerCase() === platform.toLowerCase();
      });
    } else {
      return series;
    }
  };

  return (
    <Switch>
      {/* {!currentUser && <Redirect to="/" />} */}
      {/* <Route path='/comments/new'>
        <CommentsCreate handleCreate={handleCreate} />
      </Route>
      <Route path='/comments/:id/edit'>
        <CommentEdit
          comments={comments}
          handleUpdate={handleUpdate}
        /> */}
      {/* </Route> */}
      {/* <Route path='/comments/:id'>
        <CommentDetail comments={comments} />
      </Route> */}
      <Route path="/series/:name">
        <Series
          series={series}
          getPlatform={getPlatform}
          currentUser={currentUser}
        />
      </Route>
      <Route path="/comments">
        <Comments comments={comments} />
      </Route>
      <Route path="/series-select/:id">
        <SeriesSelect setSeriesOneId={setSeriesOneId} handleDelete={handleDelete} refreshComments={refreshComments}/>
      </Route>
      <Route path="/create-comment/:id">
        <CommentsCreate handleCreate={handleCreate} />
      </Route>
      <Route path={`/edit-comment/:id`}>
        <CommentsUpdate handleUpdate={handleUpdate} comments={comments} />
      </Route>
      <Route path="/">
        <Home series={series} getPlatform={getPlatform} />
      </Route>
    </Switch>
  );
}
