import { PACKAGE_DETAILS_FAIL, PACKAGE_DETAILS_REQUEST, PACKAGE_DETAILS_SUCCESS, PACKAGE_LIST_FAIL, PACKAGE_LIST_REQUEST, PACKAGE_LIST_SUCCESS } from "../Constants/PackageConstants";

//PACKAGE_LIST
export const packageListReducer = (state = {packages: []}, action) => {
    switch (action.type) {
        case PACKAGE_LIST_REQUEST:
            return {loading: true, packages: []};
        case PACKAGE_LIST_SUCCESS:
            return {loading: false, packages: action.payload};   
        case PACKAGE_LIST_FAIL:
            return {loading: true, error: action.payload};
        default:
            return state;
    }
};

//SINGLE PACKAGE
export const packageDetailReducer = (state = {package: {reviews: []}}, action) => {
    switch (action.type) {
        case PACKAGE_DETAILS_REQUEST:
            return {...state,loading: true};
        case PACKAGE_DETAILS_SUCCESS:
            return {loading: false, package: action.payload};   
        case PACKAGE_DETAILS_FAIL:
            return {loading: true, error: action.payload};
        default:
            return state;
    }
};