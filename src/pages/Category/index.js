import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { getCategory, getProductsCategory } from "../../services/Api";
import ProductItem from "../../shared/components/product-item";

const Category = () => {

    const params = useParams();

    //Chỗ param này chấm cái gì thì tương ứng với bên file App.js 
    //<Route path="/Category-:id" element={<Category/>} />
    const id = params.id; 
    
    //State lưu sản phẩm theo danh mục
    const [products, setProducts] = React.useState([]);

    //State lưu tổng số sản phẩm
    const [totalProduct, setTotalProduct] =  React.useState(0);

    //State lưu tên danh mục sản phẩm
    const [category, setCategory] = React.useState(null);

    useEffect(() => {
        getProductsCategory(id, {}).then(({data}) => {
            setTotalProduct(data.data.docs.length)
            setProducts(data.data.docs);
        })
        getCategory(id,{}).then(({data}) => setCategory(data.data)); 
    }, [id]);

    return (
        <>
                {/*	List Product	*/}
                <div className="products">
                    {/* {category?.name} nếu như trả về data thì mới thực thi tiếp */}
                    <h3>{category?.name} (hiện có {totalProduct} sản phẩm)</h3>
                    <div className="product-list card-deck">
                        {
                            products.map((product) => 
                                <ProductItem 
                                    item = {product}
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
        </>
    )
}

export default Category;