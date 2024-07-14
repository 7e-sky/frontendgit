import agent from "agent";
import FuseUtils from '@fuse/FuseUtils';

import jwtService from 'app/services/jwtService';
import { setUserData } from "app/auth/store/actions";

export const GET_PAYS = '[STEP APP] GET PAYS';
export const GET_VILLES = '[STEP APP] GET VILLES';
export const REQUEST_PAYS = '[STEP APP] REQUEST PAYS';
export const REQUEST_VILLES = '[STEP APP] REQUEST VILLES';
export const REQUEST_UPDATE_FOURNISSEUR = '[STEP APP] REQUEST UPDATE FOURNISSEUR';
export const UPDATE_FOURNISSEUR = '[STEP APP] UPDATE FOURNISSEUR';
export const SAVE_ERROR = '[STEP APP] SAVE ERROR';
export const GET_CURRENCY = '[STEP APP]GET_CURRENCY';

export function getPays() {
    const request = agent.get('/api/pays?pagination=false&props[]=id&props[]=name');

    return (dispatch) => {
        dispatch({
            type: REQUEST_PAYS,
        });
        return request.then((response) => {

            dispatch({
                type: GET_PAYS,
                payload: response.data['hydra:member']
            })
        });

    }

}

export function getCurrency() {
    const request = agent.get('/api/currencies');

    return (dispatch) => {

        return request.then((response) => {

            dispatch({
                type: GET_CURRENCY,
                payload: response.data['hydra:member']
            })
        });

    }

}

export function getVilles(pays_id) {
    const request = agent.get(`${pays_id}/villes?pagination=false&props[]=id&props[]=name`);

    return (dispatch) => {
        dispatch({
            type: REQUEST_VILLES,
        });
        return request.then((response) => {

            dispatch({
                type: GET_VILLES,
                payload: response.data['hydra:member']
            })
        });

    }

}


export function setStep2(data, fournisseur_id, history) {

    if(data.pays)
    data.pays = data.pays.value;
    if(data.ville)
    data.ville = data.ville.value;

    data.redirect = '/register/fournisseur2';
    data.step = 2;

    if(data.currency)
    data.currency = data.currency.value;
    return (dispatch, getState) => {

        const request = agent.put(`/api/fournisseurs/${fournisseur_id}`, data);
        dispatch({
            type: REQUEST_UPDATE_FOURNISSEUR,
        });
        return request.then((response) => {
            jwtService.signInWithToken()
                .then(user => {
                    dispatch({
                        type: UPDATE_FOURNISSEUR,
                    });
                    dispatch(setUserData(user));
                    return history.push(user.redirect ? user.redirect : '/login')
                })
        }
        )
            .catch((error) => {
                dispatch({
                    type: SAVE_ERROR,
                    payload: FuseUtils.parseApiErrors(error)
                });
            });
    };

}

