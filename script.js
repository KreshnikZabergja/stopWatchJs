var querySelectorclass = document.querySelector('.class');
var buttonClass= document.querySelector('.button_class');

buttonClass.addEventListener('click', function(){
    querySelectorclass.textContent = "Works";
})

var querySelectorId = document.querySelector('#id_query');
var buttonId= document.querySelector('.button_id_query');

buttonId.addEventListener('click', function(){
    querySelectorId.textContent="Works";
})

var get_element_id = document.getElementById('id');
var button_id =document.querySelector('.button_id');

button_id.addEventListener('click', function(){
    get_element_id.textContent = "Works";
})