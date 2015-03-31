Meteor.publish('userCreatedProjects', function() {
  var username = Meteor.users.findOne({_id: this.userId}, {fields: {'username': 1}}).username;
  return Projects.find({createdBy: username});
});

Meteor.publish('userManagedProjects', function() {
  var username = Meteor.users.findOne({_id: this.userId}, {fields: {'username': 1}}).username;
  return Projects.find({manager: username});
});

Meteor.publish('userJoinedProjects', function() {
  var username = Meteor.users.findOne({_id: this.userId}, {fields: {'username': 1}}).username;
  return Projects.find({users: { $in: [username]}});
});

Meteor.publish('projects', function() {
  return Projects.find({});
});

Meteor.publish('posts', function(options) {
  check(options, {
    sort: Object,
    limit: Number
  });
  return Posts.find({}, options);
});

Meteor.publish('singlePost', function(id) {
  check(id, String);
  return Posts.find(id);
});

Meteor.publish('singleProject', function(id) {
  check(id, String);
  return Projects.find(id);
});

Meteor.publish('comments', function(postId) {
  check(postId, String);
  return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId, read: false});
});

Meteor.publish("allUsers", function () {
    return Meteor.users.find({}, {fields: {'username': 1}});
});
