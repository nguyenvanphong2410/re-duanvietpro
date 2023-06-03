import Http from "./Http";

export const getProducts = (config) => {
    return Http.get("products", config)
} 

export const getCategories = (config) => {
    return Http.get("categories", config)
} 

// API để lấy tất cả sản phẩm tương ứng với category nhận được
export const getProductsCategory = (id, config) => {
    return Http.get(`categories/${id}/products`, config)
} 

// API lấy tên của danh mục sản phẩm, lấy ra cụ thể danh mục nào đó
export const getCategory = (id, config) => {
    return Http.get(`categories/${id}`, config)
}

// API lấy tên của danh mục sản phẩm, lấy ra cụ thể danh mục nào đó
export const getProduct = (id, config) => {
    return Http.get(`products/${id}`, config)
}

// API Lấy bình luận theo ID sản phẩm:
export const getCommentsProduct = (id, config) => {
    return Http.get(`products/${id}/comments`, config)
}

// API Thêm bình luận theo ID sản phẩm method POST: 
export const createCommentProduct = (id, data, config) => {
    return Http.post(`products/${id}/comments`, data, config)
};

