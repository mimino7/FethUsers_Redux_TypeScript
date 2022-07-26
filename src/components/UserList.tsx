import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: React.FC = () => {
  //const state = useSelector(state => state) // HO!!! useSelector с типами не дружит (не видит state.user), поэтому для типизации сделаем свой HOOCK

  const { error, loading, users } = useTypedSelector((state) => state.user); // используем вместо обычного useSelector свой HOOK -типизированный useTypedSelector

  const { fetchUsers } = useActions(); // используем свой hook для упрощения кода

  useEffect(() => {
    fetchUsers();
  }, []);

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
    <div className="user__wrap">
      {users &&
        users.map((user) => (
          <div className="user__item" key={user.id}>
            {user.username}
          </div>
        ))}
    </div>
  );
};

export default UserList;
