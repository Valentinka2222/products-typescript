import { useOutletContext } from 'react-router-dom';
import ReactImageMagnify from '@blacklab/react-image-magnify';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ProductInt } from '../../interfaces';
import './details.scss';

type imageProps = {
  alt: string;
  src: string;
};

const Details = () => {
  const [zoomProduct]: Array<ProductInt> | Array<ProductInt> = useOutletContext();

  const { src, id, name, price }: ProductInt = zoomProduct[0];
  const imageProps: imageProps = {
    alt: 'Wristwatch by Ted Baker London',
    src: `https://testbackend.nc-one.com${src}`,
  };

  return (
    <div className="zoom">
      {id ? (
        <>
          <div className="zoom__image " data-id={id}>
            <ReactImageMagnify
              imageProps={imageProps}
              magnifiedImageProps={{
                src: `https://testbackend.nc-one.com${src}`,
                width: 515.5 * 4,
                height: 397.202 * 4,
              }}
              portalProps={{
                placement: 'over',
              }}
            />
          </div>
          <div className="zoom__info" data-id={id}>
            <span className="zoom__name">{name}</span>
            <div className="zoom__price" data-id={id}>
              <span>{`$${price}`}</span>
              <div data-id={id} className="zoom-icon">
                <FavoriteIcon
                  data-id={id}
                  style={{
                    display: 'block',
                    margin: 'auto',
                    width: '90%',
                    height: '90%',
                  }}
                />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Details;
