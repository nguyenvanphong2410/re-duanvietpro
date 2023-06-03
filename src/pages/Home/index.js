import React from "react";
import { useEffect } from "react";
import { getProducts } from "../../services/Api";
import ProductItem from "../../shared/components/product-item";

const Home = () => {

    const [featureProducts, setFeatureProducts] = React.useState([]);
    const [latestProducts, setLatestProducts] = React.useState([]);
    
    useEffect(() => {
        getProducts({
            params: {
                limit: 6,
                "filter[is_featured]": true
            }
        }).then(({data}) => setFeatureProducts(data.data.docs))

        getProducts({
            params: {
                limit: 6,
            }
        }).then(({data}) => setLatestProducts(data.data.docs))
    },[])

    return (
        <>
            {/*	Feature Product	*/}
            <div className="products">
                <h3>Sản phẩm nổi bật</h3>
                <div className="product-list card-deck">
                    {
                        featureProducts.map((value, index) => 
                        
                            <ProductItem
                                item={value}
                                key={index}
                            />
                        )
                    }
                </div>
            </div>
            {/*	End Feature Product	*/}
            {/*	Latest Product	*/}
            <div className="products">
                <h3>Sản phẩm mới</h3>
                <div className="product-list card-deck">
                {
                        latestProducts.map((value, index) => 
                        
                            <ProductItem
                                item={value}
                                key={index}
                            />
                        )
                    }
                </div>
            </div>
            {/*	End Latest Product	*/}
        </>
    )
}

export default Home;