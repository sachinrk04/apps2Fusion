import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    tables: [],
    loading: false,
};

const tablesStart = (state, action) => {
    return updateObject(state, {loading: false});
};

const tablesSuccess = (state, action) => {
    const newTables = updateObject(action.tableData, {id: action.tableId});
    return updateObject(state, {
        loading: false,
        tables: state.tables.concat(newTables)
    });
};

const tablesFail = (state, action) => {
    return updateObject(state, {loading: false});
};

// const tablesInit = (state, action) => {
//     return updateObject(state, {purchased: false});
// };


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TABLES_START: return tablesStart(state, action);
        case actionTypes.TABLES_SUCCESS: return tablesSuccess(state, action);            
        case actionTypes.TABLES_FAIL: return tablesFail(state, action);   
        // case actionTypes.TABLES_INIT: return tablesInit(state, action); 
        default: return state;
    }
};

export default reducer;