import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../services/Api";
import ProductItem from "../../shared/components/product-item";
import Pagination from "../../shared/components/panigation-item";

const Search = () => {

    const [products, setProducts] = React.useState([]);
    const [searchPrams, setSearchParams] = useSearchParams();

    //Khởi tạo limit
    const [pages, setPages] = React.useState({
        limit: 12
    })

    const keyword = searchPrams.get("keyword");
    const page = searchPrams.get("page") || 1;

    useEffect(() => {
        getProducts({
            params: {
                name: keyword,
                page: page,
                limit: 12
            }
        }).then(({ data }) => {
            setProducts(data.data.docs);
            // console.log("data.data.docs: ",data.data.docs);
            setPages({...pages, ...data.data.pages});
        });
    }, [pages, keyword]);

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
                    <Pagination pages = {pages}/>
                </div>
            </div>

        </>
    )
}

export default Search;