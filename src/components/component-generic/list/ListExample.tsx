import List from "./List";

const ListExample = () => {
    const names = ['Alice', 'Bob', 'Charlie'];
    const numbers = [10, 20, 30, 40, 50];
    return (
        <div>
            <List
                items={names}
                renderItem={(name, index) => (
                    <strong>{index + 1}. {name}</strong>
                )}
            />
            <List
                items={numbers}
                renderItem={(num, index) => (
                    <strong>{index + 1}. {num}</strong>
                )}
            />
        </div>
    );
};

export default ListExample;