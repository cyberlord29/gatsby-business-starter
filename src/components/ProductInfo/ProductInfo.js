import React from 'react';

import { ProductInfoContainer, ProductImage, ProductCard, ProductTitle, ProductDescription } from './ProductInfo.elements';

import { WhiteButton } from '../../globalStyles';
const ProductInfo = (props) => {
    const productInfo = props.data;
    const [firstProduct, secondProduct] = productInfo;
    return(
        <div>
        <ProductInfoContainer>
            <ProductImage />
            <ProductCard>
                <ProductTitle>
                    {firstProduct.title}
                </ProductTitle>
                <ProductDescription>
                    {firstProduct.description}
                </ProductDescription>
                <WhiteButton>
                    {firstProduct.buttonText}
                </WhiteButton>
            </ProductCard>
        </ProductInfoContainer>
        <ProductInfoContainer>
            <ProductImage />
            <ProductCard>
                <ProductTitle>
                   {secondProduct.title}
                </ProductTitle>
                <ProductDescription>
                    {secondProduct.description}
                </ProductDescription>
                <WhiteButton>
                    {secondProduct.buttonText}
                </WhiteButton>
            </ProductCard>
        </ProductInfoContainer>
        </div>

    );
}

export default ProductInfo;