import { useEffect, useState } from "react";

/**
 * `useFetchData` is a custom hook that allows fetching data from a given URL.
 * Uses a generic type `Payload` to ensure flexibility with the data type.
 * The hook returns two pieces of state:
 * `data` (the fetched data)
 * `done` (a boolean indicating whether the fetch is complete).
 * `Payload` can be any data type (array, object, etc.) depending on what the API returns.
 * The `url` parameter specifies the URL to fetch data from.
 */
function useFetchData<Payload>(
    url: string // The URL to fetch data from
): {
    data: Payload | null; // The data after it's fetched (initially null)
    done: boolean;        // A state that indicates if the data fetching is complete
} {
    // Initialize the state for `data`, defaulting to null
    const [data, setData] = useState<Payload | null>(null);
    // Initialize the state for `done`, defaulting to false (not loaded yet)
    const [done, setDone] = useState(false);

    /**
     * `useEffect` runs once when the component mounts (or when the `url` changes).
     * It fetches the data from the URL, parses the response as JSON, and stores the result in the `data` state.
     * Once the data is fetched, it updates the `done` state to `true` to indicate completion.
     */
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())           // Parse JSON form response
            .then((data: Payload) => {          // Cast dữ liệu về kiểu Payload (generic)
                setData(data);                  // Store the fetched data in the state
                setDone(true);              // Set `done` to true after data is fetched
            });
    }, [url]); // The effect will run again if the `url` changes

    /**
     * The hook returns two states: `data` and `done`.
     * - `data` contains the fetched data (or `null` if no data is fetched yet).
     * - `done` is a boolean indicating whether the data has been successfully fetched.
     */
    return {
        data,
        done,
    };
}

export default useFetchData;
