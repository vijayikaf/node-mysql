CREATE TABLE IF NOT EXISTS `employees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `name`, `location`) VALUES
(1, 'Afzal', 'India'),
(2, 'Jay', 'Australia'),
(3, 'Jim', 'Germany'),
(4, 'Lesley', 'Scotland'),
(6, 'Rajneesh', 'Delhi');
(7, '', 'Delhi');