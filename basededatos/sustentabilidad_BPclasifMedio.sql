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
-- Table structure for table `BPclasifMedio`
--

DROP TABLE IF EXISTS `BPclasifMedio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BPclasifMedio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_h_BPbuenasprac_id` int(11) DEFAULT NULL COMMENT 'Buenas prácticas que aplican a esta ubicación',
  `id_h_CLASmedio_id` int(11) DEFAULT NULL COMMENT 'Ubicaciónes a las que aplica esta buena práctica',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=93 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BPclasifMedio`
--

LOCK TABLES `BPclasifMedio` WRITE;
/*!40000 ALTER TABLE `BPclasifMedio` DISABLE KEYS */;
INSERT INTO `BPclasifMedio` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,5),(5,1,4),(6,3,1),(7,3,2),(9,5,1),(10,5,2),(11,5,3),(12,5,4),(13,5,5),(15,13,1),(49,18,1),(17,8,1),(18,8,2),(20,9,1),(21,9,2),(22,9,3),(23,11,1),(24,11,2),(25,11,3),(26,11,4),(27,11,5),(28,10,1),(30,10,3),(31,10,2),(32,10,4),(33,10,5),(34,12,1),(35,12,2),(54,26,1),(83,31,1),(82,27,2),(39,15,1),(40,15,2),(41,15,4),(42,15,3),(43,15,5),(44,16,1),(45,16,2),(46,16,3),(47,16,5),(48,16,4),(50,18,2),(51,18,3),(52,18,4),(53,18,5),(55,26,2),(56,26,3),(57,26,5),(58,24,1),(59,24,2),(60,23,1),(61,23,2),(62,23,3),(63,23,4),(64,23,5),(65,22,1),(66,21,1),(67,20,1),(68,20,2),(69,27,1),(70,28,1),(71,28,2),(72,28,3),(73,17,1),(74,17,2),(75,30,1),(76,30,2),(77,30,3),(78,30,4),(79,30,5),(80,14,1),(81,14,2),(84,31,2),(85,31,3),(86,31,5),(87,32,1),(88,32,2),(89,32,3),(90,32,4),(91,32,5),(92,33,1);
/*!40000 ALTER TABLE `BPclasifMedio` ENABLE KEYS */;
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
