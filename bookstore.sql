-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2017-06-15 06:32:25
-- 服务器版本： 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookstore`
--

-- --------------------------------------------------------

--
-- 表的结构 `book`
--

CREATE TABLE `book` (
  `bookid` int(20) NOT NULL,
  `bookname` varchar(80) NOT NULL,
  `author` varchar(80) NOT NULL,
  `price` int(20) NOT NULL,
  `imageid` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `book`
--

INSERT INTO `book` (`bookid`, `bookname`, `author`, `price`, `imageid`) VALUES
(6, 'The C Programming Language', 'K&R', 300000, '65D24314E478E1823B16C6FA9B06C426'),
(7, 'The C++ Programming Language', 'Bjarne Stroustrup', 5000000, '975AB85CB190295C9A94202F5794074F'),
(8, 'Linear Algebra And Its Applications', 'David C.Lay', 100000, 'A5EE494959388861719D86FC9F961EFC'),
(9, 'Applied Calculus', 'Deborah Hughes', 1000, '1317E24B9133761B85DCE27BBA6C2C6C'),
(11, 'Introduction to Algorithms', 'Cormen', 300000, '95E5CA4EF1AF4966136361F2AA448D89'),
(12, 'Computer Systems: A Programmer\'s Perspective', 'Bryant&O\'Hallraon', 2000000, '4155B1C22940FE23A75325F80FB90EB7');

-- --------------------------------------------------------

--
-- 表的结构 `bookscategory`
--

CREATE TABLE `bookscategory` (
  `categoryid` int(20) NOT NULL,
  `bookid` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `bookscategory`
--

INSERT INTO `bookscategory` (`categoryid`, `bookid`) VALUES
(1, 6),
(1, 7),
(1, 11),
(1, 12),
(3, 8),
(3, 9),
(3, 11);

-- --------------------------------------------------------

--
-- 表的结构 `booksorder`
--

CREATE TABLE `booksorder` (
  `orderid` int(20) NOT NULL,
  `bookid` int(20) NOT NULL,
  `amount` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `booksorder`
--

INSERT INTO `booksorder` (`orderid`, `bookid`, `amount`) VALUES
(1, 6, 4),
(1, 11, 4),
(3, 11, 5),
(4, 7, 4),
(4, 11, 4),
(5, 6, 7),
(5, 7, 4),
(5, 8, 7);

-- --------------------------------------------------------

--
-- 表的结构 `category`
--

CREATE TABLE `category` (
  `categoryid` int(20) NOT NULL,
  `name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `category`
--

INSERT INTO `category` (`categoryid`, `name`) VALUES
(1, 'Computer Science'),
(3, 'Maths'),
(4, 'English');

-- --------------------------------------------------------

--
-- 表的结构 `orders`
--

CREATE TABLE `orders` (
  `orderid` int(20) NOT NULL,
  `userid` int(20) NOT NULL,
  `tot_price` int(20) NOT NULL,
  `pucharsed` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `orders`
--

INSERT INTO `orders` (`orderid`, `userid`, `tot_price`, `pucharsed`) VALUES
(1, 1, 2400000, 'Y'),
(3, 1, 1500000, 'C'),
(4, 1, 21200000, 'N'),
(5, 8, 22800000, 'Y');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `userid` int(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `role` varchar(20) NOT NULL,
  `profileid` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`userid`, `username`, `password`, `role`, `profileid`) VALUES
(1, '1', '2', 'admin', '5939732594b4d51f4c20df5f'),
(7, 'user1', '1234', 'user', '593b9c2294b4d5061870f52f'),
(8, 'zzy', '123456', 'user', '59420a75c19d582c8c245a18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`bookid`);

--
-- Indexes for table `bookscategory`
--
ALTER TABLE `bookscategory`
  ADD PRIMARY KEY (`categoryid`,`bookid`),
  ADD KEY `bookid_r2` (`bookid`);

--
-- Indexes for table `booksorder`
--
ALTER TABLE `booksorder`
  ADD PRIMARY KEY (`orderid`,`bookid`),
  ADD KEY `FKt4u4ehk2i4l69lyxiwpy0f41q` (`bookid`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`categoryid`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderid`),
  ADD KEY `FKdxew8n76x1bnoxjas0qxrlbq6` (`userid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `book`
--
ALTER TABLE `book`
  MODIFY `bookid` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- 使用表AUTO_INCREMENT `category`
--
ALTER TABLE `category`
  MODIFY `categoryid` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- 使用表AUTO_INCREMENT `orders`
--
ALTER TABLE `orders`
  MODIFY `orderid` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `userid` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- 限制导出的表
--

--
-- 限制表 `bookscategory`
--
ALTER TABLE `bookscategory`
  ADD CONSTRAINT `bookid_r2` FOREIGN KEY (`bookid`) REFERENCES `book` (`bookid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `categoryid_r` FOREIGN KEY (`categoryid`) REFERENCES `category` (`categoryid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 限制表 `booksorder`
--
ALTER TABLE `booksorder`
  ADD CONSTRAINT `book_r` FOREIGN KEY (`bookid`) REFERENCES `book` (`bookid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_r` FOREIGN KEY (`orderid`) REFERENCES `orders` (`orderid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 限制表 `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `user_r` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
