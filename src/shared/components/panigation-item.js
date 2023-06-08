import { Link, useLocation, useSearchParams } from "react-router-dom";

const Pagination = ({ pages }) => {

    //Tinh toan cac tham so dau vao cho giai thuat phan trang
    const {
        total,
        //Thêm limit
        limit,
        currentPage,
        next,
        prev,
        hasNext,
        hasPrev,
    } = pages;

    //Làm tròn số trang 
    const totalPages = Math.ceil(total / limit);

    //useLocation() lấy thông tin từ URL hiện tại;
    // const location = useLocation();
    // console.log(location.pathname); //  http://localhost:3000/search
    // console.log(location.search);   //  ?q=iphone&page=2293
    const location = useLocation();

    //useSearchParams() lấy thông tin từ URL hiện tại
    const [searchParams, setSearchParams] = useSearchParams();

    // Tạo ra cấu trúc URL để người dùng có thể click vào trang kết quả cần xem
    const formatUrl = (page) => {
        return `${location.pathname}?keyword=${searchParams.get("keyword")}&page=${page}`;
        //http://localhost:3000/Search?keyword=       chuỗi tìm kiếm     &page=3
    }

    const renderPagesHTML = (delta = 2) => {
        const pages = [];
        const left = currentPage - delta;
        const right = currentPage + delta;

        for (let i = 1; i <= totalPages; i++) {
            if (
                //Nếu i ở vị trí = 1: Trang đầu tiên HOẶC: 
                i === 1 ||
                //Nếu i ở vị trí trang hiện tại HOẶC:            
                i === currentPage ||
                //Nếu i ở vị trí cuối cùng HOẶC:
                i === totalPages ||
                //Nếu i nằm trong khoảng >=trai và <= phải
                (i >= left && i <= right)
            ) {
                pages.push(i);
            }
        }
        return pages;
    }

    return (
        <>
            <ul className="pagination">
                {
                    hasPrev ?
                        <li className="page-item"><Link className="page-link" to={formatUrl(prev)}>Trang trước</Link></li>
                        : null
                }
                {
                    renderPagesHTML().map((page, index) =>
                        <li
                            className={`page-item ${page === currentPage && 'active'}`}
                            key={index}
                        >
                            <Link
                                className="page-link"
                                //ở đây page là trang hiện tại
                                to={formatUrl(page)}
                            >{page}
                            </Link>
                        </li>

                    )
                }
                {
                    hasNext ?
                        <li className="page-item"><Link className="page-link" to={formatUrl(next)}>Trang sau</Link></li>
                        : null

                }
            </ul>
        </>
    )
}

export default Pagination;