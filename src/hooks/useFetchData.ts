// Import useEffect and useState hooks from React
import { useEffect, useState } from "react";

// Create a custom hook with a generic Payload type → for flexible data (array, object, v.v)
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

    // useEffect runs once after the component mounts, because the dependency is [url]
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())           // Parse JSON từ response
            .then((data: Payload) => {          // Cast dữ liệu về kiểu Payload (generic)
                setData(data);                  // Lưu dữ liệu vào state
                setDone(true);
            });
    }, [url]); // The effect will run again if the `url` changes

    // Return the `data` and `done` states so that the component using this hook can use them
    return {
        data,
        done,
    };
}

export default useFetchData;
