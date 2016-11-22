-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2016 at 12:26 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `priority` int(11) NOT NULL,
  `done` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `description`, `priority`, `done`, `created_at`) VALUES
(16, 'yyyyyyyyyyy', 'yyyyyyyyyyyyyyyyy', 55, 0, '2016-11-21 17:37:26'),
(17, 'ooooooo123', 'ooooooooooooooo', 22, 0, '2016-11-21 17:37:26'),
(18, 'pppppppppppppppp', 'pppppppppppp', 33, 0, '2016-11-21 17:37:26'),
(19, 'kkkkkkkkkkkkkkkk', 'kkkkkkkkkkkkkkkkkkkkkk', 77, 0, '2016-11-21 17:37:26'),
(20, 'lhhjkjhkjh', 'kjhkhjkhjkhj', 88, 0, '2016-11-21 17:37:26'),
(21, 'dsadsadasd', 'asdsadasdas', 312, 0, '2016-11-21 17:37:26'),
(22, 'teste', 'teste', 4, 1, '2016-11-21 17:37:26'),
(23, 'testekozima', 'testekozima', 15, 0, '2016-11-21 17:37:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
