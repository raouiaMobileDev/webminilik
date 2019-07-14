import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const AddPub = React.lazy(() => import('./views/Base/AddPub'));
const DeletePub = React.lazy(() => import('./views/Base/DeletePub'));
const AddRestaurant = React.lazy(() => import('./views/Buttons/AddRestaurant'));
const AddPlat = React.lazy(() => import('./views/Buttons/AddPlat'));
const AddCategory= React.lazy(() => import('./views/Buttons/AddCategory'));
const Command = React.lazy(() => import('./views/Command/Command'));



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [

  { path: '/base/AddPub', name: 'AddPub', component: AddPub },
  { path: '/base/DeletePub', name: 'DeletePub', component: DeletePub },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/AddRestaurant', name: 'AddRestaurant', component: AddRestaurant },
  { path: '/buttons/AddPlat', name: 'AddPlat', component: AddPlat},
  { path: '/buttons/AddCategory', name: 'AddCategory', component: AddCategory},



];

export default routes;
