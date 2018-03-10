function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}

getfile("resources/data.json",function(text){
  let data = JSON.parse(text);
  console.log(data);
  carrier(data.carrier);
})

function carrier(info){
  var right_child=document.querySelector(".content_child");
  var h2=document.createElement("h2");
  h2.textContent="CAREER OJECTIVE";
  right_child.appendChild(h2);
  var hr=document.createElement("hr");
  right_child.appendChild(hr);
  var carrier_info=document.createElement("p");
  carrier_info.textContent=info.objective;
  right_child.appendChild(carrier_info);
}
