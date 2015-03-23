Template.projectSubmit.created = function() {
  Session.set('projectSubmitErrors', {});
}

Template.projectSubmit.helpers({
  errorMessage: function(field) {
    return Session.get('projectSubmitErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('projectSubmitErrors')[field] ? 'has-error' : '';
  }
});

Template.projectSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var project = {
      name: $(e.target).find('[name=project-name]').val(),
    };
    
    var errors = validateProject(project);
    if (errors.name)
      return Session.set('projectSubmitErrors', errors);
    
    // later on, might want to change the created by and manager to a name instead of username
    projectAttr = _.extend(project, {
      createdBy: Meteor.user().username,
      manager: Meteor.user().username,
      createdDate: new Date()
    });

    Meteor.call('projectInsert', project, function(error, result) {
      // display the error to the user and abort
      if (error)
        return throwError(error.reason);
      
      // show this result but route anyway
      if (result.projectExists)
        throwError('This project has already been created');
      
      Router.go('projectView', {_id: result._id});  
    });
  }
});