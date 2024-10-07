import PropTypes from 'prop-types';
import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

function Image({ src, alt, className, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const hanleError = () => {
        setFallback(images.noImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={hanleError}
        />
    );
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
};

export default forwardRef(Image);
