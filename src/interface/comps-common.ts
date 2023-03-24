import { Dispatch, FormEvent, SetStateAction } from 'react';
import { InterfaceFilter } from './common.interface';

export interface InterfaceSearchBar {
  setFilterValue: Dispatch<SetStateAction<InterfaceFilter>>;
}

export interface InterfaceHouseList {
  filterValue: InterfaceFilter;
}
