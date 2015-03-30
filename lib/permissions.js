// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}

memberInProject = function(userId, pm, projectUsers) {
	return (_.contains(projectUsers, userId) || userId == pm);
}