import { AllActionTypes, ReducerType } from '../types';
import * as actions from './actions';
import { DataState } from './reducer';

/* ------------- Redux ------------- */
export type DataAction = AllActionTypes<typeof actions>;
export type DataReducer<ConstantType> = ReducerType<DataState, ConstantType>;

/* ------------- Other ------------- */
