import { ReactElement, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { setProducts, useGlobalState } from './store';
import { getProductsList } from './getaway/getaway';
import Layout from './components/layout/Layout';
import Products from './components/products/Products';
import Details from './components/details/Details';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { List } from './interfaces';

const App = (): ReactElement<List> => {
  const list = useGlobalState as Partial<List>;
  useEffect(() => {
    getProductsList().then(res => setProducts((list.product = res)));
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="products" element={<Products />} />
          <Route path="details" element={<Details />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
