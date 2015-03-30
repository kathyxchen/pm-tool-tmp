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
		var instance = EasySearch.getComponentInstance(
		  { id : "user-search-bar", index : "searchUsers" }
		);

		instance.clear();
		$("#user-search-bar").val("");
	},

	'click .remove-user': function(e, t) {
		Meteor.call('projectRemoveUser', t.data._id, e.target.id, function(error, result) {
			if (error) {
				return throwError(error.reason);
			}
		});
	}
});

Template.projectView.created = function () {
  var instance = EasySearch.getComponentInstance(
    { id : "user-search-bar", index : "searchUsers" }
  );
  /*
  instance.on('searchingDone', function (searchingIsDone) {
    searchingIsDone && console.log('I am done!');
  });
  */
  instance.on('currentValue', function (val) {
    console.log('The user searches for ' + val);
  });
}


