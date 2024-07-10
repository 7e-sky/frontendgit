import agent from "agent";
import axios from "axios";
import _ from '@lodash';

export const CLEAN_UP = '[DEMANDES ACHATS PORTAIL APP] CLEAN_UP';
export const REQUEST_DEMANDES_ACHATS = '[DEMANDES ACHATS PORTAIL APP] REQUEST_DEMANDES_ACHATS';
export const REQUEST_SECTEURS_COUNT = '[DEMANDES ACHATS PORTAIL APP] REQUEST_SECTEURS_COUNT';
export const REQUEST_PAYS_COUNT = '[DEMANDES ACHATS PORTAIL APP] REQUEST_PAYS_COUNT';
export const REQUEST_VILLES_COUNT = '[DEMANDES ACHATS PORTAIL APP] REQUEST_VILLES_COUNT';
export const REQUEST_ACTIVITES_COUNT = '[DEMANDES ACHATS PORTAIL APP] REQUEST_ACTIVITES_COUNT';
export const REQUEST_CATEGORIES_COUNT = '[DEMANDES ACHATS PORTAIL APP] REQUEST_CATEGORIES_COUNT';

export const GET_CATEGORIES_COUNT = '[DEMANDES ACHATS PORTAIL APP] GET_CATEGORIES_COUNT';
export const GET_ACTIVITES_COUNT = '[DEMANDES ACHATS PORTAIL APP] GET_ACTIVITES_COUNT';
export const GET_DEMANDES_ACHATS = '[DEMANDES ACHATS PORTAIL APP] GET_DEMANDES_ACHATS';
export const GET_SECTEURS_COUNT = '[DEMANDES ACHATS PORTAIL APP] GET_SECTEURS_COUNT';
export const GET_PAYS_COUNT = '[DEMANDES ACHATS PORTAIL APP] GET_PAYS_COUNT';
export const GET_VILLES_COUNT = '[DEMANDES ACHATS PORTAIL APP] GET_VILLES_COUNT';
export const SET_PARAMETRES_DATA = '[DEMANDES ACHATS PORTAIL APP] SET PARAMETRES DATA';

export function cleanUp() {

    return (dispatch) => dispatch({
        type: CLEAN_UP,
    });
}

export function getDemandeAchats(params, pays, ville, parametres) {
    const { secteur, activite, categorie } = params;
    let parametre = '';

    if (pays) {
        if (parametre)
            parametre += `&acheteur.pays.slug=${pays}`
        else
            parametre += `acheteur.pays.slug=${pays}`

        if (ville) {
            parametre += `&acheteur.ville.slug=${ville}`
        }
    }

    if (categorie) {
        parametre += `&categories.slug=${categorie}`
    }
    else if (activite) {
        parametre += `&categories.sousSecteurs.slug=${activite}`
    }
    else if (secteur) {
        parametre += `&categories.sousSecteurs.secteur.slug=${secteur}`
    }


    let order = _.split(parametres.filter.id, '-');
    const request = agent.get(`/api/demande_achats?page=${parametres.page}&itemsPerPage=${parametres.itemsPerPage}&statut=1&order[${order[0]}]=${order[1]}` + (parametre ? parametre : ''));

    return (dispatch) => {
        dispatch({
            type: REQUEST_DEMANDES_ACHATS,
        });

        return request.then((response) => {

            dispatch({
                type: GET_DEMANDES_ACHATS,
                payload: response.data
            })

        }

        );
    }

}


export function getSecteursCounts(params, pays, ville) {
    const { secteur, activite } = params;
    const request = agent.get(`/count_demandes_achats_categorie?secteur=${secteur ? secteur : ''}&sousSecteur=${activite ? activite : ''}&pays=${pays ? pays : ''}&ville=${ville ? ville : ''}`);

    return (dispatch) => {
        dispatch({
            type: REQUEST_SECTEURS_COUNT,
        });

        return request.then((response) => {

            dispatch({
                type: GET_SECTEURS_COUNT,
                payload: response.data
            })

        }



        );
    }

}

export function getActivitesCounts(params, pays, ville) {
    const { secteur, activite } = params;
    const request = agent.get(`/count_demandes_achats_categorie?secteur=${secteur ? secteur : ''}&sousSecteur=${activite ? activite : ''}&pays=${pays ? pays : ''}&ville=${ville ? ville : ''}`);

    return (dispatch) => {
        dispatch({
            type: REQUEST_ACTIVITES_COUNT,
        });

        return request.then((response) => {

            dispatch({
                type: GET_ACTIVITES_COUNT,
                payload: response.data
            })

        }



        );
    }

}

export function getCategoriesCounts(params, pays, ville) {
    const { secteur, activite, categorie } = params;
    const request = agent.get(`/count_demandes_achats_categorie?secteur=${secteur ? secteur : ''}&sousSecteur=${activite ? activite : ''}&categorie=${categorie ? categorie : ''}&pays=${pays ? pays : ''}&ville=${ville ? ville : ''}`);

    return (dispatch) => {
        dispatch({
            type: REQUEST_CATEGORIES_COUNT,
        });

        return request.then((response) => {

            dispatch({
                type: GET_CATEGORIES_COUNT,
                payload: response.data
            })

        }



        );
    }

}


export function getPaysCounts(params, pays) {
    const { secteur, activite, categorie } = params;
    const request = agent.get(`/count_demandes_achats_pays?secteur=${secteur ? secteur : ''}&sousSecteur=${activite ? activite : ''}&categorie=${categorie ? categorie : ''}&pays=${pays ? pays : ''}`);

    return (dispatch) => {
        dispatch({
            type: REQUEST_PAYS_COUNT,
        });

        return request.then((response) => {

            dispatch({
                type: GET_PAYS_COUNT,
                payload: response.data
            })

        }



        );
    }

}

export function getVilleCounts(params, pays) {
    const { secteur, activite, categorie } = params;
    const request = agent.get(`/count_demandes_achats_pays?secteur=${secteur ? secteur : ''}&sousSecteur=${activite ? activite : ''}&categorie=${categorie ? categorie : ''}&pays=${pays ? pays : ''}`);

    return (dispatch) => {
        dispatch({
            type: REQUEST_VILLES_COUNT,
        });

        return request.then((response) => {

            dispatch({
                type: GET_VILLES_COUNT,
                payload: response.data
            })

        }



        );
    }

}


export function getSecteursAndPaysCounts() {

    const request = agent.get(`/count_demandes_achats_categorie`);
    const request2 = agent.get(`/count_demandes_achats_pays`);
    return (dispatch) => {
        dispatch({
            type: REQUEST_PAYS_COUNT,
        });
        dispatch({
            type: REQUEST_SECTEURS_COUNT,
        });

        axios.all([request, request2]).then(axios.spread((...responses) => {
            dispatch({
                type: GET_SECTEURS_COUNT,
                payload: responses[0].data
            });
            dispatch({
                type: GET_PAYS_COUNT,
                payload: responses[1].data
            });

            // use/access the results 
        })).catch(errors => {
            // react on errors.
        })
    }

}

export function setParametresData(parametres) {
    return {
        type: SET_PARAMETRES_DATA,
        parametres
    }
}