import { ADD_TO_CART } from "../../shared/constants/action-type";

const initState = {
    items: [],
}

export default (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            //Vì công việc phức tạp nên cần viết riêng ra 1 hàm addItem();
            return addItem(state, action.payload);

        default:
            return state;

    }
}
// Hàm addItem cập nhật lại state (initState)
// Phải truyền cả state (initSate) cũ vào nữa.
const addItem = (state, payload) => {
    //Gán state.items hay nói cách khác là gán initState cho items
    const items = state.items;

    //Biến kiểm tra có phải sản phẩm đã có trong giỏ hàng rồi hay chưa
    let isProductExists = false;

    items.map((item) => {
        if (item._id === payload._id) {
            item.qty += payload.qty;
            isProductExists = true;
        }
        return item;
    });

    //Bắt buộc phải có newItems để trả lại cho state
    const newItems = isProductExists ? items : [...items, payload]

    //Luu vao locol
    // localStorage.setItem("cart_items"), JSON.stringify(newItems);

    //Phải trả vè cả giá trị cũ nên dùng Destructuring { }
    return { ...state, items: newItems }
}