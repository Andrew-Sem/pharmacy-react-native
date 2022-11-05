import axios from "axios";
import constants from "expo-constants"

export const $api = axios.create({
    // baseURL: constants.expoConfig?.extra?.apiUrl
    baseURL: "http://localhost:8080"
})