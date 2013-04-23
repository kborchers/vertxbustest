# OpenShift template for Vert.x 2.0 applications

Example demonstrating how to run the original [Vert.x OpenShift template](https://github.com/purplefox/openshift-vertx) with vert.x-2.0.0-SNAPSHOT.

## How to create your app (with name $name)

Create a new app directory and enter it:
	
	mkdir $name
	cd $name
	git init

Create a new OpenShift application:

	rhc app create -a $name -t diy-0.1

Add MongoDB:

	rhc cartridge add mongodb-2.2 -a $name
	
Use the git url you received in step 2 to add it as a remote repo:

	git remote add origin {your_openshift_git_link}
	
Pull the stuff from OpenShift:

	git pull -s recursive -X theirs origin master
	
Add _this_ repository as new remote:
	
	git remote add template -m master git://github.com/campudus/openshift-vertx.git

Pull locally:

	git pull -s recursive -X theirs template master

Deploy to OpenShift. This will run through all action hooks executing them:

	git push origin master

To read the log, you need to ssh to your app on OpenShift:

	rhc ssh $name
	cat $OPENSHIFT_DIY_LOG_DIR/vert.x.log
