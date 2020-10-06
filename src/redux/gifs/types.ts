import { AllActionTypes, ReducerType } from '../types';
import * as actions from './actions';
import { GifsState } from './reducer';

/* ------------- Redux ------------- */
export type GifsAction = AllActionTypes<typeof actions>;
export type GifsReducer<ConstantType> = ReducerType<GifsState, ConstantType>;

/* ------------- Other ------------- */
