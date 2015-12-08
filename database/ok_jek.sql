-- phpMyAdmin SQL Dump
-- version 4.5.0.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 08, 2015 at 05:52 
-- Server version: 10.0.17-MariaDB
-- PHP Version: 5.5.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ok_jek`
--

-- --------------------------------------------------------

--
-- Table structure for table `Authentification`
--

CREATE TABLE `Authentification` (
  `idAuthentification` int(11) NOT NULL,
  `Username` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Authentification`
--

INSERT INTO `Authentification` (`idAuthentification`, `Username`, `Password`) VALUES
(1, 'tanthowi', '123'),
(7, 'bill', '123');

-- --------------------------------------------------------

--
-- Table structure for table `Maps`
--

CREATE TABLE `Maps` (
  `idMaps` int(11) NOT NULL,
  `Latitude` varchar(45) NOT NULL,
  `Longitude` varchar(45) NOT NULL,
  `Authentification_idAuthentification` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Message`
--

CREATE TABLE `Message` (
  `idMessage` int(11) NOT NULL,
  `Receiver` varchar(45) NOT NULL,
  `Value_Message` varchar(45) NOT NULL,
  `auth_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Message`
--

INSERT INTO `Message` (`idMessage`, `Receiver`, `Value_Message`, `auth_id`) VALUES
(5, 'tanthowi', 'hello tanthowi', 7),
(6, 'tanthowi', 'hello tanthowi', 7),
(7, 'tanthowi', 'hello tanthowi', 7),
(8, 'tanthowi', 'apa kabar?', 7),
(9, 'jauhari', 'hai jauhari', 7),
(10, 'bill', 'hai hai', 7),
(11, 'bill', 'hai hai', 7),
(12, 'bill', 'iya nih tanthowi', 7),
(13, 'bill', 'kamu dimana?', 7),
(14, 'bill', 'iya kamuuu!!!', 7),
(17, 'bill', '123', 1),
(18, 'jauhari', 'hello jauhari', 7),
(19, 'jauhari', 'hello jauhari', 7),
(20, 'jauhari', 'hello body', 7),
(21, 'jauhari', 'hello body', 7),
(22, 'jauhari', 'hello body', 7);

-- --------------------------------------------------------

--
-- Table structure for table `Profile`
--

CREATE TABLE `Profile` (
  `idProfile` int(11) NOT NULL,
  `First_Name` varchar(45) NOT NULL,
  `Last_Name` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Authentification_idAuthentification` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Authentification`
--
ALTER TABLE `Authentification`
  ADD PRIMARY KEY (`idAuthentification`),
  ADD UNIQUE KEY `Username_UNIQUE` (`Username`);

--
-- Indexes for table `Maps`
--
ALTER TABLE `Maps`
  ADD PRIMARY KEY (`idMaps`,`Authentification_idAuthentification`),
  ADD KEY `fk_Maps_Authentification1_idx` (`Authentification_idAuthentification`);

--
-- Indexes for table `Message`
--
ALTER TABLE `Message`
  ADD PRIMARY KEY (`idMessage`);

--
-- Indexes for table `Profile`
--
ALTER TABLE `Profile`
  ADD PRIMARY KEY (`idProfile`,`Authentification_idAuthentification`),
  ADD UNIQUE KEY `idProfile_UNIQUE` (`idProfile`),
  ADD UNIQUE KEY `Email_UNIQUE` (`Email`),
  ADD KEY `fk_Profile_Authentification1_idx` (`Authentification_idAuthentification`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Authentification`
--
ALTER TABLE `Authentification`
  MODIFY `idAuthentification` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `Maps`
--
ALTER TABLE `Maps`
  MODIFY `idMaps` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Message`
--
ALTER TABLE `Message`
  MODIFY `idMessage` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `Profile`
--
ALTER TABLE `Profile`
  MODIFY `idProfile` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Maps`
--
ALTER TABLE `Maps`
  ADD CONSTRAINT `fk_Maps_Authentification1` FOREIGN KEY (`Authentification_idAuthentification`) REFERENCES `Authentification` (`idAuthentification`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `Profile`
--
ALTER TABLE `Profile`
  ADD CONSTRAINT `fk_Profile_Authentification1` FOREIGN KEY (`Authentification_idAuthentification`) REFERENCES `Authentification` (`idAuthentification`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
