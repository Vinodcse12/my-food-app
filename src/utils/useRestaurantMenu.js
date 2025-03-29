import { useEffect, useState } from "react"
import { RESTAURANT_MENU} from "./../utils/constants";

const useRestaurantMenu = (restoId) => {
    const [restroInfo, setRestroInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_MENU + restoId);
        const jsonData = await data.json();
        console.log(jsonData);
        setRestroInfo(jsonData?.data);
    }

    return restroInfo;
}

export default useRestaurantMenu;