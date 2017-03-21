const Widgets = new Mongo.Collection('widgets');

Meteor.methods({
  'widgets.fetch'() { return Widgets.find().fetch(); },
  'widgets.insert'(data) { return Widgets.insert(data); }
})

export default Widgets;
