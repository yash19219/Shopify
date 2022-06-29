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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `pid` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `catagory` varchar(30) NOT NULL,
  `price` float NOT NULL,
  `stocks` int NOT NULL,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`pid`),
  KEY `catagoryIndexTable` (`catagory`),
  KEY `stockIndexTable` (`stocks`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Nataraj Pencil','Nataraj','Pencil',10,197,'https://www.towntokri.com/wp-content/uploads/2021/04/nataraj-pencil-mrp40.jpg'),(2,'Apsara Pencil','Apsara','Pencil',10,199,'https://images.jdmagicbox.com/quickquotes/images_main/apsara-absolute-extra-dark-pencil-04-12-2020-8950-219897405-t48ab.jpg'),(3,'Doms Pencil','Doms','Pencil',10,152,'https://4.imimg.com/data4/KC/RU/MY-6935841/doms-pencil-500x500.jpg'),(4,'Deli Pencil','HB','Pencil',10,198,'https://m.media-amazon.com/images/I/410Tb5XcUCL.jpg'),(5,'Trimax','Reynolds','Pen',50,199,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_WKP8MawwEGcGHGR2ZRdxPbhR-qd9iQDAw&usqp=CAU'),(6,'Vivobook','Asus','Laptop',50000,296,'https://www.hilaptop.com/environment/cache/images/500_500_productGfx_13759.jpg'),(7,'Rado watch','Rado','Watch',10000,199,'https://cdn.shopify.com/s/files/1/0261/8900/4880/products/R32500323_grande.jpg?v=1633932682'),(8,'I-Phone 12','Apple','Phone',50000,96,'https://5.imimg.com/data5/SELLER/Default/2021/3/GR/GD/NQ/71985240/apple-iphone12-white-128gb-mobile-500x500.jpg'),(9,'Realme 6','Realme','Phone',10000,997,'https://5.imimg.com/data5/SELLER/Default/2021/3/ZD/WH/WM/46278852/4-gb-realme-6-mobile-phone-500x500.jpg'),(10,'Amaze fit gts2','Amaze fit','Smart watch',10000,195,'http://cdn.shopify.com/s/files/1/0266/1371/0884/products/amazfit-gts-2-with-gps-spo2-sensor-amoled-display-3gb-music-storage-118859_grande.jpg?v=1647939178'),(11,'Pilot','Cello','Pen',50,97,'https://5.imimg.com/data5/SELLER/Default/2021/1/OK/VF/ZF/69074754/frixion-clickerball-pen-500x500.png'),(12,'Tshirt XL','Nike','Cloth',300,248,'https://5.imimg.com/data5/YY/NN/MY-12879019/adidas-sports-t-shirt-500x500.jpg'),(13,'Tshirt L','Adidas','Cloth',250,7,'https://www.thefactshop.com/wp-content/uploads/2019/07/BC3001-the-fact-site-tshirt-womens-white-500x500.jpg'),(14,'Chips','Lays','FMCG',20,0,'https://m.media-amazon.com/images/I/51euHA2kTuL._PIbundle-168,TopRight,0,0_AA500SH20_.jpg'),(15,'Soap','Dettol','FMCG',50,99,'https://newassets.apollo247.com/pub/media/catalog/product/d/e/det0046.jpg'),(16,'GTX 3090','Nvidia','Graphics Card',186999,19,'https://inquirecontent2.ingrammicro.com/images/500/1065556308.jpg'),(17,'Gaming Keyboard','Zebronics','Gaming',2000,23,'https://5.imimg.com/data5/TE/QW/MY-52354470/wireless-mechanical-gaming-keyboard-500x500.jpg');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
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
