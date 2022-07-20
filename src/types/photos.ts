export interface PhotoState {
  photos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum PhotoActionsTypes { //создаем перечисление, которое содержит все типы actions
  FETCH_PHOTOS = "FETCH_PHOTOS",
  FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS",
  FETCH_PHOTOS_ERROR = "FETCH_PHOTOS_ERROR",
  FETCH_PHOTOS_PAGE = "FETCH_PHOTOS_PAGE",
}

//у каждого action разный payload, поэтому создаем interface для каждого action
interface FetchPhotosAction {
  type: PhotoActionsTypes.FETCH_PHOTOS;
}
interface FetchPhotosSuccessAction {
  type: PhotoActionsTypes.FETCH_PHOTOS_SUCCESS;
  payload: any[];
}
interface FetchPhotosErrorAction {
  type: PhotoActionsTypes.FETCH_PHOTOS_ERROR;
  payload: string;
}
interface FetchPhotosPageAction {
  type: PhotoActionsTypes.FETCH_PHOTOS_PAGE;
  payload: number;
}

// связываем все Actions в один тип
export type PhotoAction =
  | FetchPhotosAction
  | FetchPhotosSuccessAction
  | FetchPhotosErrorAction
  | FetchPhotosPageAction;
