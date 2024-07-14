import React from 'react';
import { Icon,   Typography, Button} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import {useDispatch} from 'react-redux';
import * as Actions from './store/actions';

function VillesHeader(props)
{
    const dispatch = useDispatch();

    return (
         <div className="flex flex-1 items-center justify-between p-8 sm:p-24">

                <div className="flex items-center">
                    <FuseAnimate animation="transition.expandIn" delay={300}>
                        <Icon className="text-32 mr-0 sm:mr-12">location_city</Icon>
                    </FuseAnimate>
                    <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                        <Typography className="hidden sm:flex" variant="h6">Gestion des Villes</Typography>
                    </FuseAnimate>
                </div>

                <div className="flex flex-1 items-center justify-center px-12">

                    
                    

                </div>
                <FuseAnimate animation="transition.slideRightIn" delay={300}>
                    <Button onClick={ev => dispatch(Actions.openNewVillesDialog())} className="whitespace-no-wrap" variant="contained">
                        <span className="hidden sm:flex">Ajouter nouvelle Ville</span>
                        <span className="flex sm:hidden">New</span>
                    </Button>
                </FuseAnimate>
            </div>

        
    );
}

export default VillesHeader;
