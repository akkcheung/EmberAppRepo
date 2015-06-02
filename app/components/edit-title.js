import Ember from 'ember';

// export default Ember.Component.extend({
export default Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});
