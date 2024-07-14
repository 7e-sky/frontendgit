import React from 'react';

export const newsConfig = {
    settings: {
        layout: {
            style: 'layout3',
            config: {
                mode: 'container',
                navbar: {
                    display: false
                },
                toolbar: {
                    display: true
                },
                footer: {
                    display: true,
                    style: 'static'
                },
                leftSidePanel: {
                    display: false
                },
                rightSidePanel: {
                    display: false
                }
            }
        },
        theme: {
            main: 'greeny',
        },
    },

    routes: [
        {
            path: '/actualite/:id-:slug',
            exact: true,
            component: React.lazy(() => import('./detailNews/NewApp'))
        },
        {
             path: '/actualites/:secteur?/:activite?',
             exact: true,
             component: React.lazy(() => import('./news/NewsApp'))
        }
    ]
};

