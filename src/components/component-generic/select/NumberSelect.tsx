import Select from "./Select";

const NumberSelect = () => {
    const numbers = [1, 2, 3, 4, 5];

    const handleSelect = (selectedNumber: number) => {
        console.log("You selected:", selectedNumber);
    };

    return (
        <Select
            options={numbers}
            getOptionKey={(number) => number.toString()} // Lấy key là số dưới dạng chuỗi
            renderOption={(number) => <span>{number}</span>} // Render số
            onSelect={handleSelect}
        />
    );
};

export default NumberSelect;