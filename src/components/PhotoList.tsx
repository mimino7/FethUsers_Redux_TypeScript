import React, { FC, useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { getPages } from "../math/mathFunc";

const PhotoList: FC = () => {
  const { photos, loading, error, limit, page } = useTypedSelector(
    (state) => state.photo
  );
console.log(page);

  const { fetchPhotos, setPhotoPage } = useActions();

  const rowPages = getPages(8);

  useEffect(() => {
    fetchPhotos(page, limit);
  }, [page]);

  return (
    <div>
      {photos.map((ph) => (
        <div key={ph.id}>
          <img src={ph.thumbnailUrl} alt="mini" />
          {ph.title}
        </div>
      ))}
      <div className="panag__wrap">
        {rowPages.map((p) => (
          <div
            onClick={() => setPhotoPage(p)}
            className={p === page ? "panag_item active" : "panag_item"}
            key={p}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
