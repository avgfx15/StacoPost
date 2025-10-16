import React from 'react';

// | Imagekit.io for Images from cloud
import { Image } from '@imagekit/react';

// & Image Component

const ImageComponent = ({ src, alt, className, width, height }) => {
  // ^ Render ImageComponent
  if (!src) return null; // Prevent rendering with empty src

  return (
    <Image
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading='lazy'
      lqio={{ active: true, quality: 20 }}
      transformation={[
        {
          width: width,
          height: height,
        },
      ]}
    />
  );
};

// ~ Image Component Export
export default ImageComponent;
