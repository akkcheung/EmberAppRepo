import DS from 'ember-data';

// export default DS.RESTAdapter.extend({
//export default DS.FixtureAdapter.extend({
export default DS.LSAdapter.extend({
  namespace: 'extending-todomvc'
});
