
var postClient = new Meteor.Collection("myGuesstbook");

if(Meteor.isClient) {
    //Sent value to .html
    Template.tem.helpers({
        posts: postClient.find()
    });
    
    //Client: If envet occured, do following operation.
    Template.tem.events({
        
        //For submit icon being clicked...
        "submit form": function(e){
            //Default. Why?
            e.preventDefault();
            
            //Sent data to Data Base. Also the value of id.
            var postDB = {"text":$(e.target).find("[name=Cin]").val(),
                          "author":$(e.target).find("[name=authorName]").val()};
            postDB._id = postClient.insert(postDB);//why insert(postDB) ??
            
            
            $(e.target).find("[name=Cin]").val("");
        }
    });
}

//Server

if(Meteor.isServer) {
    
}