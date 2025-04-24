
import { useFilteredData, Beverage } from "./useFilteredData.ts";

function CustomHook() {
    const {
        filterLocation,
        filteredData,
        handleSelectChange,
        done,
    } = useFilteredData("all", "/cs25-beveragelist.json");

    return (
        <div>
            <select value={filterLocation} onChange={handleSelectChange}>
                <option value="all">All</option>
                <option value="chico">Chico</option>
                <option value="petaluma">Petaluma</option>
                <option value="bend">Bend</option>
            </select>

            {done ? (
                <div>
                    {filteredData.length > 0 ? (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                            {filteredData.map((bev: Beverage, index: number) => (
                                <div key={index} style={{ width: "200px", textAlign: "center" }}>
                                    <h3>{bev.name}</h3>
                                    <img
                                        style={{ width: "80%", height: "200px", borderRadius: "8px" }}
                                        src={bev.logo}
                                        alt={bev.name}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>No products found for this producer location.</div>
                    )}
                </div>
            ) : (
                <div>Loading data...</div>
            )}
        </div>
    );
}

export default CustomHook;