import _ from 'lodash';

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
    '../dataComponents/SummaryData.jsx'),
  combat: () => import(
    /* webpackChunkName: "combat" */
    /* webpackMode: "lazy" */
    '../dataComponents/CombatData'),
};

function navigate(route, ...args) {
  window.history.pushState({ page: _.findKey(routes, path => path === route), args, }, '', route);
}

const navFunctions = {}
_.forEach(routes, (route, key) => {
  const fnName = _.camelCase(`navigate to ${key}`);
  navFunctions[fnName] = _.partial(navigate, route);
});

export { routes, routeComponents };
export default navFunctions;
