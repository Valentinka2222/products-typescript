import React from 'react';
import { useGlobalState } from '../../store';
import { Link } from 'react-router-dom';
import AutoSizer from 'react-virtualized-auto-sizer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ProductInt } from '../../interfaces';
import { FixedSizeList as List } from 'react-window';

import './favourite.scss';

type FavoiriteProps = {
  setImageId: (a?: string) => void;
};

const Favourite: React.FC<FavoiriteProps> = ({ setImageId }) => {
  const [list] = useGlobalState('list');
  const renderList = Array.from(new Set(list.favouriteList));
  const styleIcon = {
    display: 'block',
    margin: 'auto',
    width: '90%',
    height: '90%',
  };
  const handleClick = (e: React.SyntheticEvent<EventTarget>) => {
    if (!(e.target instanceof HTMLDivElement)) {
      return;
    }
    const id = e.target.dataset.id;
    setImageId(id);
    return renderList.filter((el: ProductInt) => el.id !== Number(id));
  };

  return (
    <div className="product-favourite">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <AutoSizer>
          {({ height, width }) => {
            return (
              <List
                itemCount={renderList.length}
                itemSize={130}
                height={height}
                width={width}
                itemData={renderList}
              >
                {({ index, data }) => {
                  const { id, src, price, name } = data[index];
                  return (
                    <ul className="favourite__list">
                      <Link to={'details'} className="favourite__list_item" data-id={id}>
                        <div
                          onClick={e => handleClick(e)}
                          data-id={id}
                          style={{
                            height: '108px',
                            width: '108px',
                            borderRadius: '30px',
                          }}
                        >
                          <img
                            className="favourite__list_item_img"
                            src={`https://testbackend.nc-one.com${src}`}
                          />
                        </div>
                        <div
                          className="favourite__list_item_info"
                          onClick={e => handleClick(e)}
                          data-id={id}
                        >
                          <span data-id={id} className="favourite__list_item_name">
                            {name}
                          </span>
                          <div data-id={id} className="favourite__list_item_description">
                            <span className="favourite__list_item_price">{`$${price}`}</span>

                            <div
                              data-id={id}
                              className="favourite__list_item_icon-like "
                              onClick={e => handleClick(e)}
                            >
                              <FavoriteIcon data-id={id} style={styleIcon} />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </ul>
                  );
                }}
              </List>
            );
          }}
        </AutoSizer>
      </div>
    </div>
  );
};

export default Favourite;
