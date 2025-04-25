import InfoCard from "./InfoCard";

// Dữ liệu kiểu người dùng
const user = {
    name: "Alice",
    age: 25,
};

// Dữ liệu kiểu sản phẩm
const product = {
    name: "Laptop",
    price: "$999",
};

/**
 * `Text` là component ví dụ dùng `InfoCard` để hiển thị 2 loại dữ liệu khác nhau:
 * - Thông tin người dùng (user)
 * - Thông tin sản phẩm (product)
 *
 * Mỗi loại dữ liệu sẽ truyền vào `InfoCard` một object `data` và một hàm `render`
 * để tùy biến nội dung hiển thị theo loại dữ liệu đó.
 */
const Text = () => {
    return (
        <div>
            {/* InfoCard với dữ liệu người dùng */}
            <InfoCard
                data={user}
                render={(u) => (
                    <div>
                        <h3>User Info</h3>
                        <p>Name: {u.name}</p>
                        <p>Age: {u.age}</p>
                    </div>
                )}
            />

            {/* InfoCard với dữ liệu sản phẩm */}
            <InfoCard
                data={product}
                render={(p) => (
                    <div>
                        <h3>Product Info</h3>
                        <p>Name: {p.name}</p>
                        <p>Price: {p.price}</p>
                    </div>
                )}
            />
        </div>
    );
};

export default Text;