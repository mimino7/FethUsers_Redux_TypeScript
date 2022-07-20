import {
  PhotoActionsTypes,
  PhotosAction,
  PhotoState,
} from "../../types/photos";

const initialState: PhotoState = {
  photos: [],
  error: null,
  loading: false,
  page: 1,
  limit: 10,
};

export const photoReducer = (
  state = initialState,
  action: PhotosAction
): PhotoState => {
  switch (action.type) {
    case PhotoActionsTypes.FETCH_PHOTOS:
      return { ...state, loading: true };
    case PhotoActionsTypes.FETCH_PHOTOS_SUCCESS:
      return { ...state, loading: false, photos: action.payload };
    case PhotoActionsTypes.FETCH_PHOTOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case PhotoActionsTypes.FETCH_PHOTOS_PAGE:
      return { ...state, page: action.payload };

    default: {
      return state;
    }
  }
};
