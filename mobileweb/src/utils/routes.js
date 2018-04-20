import _ from 'lodash';
import { UPDATE_CURRENT_ROUTE } from '../state/clientMutations/updateCurrentRoute';
import client from '../state/ApolloClient';

const routes = {
  summary: '/summary/',
  shortRest: '/short-rest/',
  longRest: '/long-rest/',
  combat: '/combat/',
  spellList: '/combat/spell-list/',
  weaponList: '/combat/weapon-list/',
  combatActions: '/combat/actions/',
  settings: '/settings/',
  inventory: '/inventory/',
  playerDetails: '/player-info/',
  abilities: '/abilities/',
};

const routeComponents = {
  summary: () => import(
    /* webpackChunkName: "summary" */
    /* webpackMode: "lazy" */
    '../dataComponents/SummaryData'),
  combat: () => import(
    /* webpackChunkName: "combat" */
    /* webpackMode: "lazy" */
    '../dataComponents/CombatData'),
  inventory: () => import(
    /* webpackChunkName: "inventory" */
    /* webpackMode: "lazy" */
    '../dataComponents/InventoryData'),
};

function navigate(route, ...args) {
  client.mutate({
    mutation: UPDATE_CURRENT_ROUTE,
    variables: {
      newRoute: route,
      args,
    },
  });
}

const navFunctions = {}
_.forEach(routes, (route, key) => {
  const fnName = _.camelCase(`navigate to ${key}`);
  navFunctions[fnName] = _.partial(navigate, key);
});

export { routes, routeComponents };
export default navFunctions;
