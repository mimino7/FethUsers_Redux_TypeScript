import React, { FC, useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const PhotoList: FC = () => {
  const { photos, loading, error, limit, page } = useTypedSelector(
    (state) => state.photo
  );

  const { fetchPhotos } = useActions();

  useEffect(() => {
    fetchPhotos();
  }, []);

  console.log(photos);

  return (
    <div>
      {photos.map((ph) => (
        <div key={ph.id}>
          <img src={ph.thumbnailUrl} alt="mini" />
          {ph.title}
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
