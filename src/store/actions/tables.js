import * as actionTypes from './actionTypes';
import axios from 'axios';

export const tablesStart = () => {
    return {
        type: actionTypes.TABLES_START
    }
}

export const tablesSuccess = (data) => {
    return {
        type: actionTypes.TABLES_SUCCESS,
        userId: data.userId,
        first_name: data.first_name,
        last_name: data.last_name,
        date_of_birth: data.date_of_birth,
        joining_date: data.joining_date,
        qualification: data.qualification,
        role: data.role,
        
    };
};

export const tablesFail = (error) => {
    return {
        type: actionTypes.TABLES_FAIL,
        error: error
    };
};

export const tables = (data, token) => {
    return dispatch => {
        dispatch(tablesStart());

        let tableData = {
            first_name: data.first_name,
            last_name: data.last_name,
            date_of_birth: data.date_of_birth,
            joining_date: data.joining_date,
            qualification: data.qualification,
            role: data.role,
        }

        const url = `https://apps-two-fusion.firebaseio.com/tables.json`
        axios.post(url, tableData) 
            .then(response => { 
                // console.log(response);
                dispatch( tablesSuccess( response.data.name, tableData ) );
            })
            .catch(error => {
                // console.log(error);
                dispatch( tablesFail( error ) );
            });
    };
};

// export const tablesInit = () => {
//     return {
//         type: actionTypes.TABLES_INIT,
//     };
// };