/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function enviar(){
    
  $.ajax
({
  type: "POST",
  url: "https://onesignal.com/api/v1/notifications",
  dataType: 'json',
  headers: {
    "Authorization": "Basic NDlhY2RiNjItNmEyNC00N2E4LTllZWItYWNhOWQxMGJhY2Fl",
    "Content-Type": "application/json; charset=utf-8"
  },
  data: {appid:'fdedaa5b-95ec-4aba-9870-ba68cc4efb9f',
  contents:{en:'mi mensaje'},
  included_segments:['Subscribed Users']},
  success: function (){
    alert('Mensaje Enviado'); 
  }
});

}

