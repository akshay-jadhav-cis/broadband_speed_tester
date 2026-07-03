import axios from "axios";

const BASE_URL = "http://localhost:8000";

export async function getNetworkInfo() {

    const { data } = await axios.get(
        `${BASE_URL}/network`
    );

    return data;

}