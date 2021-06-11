SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `payments`;
CREATE TABLE `payments` (
  `paymentId` char(36) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  `senderId` char(36) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  `recipientId` char(36) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  PRIMARY KEY (`paymentId`),
  KEY `senderId` (`senderId`),
  KEY `recipientId` (`recipientId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
