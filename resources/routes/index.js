// :: IMPORT ROUTES
// import usersRoutes from "../../app/Services/PeopleManagement/resources/manageUsers/routes";
import Router from "vue-router";

// :: SET DEFAULT ROUTES
let defaultRoutes = [{
    path: '/',
    component: require('../../Modules/Landing/Resources/').default,
    name: 'Home'
}]

// :: CONCATENATE ROUTES
let routesArray = [];
routesArray = routesArray.concat(defaultRoutes);
// , 

// :: CREATE ROUTES FOR VUE-ROUTER
const routes = routesArray;
export default new Router({
    routes
});