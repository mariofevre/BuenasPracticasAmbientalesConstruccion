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
-- Table structure for table `BPclasifEscala`
--

DROP TABLE IF EXISTS `BPclasifEscala`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BPclasifEscala` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_h_BPbuenasprac_id` int(11) DEFAULT NULL,
  `id_h_CLASescalas_id` int(11) DEFAULT NULL COMMENT 'Escalas de obra a las que aplica esta buena práctica',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=65 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BPclasifEscala`
--

LOCK TABLES `BPclasifEscala` WRITE;
/*!40000 ALTER TABLE `BPclasifEscala` DISABLE KEYS */;
INSERT INTO `BPclasifEscala` VALUES (6,3,2),(4,1,2),(5,1,5),(7,3,2),(11,5,2),(12,5,5),(13,13,2),(14,13,5),(15,8,2),(16,8,5),(17,9,2),(18,9,5),(19,9,1),(20,11,2),(21,11,5),(22,10,2),(23,10,5),(24,12,5),(25,12,2),(26,15,1),(27,15,2),(28,15,5),(29,16,2),(30,16,5),(31,18,2),(32,18,5),(33,26,2),(34,26,5),(35,24,2),(36,24,5),(37,23,5),(38,22,2),(39,22,5),(40,21,5),(41,21,2),(43,20,2),(44,20,5),(45,27,1),(46,27,2),(47,27,5),(48,28,2),(49,28,5),(51,17,2),(52,17,5),(53,30,1),(54,30,2),(55,30,5),(56,14,2),(57,14,5),(58,24,1),(59,31,2),(60,31,5),(61,32,2),(62,32,5),(63,33,2);
/*!40000 ALTER TABLE `BPclasifEscala` ENABLE KEYS */;
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
