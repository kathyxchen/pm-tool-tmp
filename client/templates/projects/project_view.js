Template.projectView.helpers({
});

Template.projectView.events({
	'click .project-user-add': function(e, t) {
		user = Meteor.users.find({_id: this._id}).fetch();
		if (user.length > 0) {
			Meteor.call('projectAddUser', t.data._id, user[0]['username'], function(error, result) {
				if (error) {
					return throwError(error.reason);
				} else {
				}
			}); 
		}
   
	}
});
