import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    inputTest() {
      let test = $(this);
      console.log(test);
    },
    submitConfirm() {
      alert("Are you sure you want to submit?")
    }
  }
});
