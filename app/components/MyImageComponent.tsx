import React from 'react';

import Image from 'next/image';
import NextImage from 'next/image';

interface ImageProps {
    src: string;
    alt: string;
}

const MyImageComponent: React.FC<ImageProps> = ({ src, alt }) => {
    return <NextImage src={src} alt={alt} />;
};

const imageType: typeof MyImageComponent = MyImageComponent;

export default MyImageComponent;
