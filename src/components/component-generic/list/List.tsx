import {ReactNode} from "react";

/**
 * `ListProps` là interface dùng generic `T` để đại diện cho kiểu dữ liệu của mỗi item trong danh sách.
 * - `items: T[]`: Mảng các phần tử có kiểu `T`.
 * - `renderItem`: Hàm nhận `item` kiểu `T` và `index`  để render ra nội dung cho mỗi item trong danh sách.
 */
interface ListProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
}

/**
 * List là một component generic có thể dùng với bất kỳ kiểu dữ liệu nào.
 * Dữ liệu được truyền qua `items` và hiển thị bằng `renderItem`.
 */
const List = <T,>({ items, renderItem }: ListProps<T>) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{renderItem(item, index)}</li>
            ))}
        </ul>
    );
};

export default List;