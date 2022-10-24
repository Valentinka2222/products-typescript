import React from 'react';
import { useGlobalState } from '../../store';
import Product from '../product/Product';
import { FixedSizeGrid as Grid } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { RenderRowProps } from '../../interfaces';
import './products.scss';

const Products: React.FC = () => {
  const [productsList] = useGlobalState('list');

  let itemPer = 1;
  const renderRow = ({ data, style, columnIndex, rowIndex }: RenderRowProps) => {
    return (
      <Product
        data={data}
        style={style}
        itemPer={itemPer}
        columnIndex={columnIndex}
        rowIndex={rowIndex}
      />
    );
  };
  const data: any = productsList.product;
  const length = data.length;
  const rowCount = Math.floor(data.length / itemPer);
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <AutoSizer>
        {({ height, width }) => {
          itemPer = Math.ceil(width / 292);
          return (
            <Grid
              className="grid"
              itemData={data}
              columnCount={length}
              columnWidth={292}
              height={height}
              width={width}
              rowCount={rowCount}
              rowHeight={380}
            >
              {renderRow}
            </Grid>
          );
        }}
      </AutoSizer>
    </div>
  );
};
export default Products;
