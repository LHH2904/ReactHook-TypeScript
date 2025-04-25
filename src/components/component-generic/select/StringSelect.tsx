import Select from "./Select";

const StringSelect = () => {
    const colors = ["Red", "Green", "Blue", "Yellow"];

    const handleSelect = (selectedColor: string) => {
        console.log("You selected:", selectedColor);
    };

    return (
        <Select
            options={colors}
            getOptionKey={(color) => color} // Lấy key là chuỗi màu sắc
            renderOption={(color) => <span>{color}</span>} // Render màu sắc
            onSelect={handleSelect}
        />
    );
};

export default StringSelect;