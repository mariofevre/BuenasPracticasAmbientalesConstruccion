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
-- Table structure for table `FUfuentes`
--

DROP TABLE IF EXISTS `FUfuentes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `FUfuentes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(450) DEFAULT NULL COMMENT 'nombre de la fuente',
  `descripcion` text COMMENT 'descripcion de la fuente',
  `url` varchar(450) DEFAULT NULL COMMENT 'url de acceso a la fuente',
  `FI_copialocal` varchar(450) DEFAULT NULL COMMENT 'copia local del documento',
  `autor` varchar(450) DEFAULT NULL,
  `entidad` varchar(450) DEFAULT NULL,
  `pais` varchar(45) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `ISBN` varchar(145) DEFAULT NULL COMMENT 'isbn',
  `zz_escaneado` varchar(45) DEFAULT NULL COMMENT 'estado de escaneo automático del documento.',
  `zz_borrada` tinyint(1) NOT NULL DEFAULT '0',
  `zz_escaneadoHD` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FUfuentes`
--

LOCK TABLES `FUfuentes` WRITE;
/*!40000 ALTER TABLE `FUfuentes` DISABLE KEYS */;
INSERT INTO `FUfuentes` VALUES (1,'guÃ­a de buenas practicas ambientales para obras en construcciÃ³n',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL),(2,'guía de buenas practicas ambientales para obras en construcción','.','http://www.oitcinterfor.org/livedrupal/sites/default/files/buenaspracticas_ambienta.pdf','./documentos/fuentes/originales/00002.pdf','Marcelo Raúl Díaz; Paula Ruggeri','UOCRA; OPDS; Aulas y Andamios','Argentina','2009-01-01','978-987-24878-6-7','88_88',0,'88_88'),(3,'hjkhjk',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL),(4,'dfg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL),(5,'dfghhh',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL),(6,'Buenas Practicas Ambientales en la construcción',NULL,'www.rosario.gov.ar/web/sites/default/files/manual-bpa-en-la-construccion-cimpar.pdf','./documentos/fuentes/originales/00006.pdf',NULL,'Municipalidad de Rosario; CIMPAR','Argentina',NULL,NULL,'39_39',0,'39_39'),(7,'Manual de Gestión Socio-Ambiental para Obras de Construcción','Versión posterior en id 16\r\n\r\nEstá PERMITIDA la reproducción parcial o total de esta publicación sin fines\r\ncomerciales. Para utilizar información contenida en ella se deberá citar fuente.\r\n','http://www.metropol.gov.co/CalidadAire/lsdocConstruccionSostenible/Manual%20de%20gesti%C3%B3n%20socio-ambiental%20para%20obras%20en%20construcci%C3%B3n.pdf','./documentos/fuentes/originales/00007.pdf',NULL,'Área Metropolitana del Valle de Aburrá; Secretaría del Medio Ambiente de Medellín; Empresas Públicas de Medellín','Colombia','2009-01-01',NULL,'152_152',0,'152_152'),(8,'Guía de Buenas Prácticas en la Construcción','Contiene una guía de sitios de referencia a revisar.','www.cazalladelasierra.es/opencms/opencms/cazalla/delegacionesMunicipales/urbanismo/buenaspracticasenlaconstruccion','./documentos/fuentes/originales/00008.pdf',NULL,'Ayuntamiento de Cazalla de la Sierra','España',NULL,NULL,'64_64',0,'64_64'),(9,'Albañilería','De la colección `Buenas prácticas Ambientales`','http://www.metropol.gov.co/CalidadAire/lsdocConstruccionSostenible/Manual%20de%20gesti%C3%B3n%20socio-ambiental%20para%20obras%20en%20construcci%C3%B3n.pdf','./documentos/fuentes/originales/00009.pdf','CONCHA FERNÁNDEZ DE PINEDO','Gobierno de Navarra','España',NULL,NULL,'20_20',0,'20_20'),(10,'MANUAL DE BUENAS PRÁCTICAS AMBIENTALES',NULL,'http://www.ossaint.com/esp/pdfs/manual_de_practicas_ambientales_ossa_esp.pdf','./documentos/fuentes/originales/00010.pdf',NULL,'OSSA, Obras Subterráneas','España',NULL,NULL,'36_36',0,'36_36'),(11,'guía de buenas prácticas medioambientales para los Trabajadores del Sector de la CONSTRUCCIÓN y DEMOLICIÓN',NULL,'http://www.omaaragon.org/images/imagenes/GUIA%20BPMA%20RCD.pdf','./documentos/fuentes/originales/00011.pdf',NULL,'Gobierno de Aragon','España',NULL,NULL,'56_56',0,'56_56'),(12,'Guía general de buenas prácticas ambientales para el jefe de obra',NULL,'http://itec.cat/servicios/librospdf/pdfs/Gu%C3%ADa%20general%20de%20buenas%20pr%C3%A1cticas%20ambientales%20para%20el%20jefe%20de%20obra_ITeC_2006.pdf','./documentos/fuentes/originales/00012.pdf',NULL,'ITeC Instituto de Tecnología de la Construcción de Cataluña','España','2006-09-01',NULL,'52_52',0,'52_52'),(13,'Código de Buenas prácticas de la industria de la COnstrucción',NULL,'www.cchc.cl/uploads/basica/archivos/Descargar-Codigo-de-Buenas-Practicas-en-la-Industria-de-la-Construccion.pdf','./documentos/fuentes/originales/00013.pdf',NULL,'Cámara Chilena de la Construcción','Chile','2011-11-01',NULL,'19_19',0,'19_19'),(14,'Guía de Buenas Prácticas Ambientales en el Diseño, COnstrucción, Uso y Conservación y Demolición de Edificios e Instalaciónes',NULL,'http://www.madrid.es/UnidadesDescentralizadas/Educacion_Ambiental/ContenidosBasicos/Publicaciones/GuiaBPAEdificiosInstalaciones.pdf','./documentos/fuentes/originales/00014.pdf',NULL,'Ayuntamiento deMadrid','España',NULL,NULL,'136_136',0,'136_136'),(15,'Manual de buenas prácticas ambientales para la ejecución de proyectos de agua potable y saneamiento básico',NULL,'http://www.pdaantioquia.com/informacion/documentos/manual-buenas-practicas.pdf','./documentos/fuentes/originales/00015.pdf',NULL,'Universidad de Antioquía','Colombia',NULL,NULL,'23_23',0,'23_23'),(16,'Manual de gestión socio-ambiental para obras en construcción','Está PERMITIDA la reproducción parcial o total de esta publicación sin fines\r\ncomerciales. Para utilizar información contenida en ella se deberá citar fuente.','http://www.camaracompostela.com/mambiente/BPMA.construccion.pdf','./documentos/fuentes/originales/00016.pdf',NULL,'Área Metropolitana del Valle de Aburrá; Secretaría del Medio Ambiente de Medellín; Empresas Públicas de Medellín','Colombia','2010-04-01','978-958-8513-27-0','152_152',0,'152_152'),(17,'Guía de buenas prácticas de carácter no obligatorio para el entendimiento y la aplicación de la Directiva 92/57/CEE','relativa a las disposiciones mínimas de seguridad y de salud que\r\ndeben aplicarse en las obras de construcción temporales o móviles\r\n\r\n\r\nReproducción autorizada, con indicación de la fuente bibliográfica.\r\n','www.insht.es/InshtWeb/Contenidos/Normativa/ColeccionesRelacionadas/ContenidosRelacionados/TaxNormativa2_1/UEGuiaDir92_57construccion_espanol.pdf','./documentos/fuentes/originales/00017.pdf',NULL,'Comisión Europea Dirección General de Empleo, Asuntos Sociales e Igualdad de Oportunidades','Europa','2011-01-01','978-92-79-19385-9','196_196',0,'196_196'),(18,'Guía de Edificación Sostenible para la Vivienda en la Comunidad Autónoma del País Vasco','No se permite reproducir, almacenar en sistemas de recuperación de la información, ni transmitir parte alguna de esta publicación, cualquiera que sea el medio empleado\r\n?electrónico, mecánico, fotocopiado, grabado, etc. ?, sin el permiso del titular de los derechos de la propiedad intelectual y del editor.\r\n','http://www.visesa.com/documentos/actualidad/doc_144.pdf','./documentos/fuentes/originales/00018.pdf',NULL,'Comunidad Autónoma del País Vasco; EVE; IHOBE; ORUBIDE; VISESA','España','2006-01-01',NULL,'304_304',0,'304_304'),(19,'Manual de BUENAS PRÁCTICAS AMBIENTALES EN LA FAMILIA PROFESIONAL: EDIFICACIÓN Y OBRAS PÚBLICAS',NULL,'http://www.oficinadetreball.cat/socweb/export/sites/default/socweb_ca/ciutadans/_fitxers/EOC_1.pdf','./documentos/fuentes/originales/00019.pdf',NULL,'Ministerio de trabajo y asuntos sociales','España',NULL,NULL,'12_12',0,'12_12'),(20,'Sustentabilidad en Arquitectura3','Análisis y Compilacíón de las 100 mejores\r\nprácticas y procedimientos de sustentabilidad en la Producción de Obras de Arquitectura.',NULL,'./documentos/fuentes/originales/00020.pdf','Schwarz, Andrés','Consejo Profesional de Arquitectura y Urbanismo','Argentina','2015-01-01','978-987-9210-32-1','136_136',0,'136_136'),(21,'Guía de Buenas Práctica Ambientales en la COnstrucción','Manual  sintético de 16 páginas. Diseño gráfico actual.\r\nelavorado por la empresa funkyadEptos SA, dedicada aal desarrollo y comercializaicón inmoviliaria, como para de sus RSE.','http://www.funkyadeptos.com/img/GBPAC.pdf','./documentos/fuentes/originales/00021.pdf',NULL,'Funkyadetpos SA','Argentina',NULL,NULL,'16_16',0,'16_16'),(22,'ggg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL);
/*!40000 ALTER TABLE `FUfuentes` ENABLE KEYS */;
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
