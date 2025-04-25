import { useState, useMemo } from "react";
import useFetchData from "../../hooks/useFetchData";
import * as React from "react";

// Define the `Beverage` interface to describe the structure of beverage data
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

/**
 * `useFilteredData` is a custom hook that allows filtering data based on the producer's location.
 * It uses `useState` to manage the filter location and `useMemo` to optimize filtered data calculation.
 * - `initialLocation`: The initial location to start filtering.
 * - `dataUrl`: The URL of the API containing the data to be filtered.
 */
export function useFilteredData(initialLocation: string, dataUrl: string) {
    const [filterLocation, setFilterLocation] = useState<string>(initialLocation);

    const { data, done } = useFetchData<Beverage[]>(dataUrl);

    /**
     * Function to handle when the user changes the selection in the dropdown (`<select>`).
     * This updates the `filterLocation` state based on the new selection.
     */
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterLocation(e.target.value);
    };

    /**
     * Use `useMemo` to calculate the filtered data only when `data`, `filterLocation`, or `done` changes.
     * This optimizes re-computation, avoiding unnecessary calculations.
     */
    const filteredData = useMemo(
        () => {
            if (done && data) {
                // If filterLocation is "all", return all the data without filtering
                if (filterLocation === "all") {
                    return data;
                }
                // filter the data based on the producer's location
                return data.filter((bev) =>
                    bev.producerLocation.includes(filterLocation)
                );
            }
            return []; // Return an empty array if no data or data has not finished loading
        },
        [data, filterLocation, done] // Tính toán lại khi data, filterLocation hoặc done thay đổi
    );

    /**
     * This hook returns the following values:
     * - `filterLocation`: The current location filter.
     * - `filteredData`: The filtered data based on the `filterLocation`.
     * - `handleSelectChange`: The function that handles changes to the location selection.
     * - `done`: The state indicating whether the data has finished loading from the API.
     */
    return {
        filterLocation,
        filteredData,
        handleSelectChange,
        done
    };
}
