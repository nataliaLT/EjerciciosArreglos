var dinosaurs = []; //arreglo vacio
//arreglando elementos a mi array
dinosaurs[0]= 'Tiranosaurio Rex';
dinosaurs[1]= 'Velociraptor';
dinosaurs[2]='Triceratops';
dinosaurs[3]='Estegosaurio';
dinosaurs[4]= 'Troodon';
dinosaurs[5]= 'Estiracosaurio';

//para cambiar un elemento de mi array
dinosaurs[0]= 'T-Rex'

//para añadir un elemento en el indice 33
//los elementos que estan entre el elemento 5 y el 33 son undefined, porque no hay nada en esas posiciones
dinosaurs[33]= 'Philosoraptor'
console.log(dinosaurs);