function app(){
  console.log("app starting");
  var  Mcal= new calModel();
  var Vcal = new calView({model:Mcal});
  console.log(Mcal , Vcal);
  
};