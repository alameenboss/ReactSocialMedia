import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login }  from '../../redux/actions';
function Login() {
  const isLogged = useSelector(state => state.islogged);
  const dispatch = useDispatch();
  
  return (
    <div>
        <button onClick={() => dispatch(login())}>
        {isLogged ? 'Log Off' : 'Log In'}
        </button>

        {isLogged ?
          <h3>This is a Secret Message</h3> :
          <h5>Sign In to check secret message</h5>
        }
      </div>
      

  );
}

export default Login;
