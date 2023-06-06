import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../services/Api";
import ProductItem from "../../shared/components/product-item";

const Search = () => {

    const [products, setProducts] = React.useState([]);
    const [searchPrams, setSearchParams] = useSearchParams();

    const keyword = searchPrams.get("keyword");

    useEffect(() => {
        getProducts({
            params : {
                name : keyword
            }
        }).then(({data}) => setProducts(data.data.docs));
    }, [keyword]);

    return (
        <>
            <div>
                {/*	List Product	*/}
                <div className="products">
                    <div id="search-result">Kết quả tìm kiếm với sản phẩm <span>{keyword}</span></div>
                    <div className="product-list card-deck">
                        {
                            products.map((product, index) =>
                                <ProductItem
                                    item={product}
                                    key={index}
                                />
                            )
                        }
                    </div>
                </div>
                {/*	End List Product	*/}
                <div id="pagination">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Trang trước</a></li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Trang sau</a></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Search;