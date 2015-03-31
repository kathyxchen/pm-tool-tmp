if (Meteor.isClient) {
	Template.loginPage.events({
		'click li': function() {
			Meteor.Router.to('/project/');
		}
	}); 

  	Accounts.ui.config({
  	passwordSingupFields: "EMAIL_ONLY"
  });
}

