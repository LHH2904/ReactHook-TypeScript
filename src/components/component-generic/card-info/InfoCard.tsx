import {ReactNode} from "react";

/**
 *  Vi du có nhiều loại dữ liệu khác nhau muốn hiển thị (User, Product, Book...),
 *  tạo một component dùng generic để dùng lại cho tất cả loại đó.
 */

/**
 * InfoCardProps là một interface sử dụng generic <T>.
 * - `data`: là đối tượng dữ liệu kiểu T (có thể là user, product, book...)
 * - `render`: là hàm nhận vào một item kiểu T và trả về ReactNode để hiển thị.
 */
interface InfoCardProps<T> {
    data: T;
    render: (item: T) => ReactNode;
}


/**
 * `InfoCard` là một generic component.
 * Nó nhận dữ liệu `data` và hàm `render` để hiển thị nội dung tùy theo kiểu dữ liệu.
 * Nhờ dùng generic <T>, component này có thể dùng được với mọi loại dữ liệu.
 */
const InfoCard = <T,>({ data, render }: InfoCardProps<T>) => {
    return (
        <div style={{ border: "1px solid gray", padding: "1rem", marginBottom: "1rem" }}>
            {render(data)}
        </div>
    );
};

export default InfoCard;