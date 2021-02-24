-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2020 at 01:49 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fundacion_sos`
--

-- --------------------------------------------------------

--
-- Table structure for table `canino`
--

CREATE TABLE `canino` (
  `id_canino` int(10) NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_nacimiento` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `edad` int(3) NOT NULL,
  `sexo` tinyint(1) NOT NULL,
  `tamanio` tinyint(4) NOT NULL,
  `castrado` tinyint(1) NOT NULL,
  `desparasitado` tinyint(1) NOT NULL,
  `vacunado` tinyint(4) NOT NULL,
  `descripcion` text COLLATE utf8_spanish_ci NOT NULL,
  `estado_adopcion` tinyint(1) NOT NULL,
  `fecha_adopcion` date DEFAULT NULL,
  `imagen_portada` text COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `canino`
--

INSERT INTO `canino` (`id_canino`, `nombre`, `fecha_nacimiento`, `edad`, `sexo`, `tamanio`, `castrado`, `desparasitado`, `vacunado`, `descripcion`, `estado_adopcion`, `fecha_adopcion`, `imagen_portada`) VALUES
(14, 'Merino', '2001-09-01', 19, 1, 2, 1, 1, 1, 'hola', 0, '0000-00-00', ''),
(29, 'asd', '2001-12-12', 12, 1, 2, 1, 1, 1, '1', 0, '0000-00-00', NULL),
(30, 'Juan', '2012-12-1', 14, 0, 0, 1, 0, 1, 'a', 1, '0000-00-00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `categoria_donacion`
--

CREATE TABLE `categoria_donacion` (
  `id_categoria_donacion` int(11) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `categoria_donacion`
--

INSERT INTO `categoria_donacion` (`id_categoria_donacion`, `descripcion`) VALUES
(15, 'YES');

-- --------------------------------------------------------

--
-- Table structure for table `donaciones`
--

CREATE TABLE `donaciones` (
  `id_donaciones` int(11) NOT NULL,
  `descripcion` text COLLATE utf8_spanish_ci NOT NULL,
  `contacto` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `categoria_donaciones` int(11) NOT NULL,
  `imagen_portada` text COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `donaciones`
--

INSERT INTO `donaciones` (`id_donaciones`, `descripcion`, `contacto`, `direccion`, `categoria_donaciones`, `imagen_portada`) VALUES
(15, 'asd', '123 123-1234', 'asd123', 15, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `evento`
--

CREATE TABLE `evento` (
  `id_evento` int(11) NOT NULL,
  `titulo` text COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf8_spanish_ci NOT NULL,
  `contacto` text COLLATE utf8_spanish_ci NOT NULL,
  `ubicacion` text COLLATE utf8_spanish_ci NOT NULL,
  `fecha_hora` datetime NOT NULL,
  `imagen_portada` text COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `evento`
--

INSERT INTO `evento` (`id_evento`, `titulo`, `descripcion`, `contacto`, `ubicacion`, `fecha_hora`, `imagen_portada`) VALUES
(9, 'Concientizar escuelass', 'esooasd', '2995659454', 'CET 30', '2020-12-26 03:00:00', NULL),
(12, 'Encontrar a Wally', 'Lo de al lado', '2994898975', 'CET 31', '2020-11-02 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `formulario_adopcion`
--

CREATE TABLE `formulario_adopcion` (
  `id_formulario` int(10) NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `apellido` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `dni` int(8) NOT NULL,
  `telefono` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `correo` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `canino` int(10) NOT NULL,
  `id_localidad` int(10) NOT NULL,
  `requisito` int(11) NOT NULL,
  `provincia_id` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `formulario_adopcion`
--

INSERT INTO `formulario_adopcion` (`id_formulario`, `nombre`, `apellido`, `direccion`, `dni`, `telefono`, `correo`, `canino`, `id_localidad`, `requisito`, `provincia_id`) VALUES
(16, 'Pedro', 'Verón', '2131321', 45645645, '5555555555', '6541664646464', 30, 20, 8, 7),
(19, 'Bruno', 'Merino', 'Río Negro 971', 43488265, '2995659454', 'asdas', 30, 20, 8, 7);

-- --------------------------------------------------------

--
-- Table structure for table `galeria`
--

CREATE TABLE `galeria` (
  `id_galeria` int(11) NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `descripcion` text NOT NULL,
  `imagen_url` varchar(200) NOT NULL,
  `public_id` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `imagenes_canino`
--

CREATE TABLE `imagenes_canino` (
  `id_ic` int(11) NOT NULL,
  `id_canino` int(11) NOT NULL,
  `imagen_url` text NOT NULL,
  `public_id` varchar(255) NOT NULL,
  `portada` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `imagenes_canino`
--

INSERT INTO `imagenes_canino` (`id_ic`, `id_canino`, `imagen_url`, `public_id`, `portada`) VALUES
(2, 3, 'http://res.cloudinary.com/dylbe29a5/image/upload/v1604091467/hyr1z2sj9nzp86eeswzt.jpg', 'hyr1z2sj9nzp86eeswzt', 0),
(3, 3, 'http://res.cloudinary.com/dylbe29a5/image/upload/v1604091470/noxwrcpmt56cl48l23fj.jpg', 'noxwrcpmt56cl48l23fj', 0),
(14, 29, 'http://res.cloudinary.com/dylbe29a5/image/upload/v1607550174/ojvbmsa5v4ecid6avfpr.jpg', 'ojvbmsa5v4ecid6avfpr', 0),
(15, 30, 'http://res.cloudinary.com/dylbe29a5/image/upload/v1607550484/k9p4zcpnlmbhdmpriphy.jpg', 'k9p4zcpnlmbhdmpriphy', 0);

-- --------------------------------------------------------

--
-- Table structure for table `imagenes_donaciones`
--

CREATE TABLE `imagenes_donaciones` (
  `id_id` int(11) NOT NULL,
  `id_donaciones` int(11) NOT NULL,
  `imagen_url` text NOT NULL,
  `public_id` varchar(255) NOT NULL,
  `portada` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `imagenes_donaciones`
--

INSERT INTO `imagenes_donaciones` (`id_id`, `id_donaciones`, `imagen_url`, `public_id`, `portada`) VALUES
(1, 3, 'http://res.cloudinary.com/dylbe29a5/image/upload/v1604104780/pf9s7bqlxfrennucwc1v.png', 'pf9s7bqlxfrennucwc1v', 0),
(2, 3, 'http://res.cloudinary.com/dylbe29a5/image/upload/v1604104784/tkgwul5ubwpr4igmi13k.png', 'tkgwul5ubwpr4igmi13k', 0);

-- --------------------------------------------------------

--
-- Table structure for table `imagenes_evento`
--

CREATE TABLE `imagenes_evento` (
  `id_ie` int(11) NOT NULL,
  `id_evento` int(11) NOT NULL,
  `imagen_url` text NOT NULL,
  `public_id` varchar(255) NOT NULL,
  `portada` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `imagenes_evento`
--

INSERT INTO `imagenes_evento` (`id_ie`, `id_evento`, `imagen_url`, `public_id`, `portada`) VALUES
(6, 9, 'http://res.cloudinary.com/dylbe29a5/image/upload/v1607463730/nkfiqbqokuaurhmzejbk.jpg', 'nkfiqbqokuaurhmzejbk', 0),
(7, 9, 'http://res.cloudinary.com/dylbe29a5/image/upload/v1607463744/aptcpsvcadkykpz1utag.png', 'aptcpsvcadkykpz1utag', 1),
(10, 12, 'http://res.cloudinary.com/dylbe29a5/image/upload/v1607541787/l3rnh0lbwl7us0cbbhbd.png', 'l3rnh0lbwl7us0cbbhbd', 0);

-- --------------------------------------------------------

--
-- Table structure for table `localidades`
--

CREATE TABLE `localidades` (
  `id_localidad` int(10) NOT NULL,
  `provincia_id` tinyint(3) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `codigopostal` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `localidades`
--

INSERT INTO `localidades` (`id_localidad`, `provincia_id`, `nombre`, `codigopostal`) VALUES
(3, 4, 'Carlos Paz', 5152),
(20, 7, 'Cipolletti', 8324);

-- --------------------------------------------------------

--
-- Table structure for table `provincia`
--

CREATE TABLE `provincia` (
  `id` tinyint(3) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `provincia`
--

INSERT INTO `provincia` (`id`, `nombre`) VALUES
(4, 'Cordoba'),
(6, 'Chaco'),
(7, 'Río Negro');

-- --------------------------------------------------------

--
-- Table structure for table `requisito`
--

CREATE TABLE `requisito` (
  `id_requisito` int(10) NOT NULL,
  `pregunta` text COLLATE utf8_spanish_ci NOT NULL,
  `respuesta` tinyint(4) NOT NULL,
  `observacion` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `requisito`
--

INSERT INTO `requisito` (`id_requisito`, `pregunta`, `respuesta`, `observacion`) VALUES
(8, 'Hola?', 1, 'asd');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `username` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(45) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `canino`
--
ALTER TABLE `canino`
  ADD PRIMARY KEY (`id_canino`);

--
-- Indexes for table `categoria_donacion`
--
ALTER TABLE `categoria_donacion`
  ADD PRIMARY KEY (`id_categoria_donacion`);

--
-- Indexes for table `donaciones`
--
ALTER TABLE `donaciones`
  ADD PRIMARY KEY (`id_donaciones`),
  ADD KEY `categoria_donaciones` (`categoria_donaciones`);

--
-- Indexes for table `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`id_evento`);

--
-- Indexes for table `formulario_adopcion`
--
ALTER TABLE `formulario_adopcion`
  ADD PRIMARY KEY (`id_formulario`),
  ADD KEY `canino` (`canino`),
  ADD KEY `id_localidad` (`id_localidad`),
  ADD KEY `requisito` (`requisito`),
  ADD KEY `provincia_id` (`provincia_id`);

--
-- Indexes for table `galeria`
--
ALTER TABLE `galeria`
  ADD PRIMARY KEY (`id_galeria`);

--
-- Indexes for table `imagenes_canino`
--
ALTER TABLE `imagenes_canino`
  ADD PRIMARY KEY (`id_ic`);

--
-- Indexes for table `imagenes_donaciones`
--
ALTER TABLE `imagenes_donaciones`
  ADD PRIMARY KEY (`id_id`);

--
-- Indexes for table `imagenes_evento`
--
ALTER TABLE `imagenes_evento`
  ADD PRIMARY KEY (`id_ie`);

--
-- Indexes for table `localidades`
--
ALTER TABLE `localidades`
  ADD PRIMARY KEY (`id_localidad`),
  ADD KEY `provincia_id` (`provincia_id`);

--
-- Indexes for table `provincia`
--
ALTER TABLE `provincia`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `requisito`
--
ALTER TABLE `requisito`
  ADD PRIMARY KEY (`id_requisito`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `canino`
--
ALTER TABLE `canino`
  MODIFY `id_canino` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `categoria_donacion`
--
ALTER TABLE `categoria_donacion`
  MODIFY `id_categoria_donacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `donaciones`
--
ALTER TABLE `donaciones`
  MODIFY `id_donaciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `evento`
--
ALTER TABLE `evento`
  MODIFY `id_evento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `formulario_adopcion`
--
ALTER TABLE `formulario_adopcion`
  MODIFY `id_formulario` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `galeria`
--
ALTER TABLE `galeria`
  MODIFY `id_galeria` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `imagenes_canino`
--
ALTER TABLE `imagenes_canino`
  MODIFY `id_ic` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `imagenes_donaciones`
--
ALTER TABLE `imagenes_donaciones`
  MODIFY `id_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `imagenes_evento`
--
ALTER TABLE `imagenes_evento`
  MODIFY `id_ie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `localidades`
--
ALTER TABLE `localidades`
  MODIFY `id_localidad` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `provincia`
--
ALTER TABLE `provincia`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `requisito`
--
ALTER TABLE `requisito`
  MODIFY `id_requisito` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `donaciones`
--
ALTER TABLE `donaciones`
  ADD CONSTRAINT `donaciones_ibfk_1` FOREIGN KEY (`categoria_donaciones`) REFERENCES `categoria_donacion` (`id_categoria_donacion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `formulario_adopcion`
--
ALTER TABLE `formulario_adopcion`
  ADD CONSTRAINT `fk_fl` FOREIGN KEY (`id_localidad`) REFERENCES `localidades` (`id_localidad`) ON UPDATE CASCADE,
  ADD CONSTRAINT `formulario_adopcion_ibfk_1` FOREIGN KEY (`canino`) REFERENCES `canino` (`id_canino`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `formulario_adopcion_ibfk_2` FOREIGN KEY (`requisito`) REFERENCES `requisito` (`id_requisito`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `localidades`
--
ALTER TABLE `localidades`
  ADD CONSTRAINT `localidades_ibfk_1` FOREIGN KEY (`provincia_id`) REFERENCES `provincia` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
