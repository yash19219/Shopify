-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: finaldbmsproject
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `cid` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `hno` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `pincode` int NOT NULL,
  `email` varchar(50) NOT NULL,
  `User_uname` varchar(20) NOT NULL,
  PRIMARY KEY (`cid`,`User_uname`),
  KEY `fk_Customer_User1_idx` (`User_uname`),
  CONSTRAINT `fk_Customer_User1` FOREIGN KEY (`User_uname`) REFERENCES `user` (`uname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'Anurag','E-678','New Delhi','Delhi',110098,'anurag@gamil.com','Anurag'),(2,'Anmol','515','New Delhi','Delhi',110010,'anmol@gmail.com','Anmol'),(3,'Yash','912','Mumbai','Maharastra',110025,'yash@gmail.com','Yash'),(4,'Vishal','201','Surat','Gujarat',302001,'vishal@gmail.com','Vishal'),(5,'Akash','314','Jaipur','Rajasthan',213154,'akash@gmail.com','Akash'),(6,'Ayush','303','Noida','UP',123456,'ayush@gmail.com','Ayush'),(7,'Vasu','902','New Delhi','Delhi',123578,'vasu@gmail.com','Vasu'),(8,'Prakrit','903','Pune','Maharastra',123548,'prakrit@gmail.com','Prakrit'),(9,'Mahesh','405','Mumbai','Maharastra',564878,'mahesh@gmail.com','Mahesh'),(10,'Ram','101','Kolkata','West Bengal',154689,'ram@gmail.com','Ram'),(11,'Shyam','230','Gurgoan','Haryana',464542,'shyam@gmail.com','Shyam'),(12,'Ankit','159','Agra','UP',123548,'ankit@gmail.com','Ankit'),(13,'Aman','690','Lucknow','UP',598456,'aman@gmail.com','Aman'),(14,'Rani','413','Chennai','Tamil Nadu',564213,'rani@gmail.com','Rani'),(15,'Priya','120','Pune','Maharastra',455644,'priya@gmail.com','Priya');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-27 21:12:49
