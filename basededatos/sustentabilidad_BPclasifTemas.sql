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
-- Table structure for table `BPclasifTemas`
--

DROP TABLE IF EXISTS `BPclasifTemas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BPclasifTemas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_h_BPbuenasprac_id` int(11) DEFAULT NULL COMMENT 'Buenas prácticas que aplican a este Tema',
  `id_h_CLAStemas_id` int(11) DEFAULT NULL COMMENT 'Temas asociados a esta buena práctica',
  `predominancia` int(5) DEFAULT NULL COMMENT 'prenominancia del tema en esta BPA',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=121 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BPclasifTemas`
--

LOCK TABLES `BPclasifTemas` WRITE;
/*!40000 ALTER TABLE `BPclasifTemas` DISABLE KEYS */;
INSERT INTO `BPclasifTemas` VALUES (93,1,6,1),(96,8,11,1),(97,3,6,1),(98,9,6,1),(99,11,11,1),(100,10,6,1),(101,12,11,1),(102,13,11,1),(103,14,6,1),(104,15,8,1),(105,16,6,1),(106,17,8,1),(107,18,8,1),(108,20,11,1),(109,21,11,1),(110,22,12,1),(111,23,6,1),(112,24,11,1),(113,25,6,1),(114,26,6,1),(115,27,11,1),(116,28,8,1),(117,30,6,1),(118,31,8,1),(119,32,8,1),(120,33,11,1);
/*!40000 ALTER TABLE `BPclasifTemas` ENABLE KEYS */;
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
