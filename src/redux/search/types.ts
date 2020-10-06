import { AllActionTypes, ReducerType } from '../types';
import * as actions from './actions';
import { SearchState } from './reducer';

/* ------------- Redux ------------- */
export type SearchAction = AllActionTypes<typeof actions>;
export type SearchReducer<ConstantType> = ReducerType<SearchState, ConstantType>;

/* ------------- Other ------------- */
