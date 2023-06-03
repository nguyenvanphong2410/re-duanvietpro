import React, { useEffect } from "react";
import { createCommentProduct, getCommentsProduct, getProduct } from "../../services/Api";
import { useParams } from "react-router";
import { getImageProduct } from "../../shared/ultils";
import moment from "moment";

const ProductDetails = () => {

    const params = useParams();
    const id = params.id;

    const [products, setProducts] = React.useState(null);
    const [comments, setComments] = React.useState([]);
    const [inputComment, setInputComments] = React.useState({});

    useEffect(() => {
        //Get Product
        getProduct(id, {}).then(({ data }) => setProducts(data.data));

        //Get Comments
        getComments(id);
    }, [id]);

    //Viết riêng để cập nhật lại comments khi thêm comments
    const getComments = () => {
        getCommentsProduct(id, {}).then(({ data }) => setComments(data.data.docs));
    }

    //Xử lí submit
    const onClickSubmit = (e) => {
        e.preventDefault();
        createCommentProduct(id, inputComment, {}).then(({ data }) => {
            if (data.status === "success") {
                setInputComments({});
            }
            getComments(id);
        })
    }

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setInputComments({ ...inputComment, [name]: value });
    }

    return (
        <>
            <div>
                {/*	List Product	*/}
                <div id="product">
                    <div id="product-head" className="row">
                        <div id="product-img" className="col-lg-6 col-md-6 col-sm-12">
                            <img src={getImageProduct(products?.image)} />
                        </div>
                        <div id="product-details" className="col-lg-6 col-md-6 col-sm-12">
                            <h1>{products?.name}</h1>
                            <ul>
                                <li><span>Bảo hành:</span> 12 Tháng</li>
                                <li><span>Đi kèm:</span>{products?.accessories}</li>
                                <li><span>Tình trạng:</span>{products?.status}</li>
                                <li><span>Khuyến Mại:</span> {products?.promotion}</li>
                                <li id="price">Giá Bán (chưa bao gồm VAT)</li>
                                <li id="price-number">{products?.price}</li>
                                <li id="status">{products?.is_stock ? "Còn hàng" : "Hết hàng"}</li>
                            </ul>
                            <div id="add-cart"><a href="#">Mua ngay</a></div>
                        </div>
                    </div>
                    <div id="product-body" className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h3>{products?.name}</h3>
                            {products?.name}
                        </div>
                    </div>
                    {/*	Comment	*/}
                    <div id="comment" className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h3>Bình luận sản phẩm</h3>
                            <form method="post">
                                <div className="form-group">
                                    <label>Tên:</label>
                                    <input
                                        onChange={onChangeInput}
                                        name="name"
                                        required
                                        type="text"
                                        className="form-control"
                                        value={inputComment.name || ""}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input
                                        onChange={onChangeInput}
                                        name="email"
                                        required
                                        type="email"
                                        className="form-control"
                                        id="pwd"
                                        value={inputComment.email || ""}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Nội dung:</label>
                                    <textarea
                                        onChange={onChangeInput}
                                        name="content"
                                        required
                                        rows={8}
                                        className="form-control"
                                        defaultValue={""}
                                        value={inputComment.content || ""}
                                    />
                                </div>
                                <button
                                    onClick={onClickSubmit}
                                    type="submit"
                                    name="sbm"
                                    className="btn btn-primary"
                                >Gửi</button>
                            </form>
                        </div>
                    </div>
                    {/*	End Comment	*/}
                    {/*	Comments List	*/}
                    <div id="comments-list" className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            {
                                comments.map((comment, index) =>
                                    <div className="comment-item" key={index}>
                                        <ul>
                                            <li><b>{comment.name}</b></li>
                                            <li>{moment(comment.createdAt).fromNow()}</li>
                                            <li>
                                                <p>{comment.content}</p>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                    {/*	End Comments List	*/}
                </div>
                {/*	End Product	*/}
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

export default ProductDetails;