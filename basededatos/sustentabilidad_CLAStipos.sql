-- MySQL dump 10.13  Distrib 5.6.23, for Win64 (x86_64)
--
-- Host: 192.168.0.244    Database: sustentabilidad
-- ------------------------------------------------------
-- Server version	5.1.63-0ubuntu0.11.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `CLAStipos`
--

DROP TABLE IF EXISTS `CLAStipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CLAStipos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(450) DEFAULT NULL,
  `descripcion` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1 COMMENT='Tipos de obra';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CLAStipos`
--

LOCK TABLES `CLAStipos` WRITE;
/*!40000 ALTER TABLE `CLAStipos` DISABLE KEYS */;
INSERT INTO `CLAStipos` VALUES (1,'Refacciones / reciclajes',NULL),(2,'Viviendas unifamiliares',NULL),(3,'Edificios en altura',NULL),(4,'Edificios Públicos',NULL),(5,'Galpones / naves',NULL),(6,'Plantas productivas',NULL),(8,'Vialidad',NULL),(9,'Redes de infraestructura',NULL);
/*!40000 ALTER TABLE `CLAStipos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-04-11 18:25:10