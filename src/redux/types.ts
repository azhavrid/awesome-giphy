import { rootReducer } from './reducer';
import { DataAction } from './data/types';
import { GifsAction } from './gifs/types';
import { SearchAction } from './search/types';
import { FunctionPropertiesOf, ValuesOf } from '../types';

/* ------------- State ------------- */
export type RootState = ReturnType<typeof rootReducer>;
export type RootAction = DataAction | GifsAction | SearchAction;

/* ------------- Utils ------------- */
type PickType<ConstantType> = { type: ConstantType };
type PickActionFrom<RootActionType, ConstantType> = RootActionType extends PickType<ConstantType>
  ? RootActionType
  : never;
export type PickAction<ConstantType> = PickActionFrom<RootAction, ConstantType>;
export type AllActionTypes<T> = ReturnType<FunctionPropertiesOf<T>>;

export type ReducerType<State, ConstantType> = (
  state: State,
  action: PickAction<ConstantType extends object ? ValuesOf<ConstantType> : ConstantType>,
) => State;

export type GetStateFunction = () => RootState;
