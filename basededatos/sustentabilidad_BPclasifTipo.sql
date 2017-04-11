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
-- Table structure for table `BPclasifTipo`
--

DROP TABLE IF EXISTS `BPclasifTipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BPclasifTipo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_h_BPbuenasprac_id` int(11) DEFAULT NULL COMMENT 'Buenas prácticas asociadas a este tipo de obra',
  `id_h_CLAStipos_id` int(11) DEFAULT NULL COMMENT 'Tipos de obra a los que aplica una buena práctica',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=131 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BPclasifTipo`
--

LOCK TABLES `BPclasifTipo` WRITE;
/*!40000 ALTER TABLE `BPclasifTipo` DISABLE KEYS */;
INSERT INTO `BPclasifTipo` VALUES (1,1,2),(2,1,3),(3,1,4),(4,1,1),(5,3,3),(6,3,4),(7,5,3),(8,5,4),(9,5,2),(10,5,1),(11,5,5),(15,13,3),(17,13,5),(16,13,4),(18,13,2),(19,13,1),(20,8,3),(21,8,4),(22,9,2),(23,9,3),(24,9,4),(25,9,5),(26,9,6),(27,11,3),(28,11,5),(29,11,4),(33,10,3),(31,11,6),(34,10,4),(35,10,5),(36,10,6),(37,12,3),(38,12,4),(39,12,5),(40,12,6),(41,12,2),(42,12,9),(43,12,8),(44,12,1),(45,15,1),(46,15,2),(47,15,3),(48,15,4),(49,15,5),(50,15,6),(52,15,8),(53,15,9),(54,16,3),(55,16,4),(56,16,2),(57,16,5),(58,16,6),(60,18,2),(61,18,3),(62,18,1),(63,18,4),(64,18,5),(66,18,6),(69,26,2),(70,26,3),(72,26,4),(73,24,3),(74,24,4),(75,23,3),(76,23,4),(77,23,5),(78,23,6),(79,22,3),(80,22,4),(81,21,3),(82,21,4),(83,20,3),(84,20,4),(85,20,2),(87,20,8),(88,20,9),(89,27,3),(90,28,2),(91,28,3),(92,28,4),(93,28,5),(94,28,6),(95,28,8),(96,28,9),(97,28,1),(98,17,3),(99,17,4),(102,30,2),(101,17,2),(103,30,1),(104,30,3),(105,30,4),(106,30,5),(107,30,6),(108,30,8),(109,30,9),(110,14,2),(111,14,1),(112,14,3),(113,14,4),(116,31,4),(115,31,3),(117,31,5),(118,31,8),(119,31,9),(120,32,3),(121,32,4),(122,32,5),(123,32,6),(124,32,8),(125,32,9),(126,33,1),(127,33,3),(128,33,4),(129,33,8),(130,33,9);
/*!40000 ALTER TABLE `BPclasifTipo` ENABLE KEYS */;
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
