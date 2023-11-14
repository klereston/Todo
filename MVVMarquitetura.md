Model-View-ViewModel (MVVM) es un patrón de diseño de software
que está estructurado para separar la lógica del programa y los controles de la interfaz de usuario.


Model esta la logica del del programa (casos de uso, repositorios, api, database, etc)
View es responsable por interactuar con el usuario (input i outputs)
VieWModel separa el modelo de la vista:

La vista es la colección de elementos visibles, que también recibe la entrada del usuario. 
Esto incluye interfaces de usuario (UI), animaciones y texto. 
No se interactúa directamente con el contenido de View para cambiar lo que se presenta.
ViewModel se encuentra entre las capas Vista y Modelo. 
Aquí es donde se alojan los controles para interactuar con View, 
mientras que el enlace se usa para conectar los elementos de la interfaz de usuario en View con los controles en ViewModel.
En Modelo la lógica del programa se connecta con ViewModel para recibir la entrada del usuario a través de View.

```ts
VIEW
The view is a plain html file.
<html>
	<head>
		<title>Awesome example about MVVM </title>
	</head>

	<body>
		<input type="text" name = "firstname" id="firstname"><br>
		<input type="text" name = "lastname" id="lastname"><br>
<html>


VIEW_MODEL
Reflect any change of the User from the UI into the model using events to
notify the Model that the UI has changed.

var firstname_input = document.getElementById('firstname');
var lastname_input = document.getElementById('lastname');

firstname_input.addEventListener('input', function(){
  console.log("Hey model, what's up? I changed value bro!");
  console.log("My new value is:" + firstname_input.value);
});


lastname_input.addEventListener('input', function(){
  console.log("Hey model, what's up? I changed value bro!");
  console.log("My new value is:" + lastname_input.value);
});

//==== Observer.js ====//
var callback = function(attribute_name, newValue){
  document.getElementsByName(attribute_name).forEach(function(elem){
    elem.value = newValue;
};
model.subscribe(callback);


MODEL
Has any change from the model to the UI in order to notify the User.
The Model become OBSERVED by the view. 
When an observer wants to subscribe to the model, 
the observer gives a function that the model will store.

var model = function(){
  var _model = {
    'firstname': "dzdzdd",
    'lastname': "Doe"
  };

  var listeners = [];

  this.subscribe = function(listener){
    listeners.push(listener);
  };

  this.notify = function(attribute_name, newValue){
    for(var i = 0; i < listeners.length; i++){
      var callback = listeners[i];
      callback(attribute_name, newValue);
    }
  };
}
```