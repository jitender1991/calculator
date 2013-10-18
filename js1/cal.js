$(document).ready(function(){
    $('#equalTo').on('click',function(){
        var x=$(this).data('ele');
        displayResult(x);
    });
});
function displayResult(x) {
    
    var id = eval(x);
    n=eval(id.value);
    id.value=n;
};

