if (Meteor.isClient) {
	Template.loginPage.events({
		'click li': function() {
			Meteor.Router.to('/project/');
		}
	}); 

	// this part is already done in the helpers/config.js 
	/*
  	Accounts.ui.config({
  		passwordSignupFields: "EMAIL_ONLY"
  	});
  	*/
}

