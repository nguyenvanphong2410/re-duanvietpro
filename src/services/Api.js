import Http from "./Http";

export const getProducts = (config) => {
    return Http.get("products", config)
} 

export const getCategories = (config) => {
    return Http.get("categories", config)
} 

//Viết API để lấy tất cả sản phẩm tương ứng với category nhận được
export const getProductsCategory = (id, config) => {
    return Http.get(`categories/${id}/products`, config)
} 

// API lấy tên của danh mục sản phẩm, lấy ra cụ thể danh mục nào đó
export const getCategory = (id, config) => {
    return Http.get(`categories/${id}`, config)
}