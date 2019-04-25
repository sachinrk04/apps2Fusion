import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    tables: [],
    loading: false,
    error: null,
    sourceTables: [
        {
          userId: null,
          first_name: null,
          last_name: null,
          date_of_birth: null,
          joining_date: null,
          qualification: null,
          role: null,
        }
      ],
};

const tablesStart = (state, action) => {
    return updateObject(state, {loading: true, error: null});
};

const tablesSuccess = (state, action) => {
    // const newTables = updateObject(action.tableData, {id: action.tableId});
    return updateObject(state, {
        loading: false,
        error: null,
        tables: state.tables,
        sourceTables: [{
            ...state.sourceTables,
            userId: action.userId,
            first_name: action.first_name,
            last_name: action.last_name,
            date_of_birth: action.date_of_birth,
            joining_date: action.joining_date,
            qualification: action.qualification,
            role: action.role,
        }]
        // tables: state.tables.concat(newTables)
    });
};

const tablesFail = (state, action) => {
    return updateObject(state, {loading: false, error: action.error});
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