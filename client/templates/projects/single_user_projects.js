Template.userProjectsList.helpers({
	managed: function() {
		var username = Meteor.user().username;
		return Projects.find({manager: username});
	},

	member: function() {
		var username = Meteor.user().username;
		var userInProjects = Projects.find({users: { $in: [username]}}).fetch();
		var filterOutManagedProjects = [];
		_.each(userInProjects, function(project) {
			if (project.manager != username) {
				filterOutManagedProjects.push(project);
			}
		});
		return filterOutManagedProjects;
	}
});