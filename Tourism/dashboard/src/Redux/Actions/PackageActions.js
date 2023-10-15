import axios from "axios";
import { PACKAGE_DETAILS_FAIL, PACKAGE_DETAILS_REQUEST, PACKAGE_DETAILS_SUCCESS, PACKAGE_LIST_FAIL, PACKAGE_LIST_REQUEST, PACKAGE_LIST_SUCCESS } from "../Constants/PackageConstants"

//PACKAGE_LIST
export const listPackage = () => async (dispatch) => {
    try {
        dispatch({ type: PACKAGE_LIST_REQUEST });
        const { data } = await axios.get("/api/packages");
        dispatch({ type: PACKAGE_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PACKAGE_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

//SINGLE PACKAGE
export const listPackageDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PACKAGE_DETAILS_REQUEST });
        const { data } = await axios.get(`/api/packages/${id}`);
        dispatch({ type: PACKAGE_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PACKAGE_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};