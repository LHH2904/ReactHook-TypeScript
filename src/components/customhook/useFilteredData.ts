import { useState, useMemo } from "react";
import useFetchData from "../../hooks/useFetchData";
import * as React from "react";

export interface Beverage {
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

export function useFilteredData(initialLocation: string, dataUrl: string) {
    const [filterLocation, setFilterLocation] = useState<string>(initialLocation);

    const { data, done } = useFetchData<Beverage[]>(dataUrl);

    // Hàm xử lý khi người dùng thay đổi lựa chọn trong select
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterLocation(event.target.value);
    };

    // Dùng useMemo để lọc dữ liệu khi filterLocation thay đổi
    const filteredData = useMemo(
        () => {
            if (done && data) {
                if (filterLocation === "all") {
                    return data;
                }
                return data.filter((bev) =>
                    bev.producerLocation.toLowerCase().includes(filterLocation.toLowerCase())
                );
            }
            return [];
        },
        [data, filterLocation, done] // Tính toán lại khi data, filterLocation hoặc done thay đổi
    );

    return {
        filterLocation,
        filteredData,
        handleSelectChange,
        done
    };
}
