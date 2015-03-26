Projects = new Mongo.Collection('projects');

validateProject = function (post) {
  var errors = {};

  if (!post.name)
    errors.name = "Please name your project.";

  return errors;
};

EasySearch.createSearchIndex('searchUsers', {
  'collection': Meteor.users, // instanceof Meteor.Collection
  'field': ['username'], // array of fields to be searchable
  'limit': 100,
  'use' : 'mongo-db',
  'convertNumbers': true,
  'props': {
    'filteredCategory': 'All',
    'sortBy': 'username'
  },
  'sort': function() {
    if (this.props.sortBy === 'username') {
      return { 'username': 1 };
    }  
  },
  'query': function(searchString, opts) {
    // Default query that will be used for the mongo-db selector
    var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);

    // filter for categories if set
    if (this.props.filteredCategory.toLowerCase() !== 'all') {
      query.category = this.props.filteredCategory;
    }

    return query;
  }
});

EasySearch.createSearchIndex('usersAutosuggest', {
  'collection': Meteor.users, 
  'use' : 'mongo-db',
  'field': ['username'],
  'convertNumbers': true
});


Meteor.methods({
  projectInsert: function(projectAttributes) {
    check(this.userId, String);
    
    check(projectAttributes, {
      createdBy: String,
      manager: String,
      name: String,
      createdDate: Date, 
      users: [Match.Any]
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
  },

  projectAddUser: function(projectId, userId) {
    check(projectId, String);
    check(userId, String);
    return Projects.update(projectId, {$addToSet: {users: userId}});
  }

});
