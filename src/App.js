import React from "react";
import { useDispatch, useSelector} from 'react-redux'
import { getJphUsersRequestAction, jphGetUsers } from './jphSlice/jphSlice';

const App = () => {

  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(state => state.jphSlice);
  
  const onClickFunc = (data) => {
    dispatch(jphGetUsers())
  }

  return (
    <div>
      <div onClick={()=>onClickFunc('123')}>
        Click Me
      </div>
      {/* {(loading) ? <div>Loading...</div> : null} */}
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data && <div>{data.map((user) => {
        return(
          <div key={user.id}>
            {user.name}
          </div>
        )
      })}</div>}
    </div>
  )
  
};

export default App;
