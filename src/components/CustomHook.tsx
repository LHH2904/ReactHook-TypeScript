import useFetchData from "../hooks/useFetchData.ts";

interface Beverage {
    name: string;
    producerName: string;
    beverageName: string;
    beverageColor: string;
    beverageStyle: string;
    producerLocation: string;
    abv: number;
    ibu: number;
    logo: string;
    level: number;
}

function CustomHook() {
    // Use the custom hook `useFetchData` to fetch data from a JSON file
    const { data, done } = useFetchData<Beverage[]>("/cs25-beveragelist.json");

    return (
        <div>
            {done && data && (
                <div>
                    <h2>{data![0].name}</h2>
                    <img
                        style={{ width: "30%", height: "30%" }}
                        src={data![0].logo}
                        alt="Beverage logo"
                    />
                </div>
            )}
        </div>
    );
}

export default CustomHook;