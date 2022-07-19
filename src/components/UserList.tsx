import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/actions/user";

const UserList: React.FC = () => {
  //const state = useSelector(state => state) // HO!!! useSelector с типами не дружит (не видит state.user), поэтому для типизации сделаем свой HOOCK

  const { error, loading, users } = useTypedSelector((state) => state.user); // используем вместо обычного useSelector свой HOOK -типизированный useTypedSelector

  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  console.log(users);

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
    <div>
      {users.map((user) => (
        <div>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
