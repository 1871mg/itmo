'use strict';

console.log('Задача 1');
var x1 = 1, y1 = 9, x2 = 8, y2 = 10, x3 = 7, y3 = 15; //координаты вершин не прямоугольнгоо треугольника
console.log('Первая координата вершины: x =', x1, ', y =', y1);	
console.log('Вторая координата вершины: x =', x2, ', y =', y2);	
console.log('Третья координата вершины: x =', x3, ', y =', y3);	
/*var x1 = 1, y1 = 2, x2 = 9, y2 = 2, x3 = 9, y3 = 9; //координаты вершин прямоугольнгоо треугольника
console.log('Первая координата вершины: x =', x1, ', y =', y1);	
console.log('Вторая координата вершины: x =', x2, ', y =', y2);	
console.log('Третья координата вершины: x =', x3, ', y =', y3);	*/
var kvdlrebra1 = (x2-x1)*(x2-x1)+(y2-y1)*(y2-y1);
var kvdlrebra2 = (x3-x2)*(x3-x2)+(y3-y2)*(y3-y2);
var kvdlrebra3 = (x1-x3)*(x1-x3)+(y1-y3)*(y1-y3);
console.log('Квадрат длины первого ребра:', kvdlrebra1);	
console.log('Квадрат длины второго ребра:', kvdlrebra2);	
console.log('Квадрат длины третьего ребра:', kvdlrebra3);	
if ((kvdlrebra1 == kvdlrebra2 + kvdlrebra3) ||
	(kvdlrebra2 == kvdlrebra1 + kvdlrebra3) ||
	(kvdlrebra3 == kvdlrebra2 + kvdlrebra1)) {
	console.log('Треугольник - прямоугольный.');
} else console.log('Треугольник - не прямоугольный.');
console.log('------------------------------');

console.log('Задача 2');
var massiv = [3, 6, 2, 67, 2, 7, 90, 786, 222];
console.log(massiv);
var k = massiv.length;
   for (var i = 0; i < k-1; i++) {
   		for (var j = 0; j < k-1-i; j++) {
   			if (massiv[j+1] < massiv[j]) {
   				var t = massiv[j+1]; massiv[j+1] = massiv[j]; massiv[j] = t;
   			}
        }
     } 
console.log(massiv);
console.log('------------------------------');

console.log('Задача 3');
/*var dec = 567;
var abc="012345679".split("")
var result = "";
var arr = abc.slice(0,2);
while (dec > 0) {
		result = String(result) + arr[dec%2];
		dec = Math.floor(dec/2);
}
console.log(result.reverse);*/

console.log('------------------------------');