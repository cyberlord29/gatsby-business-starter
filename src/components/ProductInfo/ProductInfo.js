import React from 'react';

import { ProductInfoContainer, ProductImage, ProductCard, ProductTitle, ProductDescription, WhiteButton} from './ProductInfo.elements';

const ProductInfo = () => {
    return(
        <div>
        <ProductInfoContainer>
            <ProductImage />
            <ProductCard>
                <ProductTitle>
                    Make the delicious food and order our app
                </ProductTitle>
                <ProductDescription>
                    Get insider access to news around innovations, unique cooking techniques, culinary concepts and more regular enterprise is. Initially, the animal population was about chicken, cows, pigs and others
                </ProductDescription>
                <WhiteButton>
                    Learn More
                </WhiteButton>
            </ProductCard>
        </ProductInfoContainer>
        <ProductInfoContainer>
            <ProductCard>
                <ProductTitle>
                   Our support growth rate is awesome
                </ProductTitle>
                <ProductDescription>
                    Get insider access to news around innovations, unique cooking techniques, culinary concepts and more regular enterprise is. Initially, the animal population was about chicken, cows, pigs and others
                </ProductDescription>
                <WhiteButton>
                    Learn More
                </WhiteButton>
            </ProductCard>
            <ProductImage />
        </ProductInfoContainer>
        </div>

    );
}

export default ProductInfo;