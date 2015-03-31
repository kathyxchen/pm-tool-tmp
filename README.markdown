# STARTUP INSTRUCTIONS: 

Before you can run this project, you will need to install Meteor with Autoparts, and install Meteorite with NPM.

Run the following commands in the Terminal below:

1. `cd pm-tool-tmp`
2. `parts install meteor` (IF YOU HAVEN'T INSTALLED METEOR ALREADY.)
3. `npm install -g meteorite` (If this doesn't work, you may need to do `sudo npm install -g meteorite`)
4. `mrt update`
5. `meteor` (Again, if you used sudo before, do `sudo meteor`)

# VIEW MONGODB DATABASE:

You can view your local mongodb database by running `meteor mongo` (if you used sudo before, this is `sudo meteor mongo`) in a new tab. Note that this only works if the app is already running in a new tab/window. 

This database's contents are saved locally on your laptop. It won't get updated when you push/pull from git, but it will persist whenever you start up your local application. 

See the mongodb and Meteor documentation whenever you need to remove, find, etc. anything in the collections. 


Examples: 
1. If I run `show collections` I can see what collections (this is the same thing as tables in MySQL) are in my mongodb database. 
2. If I run `db.users.find()` any existing users will show up. 
3. These collections are created in the `lib/collections` folder in our application.  



# Microscope

Microscope is a simple social news app that lets you share links, comment, and vote on them.

It was built with [Meteor](http://meteor.com) as a companion app to [The Meteor Book](http://themeteorbook.com), and is the "little brother" of [Telescope](http://telesc.pe), the (much more complex) open-source social news app that was the inspiration for the book.

Microscope itself is free and open-source, and is a good example of common Meteor app patterns such as:

- Routing
- User Accounts
- Notifications
- Errors
- Publications/Subscriptions
- Permissions

## This Repository

The commits to this repository are organized in a very linear fashion, corresponding to progress throughout the book. Commits are tagged in the format `chapterX-Y`, indicating the `Y`th commit of chapter `X`.

Also, note that as the book focuses on _development_, all CSS is committed in a single commit early on.

### Branches

There are 2 branches in this repository which correspond to advanced code that is covered in sidebars of the book, and outside of the main code progression. They are tagged `sidebarX-Y`, corresponding to the sidebar number in the book.

### Developing on Nitrous.IO

Start hacking on this app on
[Nitrous.IO](https://www.nitrous.io/?utm_source=github.com&utm_campaign=Microscope&utm_medium=hackonnitrous)
in seconds:

[![Hack DiscoverMeteor/Microscope on
Nitrous.IO](https://d3o0mnbgv6k92a.cloudfront.net/assets/hack-l-v1-3cc067e71372f6045e1949af9d96095b.png)](https://www.nitrous.io/hack_button?source=embed&runtime=nodejs&repo=DiscoverMeteor%2FMicroscope&file_to_open=README.nitrous.md)

