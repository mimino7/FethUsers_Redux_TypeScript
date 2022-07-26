import { FC, useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { getPages } from "../math/mathFunc";

const PhotoList: FC = () => {
  const { photos, loading, error, limit, page } = useTypedSelector(
    (state) => state.photo
  );
  const { users } = useTypedSelector((state) => state.user);

  const { fetchPhotos, setPhotoPage } = useActions();

  const rowPages = getPages(8);

  useEffect(() => {
    fetchPhotos(page, limit);
  }, [page]);

  if (loading) {
    return (
      <div>
        <h2>Загрузка.......</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h2>Ошибка загрузки.....</h2>
      </div>
    );
  }

  return (
    <div className="photo__wrap">
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

      <div className="card__wrap">
        {photos.map((ph, i) => (
          <div key={ph.id} className="card__item">
            <div className="card__title">{users && users[i].username}</div>
            <div className="card__img">
              <img src={ph.thumbnailUrl} alt="mini" />
            </div>
            <div className="card__name">{ph.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
