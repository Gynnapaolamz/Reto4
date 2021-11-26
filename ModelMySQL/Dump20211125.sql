-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: restaurante
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `nombreusuario` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,'Juan','Gynna le mando a Juan','Gynna y Juan','123456');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentario`
--

DROP TABLE IF EXISTS `comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comentario` varchar(45) DEFAULT NULL,
  `Cliente_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Comentario_Cliente1_idx` (`Cliente_id`),
  CONSTRAINT `fk_Comentario_Cliente1` FOREIGN KEY (`Cliente_id`) REFERENCES `cliente` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentario`
--

LOCK TABLES `comentario` WRITE;
/*!40000 ALTER TABLE `comentario` DISABLE KEYS */;
/*!40000 ALTER TABLE `comentario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleado`
--

DROP TABLE IF EXISTS `empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleado` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `Restaurante_id` int NOT NULL,
  PRIMARY KEY (`id`,`Restaurante_id`),
  KEY `fk_Empleado_Restaurante_idx` (`Restaurante_id`),
  CONSTRAINT `fk_Empleado_Restaurante` FOREIGN KEY (`Restaurante_id`) REFERENCES `restaurante` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleado`
--

LOCK TABLES `empleado` WRITE;
/*!40000 ALTER TABLE `empleado` DISABLE KEYS */;
INSERT INTO `empleado` VALUES (1,'Juan Manuel Gómez B.','Chef ejecutivo','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/personal1%402x.png?alt=media&token=4a4e74dd-abc5-4816-9f6c-007c5d0f39a7',1),(2,'Ana Isabel Casallas B.','Chef pastelera','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/personal2%402x.png?alt=media&token=f70a7f11-ca72-43d4-a68a-907248bceea1',1),(3,'María Paulina Veloza G.','Administradora','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/personal3%402x.png?alt=media&token=1aee5927-4782-4eb2-a955-0d5ed74b89ac',1),(4,'Camila Andrea Diaz Z.','Recepcionista','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/personal4%402x.png?alt=media&token=b2ee8130-1893-4109-ad54-8e066e752ea0',1),(5,'Fabián Andres Jaramillo P.','Mesero','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/personal5%402x.png?alt=media&token=843abacb-06e7-4937-aefe-69f64fdb17c1',1),(6,'José Manuel Manosalva J.','Mesero','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/personal6%402x.png?alt=media&token=bf96deda-c96f-4458-a9c8-6c122adb31d2',1),(9,'prueba','prueba','prueba',1),(15,'2021/11/25','dede','frefefre',1);
/*!40000 ALTER TABLE `empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fecha` datetime DEFAULT NULL,
  `Plato_id` int NOT NULL,
  `Cliente_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Pedido_Plato1_idx` (`Plato_id`),
  KEY `fk_Pedido_Cliente1_idx` (`Cliente_id`),
  CONSTRAINT `fk_Pedido_Cliente1` FOREIGN KEY (`Cliente_id`) REFERENCES `cliente` (`id`),
  CONSTRAINT `fk_Pedido_Plato1` FOREIGN KEY (`Plato_id`) REFERENCES `plato` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
INSERT INTO `pedido` VALUES (1,'2021-11-25 00:00:00',3,1);
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plato`
--

DROP TABLE IF EXISTS `plato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plato` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `Restaurante_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Plato_Restaurante1_idx` (`Restaurante_id`),
  CONSTRAINT `fk_Plato_Restaurante1` FOREIGN KEY (`Restaurante_id`) REFERENCES `restaurante` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plato`
--

LOCK TABLES `plato` WRITE;
/*!40000 ALTER TABLE `plato` DISABLE KEYS */;
INSERT INTO `plato` VALUES (1,'Calamar en salsa','Calamares bañados en salsa Americana, acompañado de verdura salteada y una base de queso crema.','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/calamar-en-salsa.jpg?alt=media&token=b1b7587b-da5f-4d2c-b76a-845f366ea0e2',30000,1),(2,'Camarones','Camarones fritos acompañados de salsa de la casa y papas.','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/camarones.jpg?alt=media&token=5f17383a-ceb2-4fc2-8a47-ca5a00d2fa27',30000,1),(3,'Cazuela de mariscos','Cazuela de mariscos compuesta por Calamar, Camarón, Pulpo, Cangrejo, ostras y pescado.','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/cazuela-mariscos.jpg?alt=media&token=1d103887-c9b7-4d16-95de-ef773033f469',48000,1),(4,'Cerdo agridulce','Fino lomo de cerdo, bañado en salsa teriyaki, acompañada de pure de papa y romero.','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/cerdo-agridulce.jpg?alt=media&token=47987dda-ca68-45bc-b3c4-a825e4be90e6',25000,1),(5,'Ceviche de camaron','Camarones frescos, acompañados de una salsa especial, perfecto para tus entradas.','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/ceviche-camaron.jpg?alt=media&token=caee4190-8c3d-403c-ba38-392218d873f8',32000,1),(6,'Costilla de cerdo','Costilla de cerdo preparada en jugo de naranja, romero y ajo, salteada en salsa teriyaki.','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/costilla-de-cerdo.jpg?alt=media&token=0d7c7bc1-e8ff-4ccc-b65b-6d2cb71ee937',28000,1),(7,'Mariscos','Mezcla de mariscos bañados en su jugo, acompañados de pequeños trozos de verduras.','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/mariscos.jpg?alt=media&token=7784a76b-273e-4d73-b159-3e3a7ea81f8f',50000,1),(8,'Paella de camarones','Paella elaborada con los mejores mariscos, contiene almejas, mejillones, palmitos, camarón y pescado.','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/paella-de-camarones.jpg?alt=media&token=000a65f8-068d-4adf-8513-d60472346d3f',38000,1),(9,'Pasta al camaron','Spaghetti con salsa cremosa, acompañada de camarón al ajillo.','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/pasta-al-camaron.jpg?alt=media&token=0b8da4ae-1dea-4de6-ad38-41e91bb8cf2a',45000,1),(10,'Pollo marinado','Pechuga de pollo, bañada en salsa marinada, salteada y acompañada con vegetales.','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/pollo-marinado.jpg?alt=media&token=8c25a6df-a4d1-4f9a-8e31-a949f88803df',55000,1),(11,'Rollos de atun','Rollos de atún previamente seleccionado, cubierto por una capa crocante, acompañado de rollos de hojalde y queso.','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/rollos-de-atun.jpg?alt=media&token=6e5f3909-b208-4d7a-8fdd-bcf809d20a13',60000,1),(12,'Tarta de salmon','Salmon acompañado de aguacate, queso crema y bañado en la salsa de la casa.','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/tarta-de-salmon.jpg?alt=media&token=868f1e40-e0cc-4311-8277-ba6d1f9ae471',52000,1),(13,'Calamar en salsa','Calamares bañados en salsa Americana, acompañado de verdura salteada y una base de queso crema.','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/calamar-en-salsa.jpg?alt=media&token=b1b7587b-da5f-4d2c-b76a-845f366ea0e2',30000,1);
/*!40000 ALTER TABLE `plato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preguntas`
--

DROP TABLE IF EXISTS `preguntas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preguntas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(1000) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `Cliente_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Preguntas_Cliente_id_idx` (`Cliente_id`),
  CONSTRAINT `fk_preguntas_cliente1` FOREIGN KEY (`Cliente_id`) REFERENCES `cliente` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preguntas`
--

LOCK TABLES `preguntas` WRITE;
/*!40000 ALTER TABLE `preguntas` DISABLE KEYS */;
INSERT INTO `preguntas` VALUES (1,'¿Como se llama el restaurante','2021-11-24',1),(2,'¿Cuál es su historia?','2021-11-24',1),(3,'SI me gusto el plato','2021-11-24',1);
/*!40000 ALTER TABLE `preguntas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reserva`
--

DROP TABLE IF EXISTS `reserva`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reserva` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  `Cliente_id` int NOT NULL,
  `Servicio_id` int NOT NULL,
  `estado` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Reserva_Cliente1_idx` (`Cliente_id`),
  KEY `fk_Reserva_Servicio1_idx` (`Servicio_id`),
  CONSTRAINT `fk_Reserva_Cliente1` FOREIGN KEY (`Cliente_id`) REFERENCES `cliente` (`id`),
  CONSTRAINT `fk_Reserva_Servicio1` FOREIGN KEY (`Servicio_id`) REFERENCES `servicio` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reserva`
--

LOCK TABLES `reserva` WRITE;
/*!40000 ALTER TABLE `reserva` DISABLE KEYS */;
INSERT INTO `reserva` VALUES (1,'2021-11-25',1,2,'pendiente'),(2,'2021-11-25',1,2,'pendiente');
/*!40000 ALTER TABLE `reserva` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurante`
--

DROP TABLE IF EXISTS `restaurante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurante` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurante`
--

LOCK TABLES `restaurante` WRITE;
/*!40000 ALTER TABLE `restaurante` DISABLE KEYS */;
INSERT INTO `restaurante` VALUES (1,'SAL & SALSA','Esto es un restaurante de alta calidad');
/*!40000 ALTER TABLE `restaurante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicio`
--

DROP TABLE IF EXISTS `servicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicio`
--

LOCK TABLES `servicio` WRITE;
/*!40000 ALTER TABLE `servicio` DISABLE KEYS */;
INSERT INTO `servicio` VALUES (1,'Celebraciones de cumpleaños','Celebraciones de cumpleaños','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/Cumple.jpeg?alt=media&token=0bf761be-f0b1-4f59-aa1a-ec1940a6d75b'),(2,'Aniversario','Aniversario','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/aniversario.jpeg?alt=media&token=12b31dbe-9a7d-4ece-b5e2-6cee8504801c'),(3,'Fiestas infantiles','Fiestas infantiles','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/fiesta_infantil.jpeg?alt=media&token=c0807468-8e1f-45d1-ad79-dce52eb54e31'),(4,'Declaraciones o apuestas','Declaraciones o apuestas','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/declaracion.jpeg?alt=media&token=0aa9de81-28fc-4fc4-ba0a-2e94de8b4a7b'),(5,'Despedidas','Despedidas','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/despedidas.jpeg?alt=media&token=7aae5ab9-ec1f-45cf-823f-e4549438b267'),(6,'Cena de amigos','Cena de amigos','https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/cena.jpeg?alt=media&token=48198771-4530-4a53-ba68-4efbce2b3970');
/*!40000 ALTER TABLE `servicio` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-25 20:04:50
