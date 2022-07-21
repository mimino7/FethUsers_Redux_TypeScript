import { PhotoActionsTypes, PhotosAction } from "../../types/photos";
import { Dispatch } from "react";
import axios from "axios";

export const fetchPhotos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<PhotosAction>) => {
    try {
      dispatch({ type: PhotoActionsTypes.FETCH_PHOTOS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos",
        { params: { _page: page, _limit: limit } }
      );
      dispatch({
        type: PhotoActionsTypes.FETCH_PHOTOS_SUCCESS,
        payload: response.data,
      });
    } catch {
      dispatch({
        type: PhotoActionsTypes.FETCH_PHOTOS_ERROR,
        payload: "Ошибка загрузки.....",
      });
    }
  };
};

export function setPhotoPage(page: number): PhotosAction {
  return { type: PhotoActionsTypes.FETCH_PHOTOS_PAGE, payload: page };
}
