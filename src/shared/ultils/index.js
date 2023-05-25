import { BASE_URL } from "../constants/app"
export const getImageProduct = (image) => {
    return`${BASE_URL}assets/uploads/products/${image}`;
}