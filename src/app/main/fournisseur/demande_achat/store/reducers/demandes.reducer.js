import * as Actions from '../actions';
import FuseUtils from '@fuse/FuseUtils';

const initialState = {
    data: [],
    pageCount: null,
    loading: false,
    error: true,
    searchText: '',
    parametres: {
        page: 1,
        search: [],
        description: '',
        filter: {
            id: 'created',
            direction: 'desc'
        }
    },
};

const demandesReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.REQUEST_DEMANDES:
            {
                return {
                    ...state,
                    loading: true,
                    error: false,

                };
            }
        case Actions.ERROR_404:
            {
                return {
                    ...state,
                    loading: false,
                    error: true,
                };
            }
        case Actions.ERRORS:
            {
                return {
                    ...state,
                    loading: false
                };
            }
        case Actions.GET_DEMANDES:
            {
                return {
                    ...state,
                    data: action.payload['hydra:member'],
                    pageCount: FuseUtils.hydraPageCount(action.payload),
                    loading: false
                };
            }
        case Actions.SET_DEMANDES_SEARCH_TEXT:
            {
                return {
                    ...state,
                    searchText: action.searchText
                };
            }
        case Actions.SET_PARAMETRES_DATA:
            {
                return {
                    ...state,
                    parametres: {
                        page: action.parametres.page,
                        search: action.parametres.search,
                        description: action.parametres.description,
                        filter: {
                            id: action.parametres.filter.id,
                            direction: action.parametres.filter.direction
                        }
                    }

                };
            }
        default:
            {
                return state;
            }
    }
};

export default demandesReducer;
