import React from 'react';
import { useOutlet } from 'react-router-dom';

export interface OutletProps<Context = unknown> {
  context?: Context;
}
export function Outlet<Context = unknown>(props: OutletProps<Context>): React.ReactElement | null {
  return useOutlet(props.context);
}
export interface ProductInt {
  id: number;
  price: string;
  name: string;
  src: string;
}

export interface List {
  product: Array<ProductInt>;
  favouriteList: Array<ProductInt>;
}
export interface RenderRowProps {
  data: Array<ProductInt>;
  style: React.CSSProperties;
  columnIndex: number;
  rowIndex: number;
}
export interface FixedList {
  data: Array<ProductInt>;
  style: React.CSSProperties;
  columnIndex: number;
  rowIndex: number;
  itemPer: number;
}
