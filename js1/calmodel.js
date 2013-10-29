calModel= Backbone.Model.extend({
    initialize:function() {
    console.log("an instance of model is created");
    },
    defaults:{
        num1: '',
        operator :"" ,
        prevNum: '',
        sameInput: false,
    }
});