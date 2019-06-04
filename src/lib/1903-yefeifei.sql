-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-06-04 00:29:18
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `1903-yefeifei`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(6) NOT NULL COMMENT '商品id',
  `title` varchar(50) NOT NULL COMMENT '商品标题',
  `price` float NOT NULL COMMENT '商品价格',
  `num` tinyint(50) NOT NULL COMMENT '商品库存',
  `pic` varchar(255) NOT NULL COMMENT '商品图片',
  `details` varchar(255) NOT NULL COMMENT '商品详情'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `num`, `pic`, `details`) VALUES
(1, '魅族 16s', 3198, 10, '[{\r\n"title":"16s",\r\n"src":"../images/main_3/Cgbj0FzvRKyAcTmAAAiLh3fsE44680.png"}]', ' 骁龙855 4800W光学防抖'),
(2, '魅族 Note9', 1398, 10, '[{\r\n"title":"note9",\r\n"src":"https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png"\r\n}]', '骁龙675 后置4800万'),
(3, '魅族 16th', 2298, 10, '[{\r\n"title":"16th",\r\n"src":"https://openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png"\r\n}]', '骁龙845 屏幕下指纹'),
(4, '魅族 16th Plus', 2698, 10, '[{\r\n"title":"16thplus",\r\n"src":"https://openfile.meizu.com/group1/M00/05/E1/Cgbj0FtqgkWALkhxAAkE5Uiy2no917.png"\r\n}]', '骁龙845 屏幕下指纹'),
(5, '魅族 X8', 1298, 10, '[{\r\n"title":"x8",\r\n"src":"https://openfile.meizu.com/group1/M00/06/A9/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png"\r\n}]', '骁龙710 人脸+指纹双解锁'),
(6, '魅族 16 X', 1798, 10, '[{\r\n"title":"16x",\r\n"src":"https://openfile.meizu.com/group1/M00/06/CC/Cgbj0VvINL-AGM20AAw4GirVtYA698.png"\r\n}]', '骁龙710 屏下指纹'),
(7, '魅族 Note8', 1298, 10, '[{\r\n"title":"note8",\r\n"src":"https://openfile.meizu.com/group1/M00/06/D4/Cgbj0VvQPnuAAwPPAAMv8zzt2DE910.png"\r\n}]', '骁龙632 人脸指纹双解锁'),
(8, '魅族 V8 高配版', 898, 10, '[{\r\n"title":"v8top",\r\n"src":"https://openfile.meizu.com/group1/M00/06/AC/Cgbj0VujaMyAYB76AATj19tgy08068.png"\r\n}]', '高清双摄 指纹+人脸双解锁'),
(9, '魅族 15', 1498, 10, '[{\r\n"title":"15",\r\n"src":"https://openfile.meizu.com/group1/M00/04/0B/Cgbj0FrcbkeAW38NAAjvsXhhyFE066.png"\r\n}]', '骁龙660 2000万暗光双摄'),
(10, '魅族 15 Plus', 1798, 10, '[{\r\n"title":"15plus",\r\n"src":"https://openfile.meizu.com/group1/M00/04/0D/Cgbj0FrcbqKANbtFAAu0nXkFYY4657.png"\r\n}]', '三星8895处理器 2000万暗光双摄');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int(20) NOT NULL COMMENT ' 用户id',
  `username` varchar(20) NOT NULL COMMENT '用户名',
  `password` text NOT NULL COMMENT '用户密码'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(20, '13545454545', '111111'),
(13, '13333333333', '111111'),
(19, '17676776767', '111111'),
(18, '13878787878', '111111'),
(17, '13999900000', '111111'),
(14, '13999999999', '111111'),
(15, '13666666666', '111111'),
(16, '13000000000', '111111'),
(21, '15858805029', '111111'),
(22, '13222222222', '111111');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=11;
--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT COMMENT ' 用户id', AUTO_INCREMENT=23;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
