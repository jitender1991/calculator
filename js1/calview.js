calView =Backbone.View.extend({
  initialize:function() {
  console.log("an instance of view is created");
   this.$el = $('#mainContainer');
   //this.model.on('change',this.render);
  },
  events: {
        'click .button' : 'buttonpressed',
        'click .clr'  :  'reset'
  },
  buttonpressed:function(e){
  var value=  e.target.id;
  this.setOpAndNum(value);
  },


  
  setOpAndNum:function(num){
    if(num!=="+" && num!=="/" && num!=="*" && num!=="-" && num!== "="){
        var existingVal = this.model.get('num1');
        if(existingVal !== '' && this.model.get('sameInput') === true) {
            existingVal = existingVal + num;
            this.model.set({'num1': existingVal});
            $('#textbox').val(existingVal);
          }
          else{
              this.model.set({'num1': num});
              $('#textbox').val(num);
          }
        this.model.set({sameInput: true});
    }
    else  if (num=="+" || num=="/" || num=="*" || num=="-" ||num == "=" ){
          this.model.set({sameInput: false});
          var existingVal = this.model.get('num1');
          var prevVal= this.model.get('prevNum');
          var op=this.model.get("operator");
          switch(num){
              case"+":{
                  if(prevVal !== '' && existingVal !== '' ) {
                      this.model.set({operator:"+"});
                      this.calresult(op);
                  }else if(existingVal !== '') {
                          this.model.set({'prevNum': existingVal, operator:"+"});
                  }
                  else if(existingVal == ''){
                  this.model.set({operator:"+"});   
                  }
                
                   break;
              }    
    
              case "-":{
                    if(prevVal !== '' && existingVal !== '' ) {
                      this.model.set({operator:"-"});
                      this.calresult(op);
                      }else if(existingVal !== '') {
                      this.model.set({'prevNum': existingVal, operator:"-"});
                      }
                      else if(existingVal == ''){
                      this.model.set({operator:"-"}); 
                      }  
                      break;
              }
              case "/":{
                    if(prevVal !== '' && existingVal !== '' ){
                       this.model.set({operator:"/"});
                        this.calresult(op);
                    } else if(existingVal !== '') {
                    this.model.set({'prevNum': existingVal, operator:"/"});
                    }
                    else if(existingVal == ''){
                    this.model.set({operator:"/"});   
                    }  
                    break;
                }
              case "*":{
                    if(prevVal !== '' && existingVal !== '' ) {
                        this.model.set({operator:"*"});
                        this.calresult(op);
                    }
                    else if(existingVal !== '') {
                            this.model.set({'prevNum': existingVal, operator:"*"});
                    }
                    else if(existingVal == ''){
                    this.model.set({operator:"*"});   
                    }  
                    break;
                }
              case "=" :{
                   if(prevVal !== '' && existingVal !== '') {
                        switch(op){
                            case "+" :{
                                var result = parseFloat(prevVal) + parseFloat(existingVal) ;
                                $('#textbox').val(result);
                                console.log(result);
                                this.model.set({operator:"=",num1:"" , prevNum:result});
                                break;
                            }
                            case "-" :{
                                result = parseFloat(prevVal) - parseFloat(existingVal) ;
                                $('#textbox').val(result);
                                console.log(result);
                                this.model.set({operator:"=",num1:"", prevNum:result});
                                break;
                            }
                            case "/" :{
                                result = parseFloat(prevVal)/parseFloat(existingVal) ;
                                console.log(result);
                                $('#textbox').val(result);
                                this.model.set({operator:"=" , num1:" " , prevNum:result});
                                break;
                            }
                            case "*" :{
                                result= parseFloat(prevVal) * parseFloat(existingVal) ;
                                console.log(result);
                                $('#textbox').val(result);
                                this.model.set({operator:"=", num1:"" , prevNum:result});
                                break;
                            }
                        }
                    }else if(existingVal !== '') {
                        this.model.set({'prevNum': existingVal, operator:"="});
                    }
                    break;
               }
              }
    }
    console.log(this.model.attributes);
  },
  
   calresult:function(op){
    var existingVal = this.model.get('num1');
    var prevVal= this.model.get('prevNum');
    switch(op){
                case "+" :{
                  var result = parseFloat(prevVal) + parseFloat(existingVal) ;
                  console.log(result);
                  $('#textbox').val(result);
                  this.model.set({ prevNum:result,num1:''});
                  break ;
                  }
                case "-" :{
                  result = parseFloat(prevVal) - parseFloat(existingVal) ;
                  console.log(result);
                  $('#textbox').val(result);
                  this.model.set({ prevNum:result,num1:''});
                   break;
                  }
                  case "/" :{
                  result = parseFloat(prevVal)/parseFloat(existingVal) ;
                  console.log(result);
                  $('#textbox').val(result);
                  this.model.set({ prevNum:result,num1:''});
                  break;
                  }
                case "*" :{
                  result= parseFloat(prevVal) * parseFloat(existingVal) ;
                  console.log(result);
                  $('#textbox').val(result);
                  this.model.set({ prevNum:result,num1:''});
                  break;
                  }
    }
  },

  reset:function(){
    this.model.set({num1:"",prevNum:"",operator:"",sameInput:false});
    $('#textbox').val("");
    console.log(this.model.attributes);
  },

  render: function(){
  }
});
