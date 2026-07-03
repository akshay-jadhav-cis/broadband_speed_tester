import axios from "axios";
import API_URL from "../config/api";



export async function getNetworkInfo() {

    const { data } = await axios.get(
        `${API_URL}/network`
    );

    return data;

}