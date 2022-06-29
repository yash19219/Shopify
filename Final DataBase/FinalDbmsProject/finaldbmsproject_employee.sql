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
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `eid` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `salary` int NOT NULL,
  `Department_did` int NOT NULL,
  `User_uname` varchar(20) NOT NULL,
  PRIMARY KEY (`eid`,`Department_did`,`User_uname`),
  KEY `fk_Employee_Department1_idx` (`Department_did`),
  KEY `fk_Employee_User1_idx` (`User_uname`),
  CONSTRAINT `fk_Employee_Department1` FOREIGN KEY (`Department_did`) REFERENCES `department` (`did`),
  CONSTRAINT `fk_Employee_User1` FOREIGN KEY (`User_uname`) REFERENCES `user` (`uname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'Rohan','rohan@gmail.com',100000,1,'Rohan'),(2,'Mohan','Mohan@gmail.com',20000,2,'Mohan'),(3,'Vaibhav','Vaibhav@gmail.com',25000,3,'Vaibhav'),(4,'Papu','Papu@gmail.com',30000,4,'Papu'),(5,'Ramu','Ramu@gmail.com',35000,5,'Ramu'),(6,'Kishan','Kishan@gmail.com',20000,2,'Kishan'),(7,'Simran','Simran@gmail.com',25000,2,'Simran'),(8,'Saloni','Saloni@gmail.com',30000,1,'Saloni'),(9,'Bhawna','Bhawna@gmail.com',90000,3,'Bhawna'),(10,'Akansha','Akansha@gmail.com',70000,5,'Akansha');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-27 21:12:48
