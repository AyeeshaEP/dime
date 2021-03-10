import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getOneSeries } from "../services/series";

export default function SeriesSelect({setSeriesOneId}) {
  const [currentSeries, setCurrentSeries] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSeries = async () => {
      const seriesData = await getOneSeries(id);
      setCurrentSeries(seriesData);
      setSeriesOneId(seriesData.id);
    };
    fetchSeries();
  }, []);

  return (
    <div>
      <h2> {currentSeries?.title} </h2>
      {currentSeries?.comments.map((comment) => (
        <div>
          <p>{comment.content}</p>
          <p>{comment.user}</p>
          <Link to = {`/edit-comment/${comment.id}`}>
          <button>edit</button>
          </Link>
          <button>delete</button>
        </div>
      ))}
      <Link to = {`/create-comment/${id}`}>
        <button>create</button>
        </Link>
    </div>
  );
}
