import * as actionTypes from './actionTypes';
import axios from 'axios';

export const tablesStart = () => {
    return {
        type: actionTypes.TABLES_START
    }
}

export const tablesSuccess = (id, tableData) => {
    return {
        type: actionTypes.TABLES_SUCCESS,
        tableId: id,
        tableData: tableData
    };
};

export const tablesFail = (error) => {
    return {
        type: actionTypes.TABLES_FAIL,
        error: error
    };
};

export const tables = (tableData, token) => {
    return dispatch => {
        dispatch(tablesStart());
        axios.post('https://apps-two-fusion.firebaseio.com/tables.json?auth=' + token, tableData) 
            .then(response => { 
                console.log(response);
                dispatch( tablesSuccess( response.data.name, tableData ) );
            })
            .catch(error => {
                console.log(error);
                dispatch( tablesFail( error ) );
            });
        // console.log(this.props.ingredients);
    };
};

// export const tablesInit = () => {
//     return {
//         type: actionTypes.TABLES_INIT,
//     };
// };