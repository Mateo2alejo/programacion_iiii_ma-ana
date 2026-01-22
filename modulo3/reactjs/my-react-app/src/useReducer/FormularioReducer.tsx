import { useReducer } from 'react';
import type { ChangeEvent } from 'react';

interface State {
  radio: number;
  area: number;
}

interface Action {
  type: 'cambiar_radio';
  value: number;
}

const initialState: State = {
  radio: 0,
  area: 0,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'cambiar_radio':
      return {
        radio: action.value,
        area: Math.PI * action.value * action.value,
      };
    default:
      return state;
  }
}

export default function AreaCirculo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: 'cambiar_radio',
      value: Number(e.target.value),
    });
  }

  return (
    <>
      <input
        type="number"
        placeholder="Radio"
        value={state.radio}
        onChange={handleChange}
      />
      <p>Área del círculo de mateo: {state.area.toFixed(2)}</p>
    </>
  );
}
