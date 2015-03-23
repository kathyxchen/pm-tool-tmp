Projects = new Mongo.Collection('projects');

validateProject = function (post) {
  var errors = {};

  if (!post.name)
    errors.name = "Please name your project.";

  return errors;
};

Meteor.methods({
  projectInsert: function(projectAttributes) {
    check(this.userId, String);
    
    check(projectAttributes, {
      createdBy: String,
      manager: String,
      name: String,
      createdDate: Date
    });
    
    // check for duplicate project
    var project = Projects.findOne(projectAttributes.name);

    if (project) {
      var timeToday = new Date();
      var projDate = project.createdDate;
      if  (projDate.getYear() == timeToday.getYear() && projDate.getMonth() == timeToday.getMonth()) {
        throw new Meteor.Error('duplicate-project', 'Project name has already been used this semester.');
        return {
          projectExists: true,
          _id: project._id
        };
      }
    }
    
    projectAttributes._id = Projects.insert(projectAttributes);
    
    return { _id: projectAttributes._id };
  }

});
