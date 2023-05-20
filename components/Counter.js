import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions';
import { selectCount } from '../redux/selectors';


export default function Counter() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  return <fieldset>
    {/* <button onClick={() => dispatch(increment())}> + </button>
    <span>{count}</span>
    <button onClick={() => dispatch(decrement())}> - </button> */}
  </fieldset>;

}