import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showPerson(person){
      console.log("person: ", person);
    }
  }
});
