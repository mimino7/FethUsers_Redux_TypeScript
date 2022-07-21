import React, { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";


const PhotoList: FC = () => {
  const { photos, loading, error, limit, page } = useTypedSelector(
    (state) => state.photo
  );
  
  return <div>PhotoList</div>;
};

export default PhotoList;
