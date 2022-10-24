import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getImageByID } from '../../getaway/getaway';
import Favourite from '../favourite/Favourite';
import { ProductInt } from '../../interfaces';
import './navigation.scss';

const Layout = () => {
  const [isLike, setIsLike] = useState(false);
  const [imageId, setImageId] = useState<string | undefined>('');
  const [zoomProduct, setZoomProduct] = useState({});

  const handleGetClick = (e: React.SyntheticEvent<EventTarget>) => {
    if (!(e.target instanceof HTMLDivElement)) {
      return;
    }
  };

  useEffect(() => {
    getImageByID(Number(imageId)).then((res: ProductInt) => {
      setZoomProduct([res]);
    });
  }, [imageId]);

  return (
    <main className="container">
      <nav className="navigation">
        <div className="navigation__action" onClick={e => handleGetClick(e)}>
          <NavLink to="products" className="navigation__action_link" data-link="products">
            Product List
          </NavLink>
          <NavLink to="/" className="navigation__action_link" data-link="page">
            Page
          </NavLink>
        </div>
      </nav>
      <div className="products__container">
        <Favourite setImageId={setImageId} />
        <Outlet context={[zoomProduct, isLike, setIsLike]} />
      </div>
    </main>
  );
};

export default Layout;
