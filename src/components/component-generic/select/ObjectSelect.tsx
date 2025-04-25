import Select from "./Select";

// Định nghĩa kiểu đối tượng
interface User {
    id: number;
    name: string;
}

const ObjectSelect = () => {
    const users: User[] = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
    ];

    const handleSelect = (selectedUser: User) => {
        console.log("You selected:", selectedUser);
    };

    return (
        <Select
            options={users}
            getOptionKey={(user) => user.id.toString()} // Lấy key duy nhất (id) của mỗi user
            renderOption={(user) => user.name} // Render tên người dùng
            onSelect={handleSelect}
        />
    );
};

export default ObjectSelect;