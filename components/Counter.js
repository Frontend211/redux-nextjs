import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions';
import { selectCount } from '../redux/selectors';
import { useState } from 'react';


export default function Counter({ name }) {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [my, setMy] = useState(500);
  console.log('рендер', name, count, Date.now());
  return <fieldset>
    <button onClick={() => dispatch(decrement())}> - </button>
    <span> &nbsp; {count} &nbsp; </span>
    <button onClick={() => dispatch(increment())}> + </button>
    &nbsp;
    <button onClick={_ => setMy(n => n + 1)}> &nbsp; {my} &nbsp; </button>
  </fieldset>;

}