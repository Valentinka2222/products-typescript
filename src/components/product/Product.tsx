import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { setFavourite } from '../../store';
import { FixedList, ProductInt } from '../../interfaces';

const Product: React.FC<FixedList> = ({ style, data, rowIndex, itemPer, columnIndex }) => {
  const [isLike, setIsLike] = useState(false);
  const itemInd = Math.ceil(rowIndex * itemPer + columnIndex);
  const changeColor = (el?: ProductInt, like?: boolean) => {
    if (like) {
      setFavourite(el);
    }
  };

  const handleClick = (e: React.SyntheticEvent<EventTarget>) => {
    if (!(e.target instanceof HTMLDivElement)) {
      return;
    }
    const eventId = e.target.dataset.id;
    const dataElement = data.find(el => el.id === Number(eventId));

    changeColor(dataElement, isLike);
  };
  const { id, src, name, price } = data[itemInd];

  return (
    <div className="product" style={style} data-id={id} onClick={e => handleClick(e)}>
      <div className="product__img">
        <img data-id={id} src={`https://testbackend.nc-one.com${src}`} alt="Image Product" />
      </div>
      <div className="product__info">
        <div className="product__name">{name}</div>
        <div className="product__price" data-id={id}>
          {`$${price}`}

          <button
            aria-controls="icon"
            onClick={() => {
              setIsLike(true);
            }}
            aria-haspopup="true"
            data-id={id}
            className="icon-like"
          >
            {isLike ? (
              <FavoriteIcon
                id="icon"
                style={{
                  display: 'block',
                  margin: 'auto',
                  width: '90%',
                  height: '90%',
                }}
              />
            ) : (
              <FavoriteSharpIcon
                id="icon"
                style={{
                  color: 'white',
                  display: 'block',
                  margin: 'auto',
                  width: '90%',
                  height: '90%',
                }}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
