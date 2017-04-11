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
-- Table structure for table `BPclasifFases`
--

DROP TABLE IF EXISTS `BPclasifFases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BPclasifFases` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_h_BPbuenasprac_id` int(11) DEFAULT NULL COMMENT 'Buenas prácticas que aplican a esta fase',
  `id_h_CLASfases_id` int(11) DEFAULT NULL COMMENT 'Fases de la obra a las que aplica esta buena práctica',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=57 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BPclasifFases`
--

LOCK TABLES `BPclasifFases` WRITE;
/*!40000 ALTER TABLE `BPclasifFases` DISABLE KEYS */;
INSERT INTO `BPclasifFases` VALUES (1,1,1),(3,1,2),(7,3,1),(5,3,2),(6,3,3),(8,5,2),(9,5,3),(10,13,3),(11,8,3),(12,9,3),(13,11,3),(14,11,2),(15,10,3),(16,12,3),(17,12,4),(18,15,3),(19,15,1),(21,16,3),(24,18,1),(25,18,2),(26,18,3),(28,26,3),(29,26,2),(30,24,3),(31,23,3),(32,23,2),(33,22,2),(34,22,3),(35,22,4),(36,21,2),(37,21,3),(38,21,4),(39,20,3),(40,27,3),(41,28,2),(42,28,3),(43,28,4),(44,17,3),(45,17,4),(46,17,2),(47,30,3),(48,14,1),(49,14,2),(50,14,3),(51,31,2),(52,31,3),(53,32,3),(54,32,2),(55,33,1),(56,33,2);
/*!40000 ALTER TABLE `BPclasifFases` ENABLE KEYS */;
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
