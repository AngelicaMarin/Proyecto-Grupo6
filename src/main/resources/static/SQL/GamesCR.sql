CREATE DATABASE Gamescr;
use Gamescr;

CREATE TABLE `categorias` (  
`id` int(11) NOT NULL AUTO_INCREMENT,  
`categoria` varchar(50) NOT NULL,  
PRIMARY KEY (`id`)) 
ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
 
INSERT INTO `categorias` VALUES (1,'Videojuegos');
INSERT INTO `categorias` VALUES (2,'Componentes');
INSERT INTO `categorias` VALUES (3,'Perifericos');
INSERT INTO `categorias` VALUES (4,'Consolas');

CREATE TABLE `productos` (  
`id` int(11) NOT NULL AUTO_INCREMENT,  
`producto` varchar(45) NOT NULL,   
`precio` varchar(500) NOT NULL,  
`descripcion` varchar(200) DEFAULT NULL,  
`garantia` varchar(500) NOT NULL,
`cant_disp`  varchar(500) NOT NULL,
`categorias_id` int(200) NOT NULL,  
PRIMARY KEY (`id`,`categorias_id`),  
KEY `fk_productos_categorias_idx` (`categorias_id`),  
CONSTRAINT `fk_productos_categorias` FOREIGN KEY (`categorias_id`) REFERENCES `categorias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ;
 
INSERT INTO `productos` VALUES (1,'350000','Play Station 5','Última consola de videojuegos de Sony, lanzada en noviembre de 2020.','1 año', "20", "4");
INSERT INTO `productos` VALUES (2,'350000','Nintendo Switch 2.0 Neon','Es la nueva versión de la consola de videojuegos híbrida de Nintendo','1 año', "23", "4");
INSERT INTO `productos` VALUES (3,'350000','Xbox Series X','Última consola de videojuegos de Microsoft.','1 año', "30", "2");
 
 CREATE TABLE `usuarios` (  
`id` int(11) NOT NULL AUTO_INCREMENT,  
`nombre` varchar(500) NOT NULL,   
`apellido1` varchar(500) NOT NULL,  
`apellido2` varchar(200) DEFAULT NULL,  
`correo` varchar(500) NOT NULL,
PRIMARY KEY (`id`)
) ;

INSERT INTO `usuarios` VALUES (1, "Ana", "Perez", "Hidalgo", "anap@gmail.com");
INSERT INTO `usuarios` VALUES (1, "Pedro", "Rojas", "Jimenez", "pr28@gmail.com");