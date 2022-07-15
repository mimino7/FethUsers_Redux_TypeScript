import React from 'react'
import { useSelector } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'

const UserList: React.FC = () => {

//const state = useSelector(state => state) // HO!!! useSelector с типами не дружит (не видит state.user), поэтому для типизации сделаем свой HOOCK

const state = useTypedSelector(state => state.user) // используем вместо обычного useSelector свой HOOK -типизированный useTypedSelector

console.log(state);

  return (
        
    <div>UserList</div>
  )
}

export default UserList