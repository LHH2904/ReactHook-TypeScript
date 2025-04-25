import { ChangeEvent, ReactNode, useState } from "react";

/**
 * `SelectProps` là một interface định nghĩa các props của component Select.
 * Generic `T` cho phép chọn bất kỳ kiểu dữ liệu nào cho các lựa chọn trong `options`.
 */
interface SelectProps<T> {
    options: T[]; // Mảng các lựa chọn với kiểu dữ liệu `T`
    getOptionKey: (option: T) => string; // Hàm lấy key duy nhất cho mỗi lựa chọn
    renderOption: (option: T) => ReactNode; // Hàm render cho mỗi lựa chọn
    onSelect: (selectedOption: T) => void; // Hàm callback khi người dùng chọn một lựa chọn
}

/**
 * `Select` là một component generic có thể sử dụng với nhiều kiểu dữ liệu.
 * Dữ liệu của các lựa chọn được truyền qua `options` và hiển thị bằng `renderOption` và có thể lấy key duy nhất qua `getOptionKey`.
 */
function Select<T>({
                       options,
                       getOptionKey,
                       renderOption,
                       onSelect,
                   }: SelectProps<T>) {
    const [selected, setSelected] = useState<T | null>(null);

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        const selectedOption = options.find(
            (option) => getOptionKey(option) === value
        );

        if (selectedOption) {
            setSelected(selectedOption);
            onSelect(selectedOption);
        }
    };

    return (
        <div>
            <select onChange={handleChange}>
                <option value="">Select an option</option>
                {options.map((option, index) => (
                    <option key={index} value={getOptionKey(option)}>
                        {renderOption(option)}
                    </option>
                ))}
            </select>
            <div>
                {selected !== null && <p>Selected: {renderOption(selected)}</p>}
            </div>
        </div>
    );
}

export default Select;
