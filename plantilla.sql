-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-12-2024 a las 15:36:42
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gruporabanal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banners`
--

CREATE TABLE `banners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `imagen1` varchar(191) NOT NULL,
  `titulo1` varchar(200) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `banners`
--

INSERT INTO `banners` (`id`, `imagen1`, `titulo1`, `created_at`, `updated_at`) VALUES
(31, 'banner3_873a2362-412b-4b93-a6fd-190be9423fa4.webp', 'Banner 3', NULL, NULL),
(32, 'banner2_da944081-94b5-4a03-b78f-695f99c3c703.webp', 'Banner 2', NULL, NULL),
(33, 'fondo-2_99aa24f2-62d4-4f4d-8d58-cfe327c024b9.webp', 'Banner 1', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `url` varchar(200) DEFAULT NULL,
  `imagen1` varchar(200) NOT NULL,
  `resumen` varchar(500) NOT NULL,
  `descripcion` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `blogs`
--

INSERT INTO `blogs` (`id`, `titulo`, `url`, `imagen1`, `resumen`, `descripcion`, `created_at`, `updated_at`) VALUES
(1, 'Cómo Simplificar los Trámites Aduaneros', 'como-simplificar-los-tramites-aduaneros', '1690824024302_280d8d68-582b-42af-8478-65208cb7231f.jpg', 'Los trámites aduaneros son a menudo un desafío para las empresas que operan en el comercio exterior. Sin embargo, los avances tecnológicos están simplificando estos procesos, haciendo que sean más rápidos y eficientes.', '\"<p>Los tr&aacute;mites aduaneros son a menudo un desaf&iacute;o para las empresas que operan en el comercio exterior. Sin embargo, los avances tecnol&oacute;gicos est&aacute;n simplificando estos procesos, haciendo que sean m&aacute;s r&aacute;pidos y eficientes.</p>\\n<p>Automatizaci&oacute;n y Digitalizaci&oacute;n</p>\\n<p>Con la introducci&oacute;n de plataformas digitales, los negocios ahora pueden realizar declaraciones de mercanc&iacute;as y otros tr&aacute;mites de forma electr&oacute;nica, eliminando los largos procesos manuales. Esto no solo reduce los tiempos, sino tambi&eacute;n los costos.</p>\\n<p>Asesor&iacute;a Experta</p>\\n<p>Contar con un equipo calificado que maneje los requisitos legales y las normativas internacionales es clave. Esto ayuda a evitar errores y sanciones, optimizando todo el flujo comercial.</p>\"', '2024-11-27 22:54:13', '2024-12-05 16:11:12'),
(5, 'Carga Internacional: Innovación en Logística Global', 'carga-internacional-innovacion-en-logistica-global', 'transporte_5caae5ee-7502-4a8a-9472-6bf01c9789a1.jpg', 'La logística internacional está experimentando una revolución tecnológica que beneficia tanto a empresas como a consumidores. Estas innovaciones están haciendo que el transporte de mercancías sea más eficiente, rastreable y sostenible.', '\"<p>La log&iacute;stica internacional est&aacute; experimentando una revoluci&oacute;n tecnol&oacute;gica que beneficia tanto a empresas como a consumidores. Estas innovaciones est&aacute;n haciendo que el transporte de mercanc&iacute;as sea m&aacute;s eficiente, rastreable y sostenible.</p>\\n<p>Tecnolog&iacute;a de Rastreo<br>Blockchain y big data est&aacute;n transformando la forma en que las empresas monitorean y gestionan sus env&iacute;os. Ahora es posible rastrear cada movimiento en tiempo real, lo que reduce la incertidumbre y mejora la seguridad.</p>\\n<p>Optimizaci&oacute;n de Rutas<br>Con herramientas de an&aacute;lisis predictivo, las empresas pueden identificar las rutas m&aacute;s r&aacute;pidas y econ&oacute;micas, reduciendo costos y tiempos de entrega. Adem&aacute;s, esto contribuye a reducir la huella de carbono, aline&aacute;ndose con los est&aacute;ndares sostenibles.</p>\"', '2024-12-04 21:04:41', '2024-12-05 13:42:45'),
(6, 'Tendencias en Comercio Exterior para 2024', 'tendencias-en-comercio-exterior-para-2024', 'tendencias-de-comercio-internacional-2024_c8873111-b4bb-4be4-8dff-4a3f87fd0577.webp', 'La dinámica del comercio exterior en 2024 estará marcada por la digitalización de procesos aduaneros, la optimización de cadenas de suministro y las políticas comerciales más sostenibles. Estas tendencias están transformando las exportaciones e importaciones, generando nuevas oportunidades para empresas que invierten en tecnología y alianzas estratégicas.', '\"<p>La din&aacute;mica del comercio exterior en 2024 estar&aacute; marcada por la digitalizaci&oacute;n de procesos aduaneros, la optimizaci&oacute;n de cadenas de suministro y las pol&iacute;ticas comerciales m&aacute;s sostenibles. Estas tendencias est&aacute;n transformando las exportaciones e importaciones, generando nuevas oportunidades para empresas que invierten en tecnolog&iacute;a y alianzas estrat&eacute;gicas.</p>\\n<p>Digitalizaci&oacute;n de los Procesos Aduaneros<br>Uno de los cambios m&aacute;s importantes ser&aacute; la digitalizaci&oacute;n completa de los procesos aduaneros, lo que permitir&aacute; agilizar tr&aacute;mites, reducir errores y facilitar el cumplimiento normativo. La implementaci&oacute;n de herramientas como inteligencia artificial, blockchain y plataformas digitales est&aacute; en el centro de esta transformaci&oacute;n. Las empresas que adopten estas tecnolog&iacute;as podr&aacute;n reducir costos y mejorar la eficiencia de sus operaciones internacionales.</p>\\n<p>Optimizaci&oacute;n de las Cadenas de Suministro<br>Las interrupciones en las cadenas de suministro han obligado a las empresas a buscar soluciones m&aacute;s resilientes. En 2024, veremos un aumento en la diversificaci&oacute;n de proveedores y la utilizaci&oacute;n de herramientas de an&aacute;lisis predictivo para evitar problemas log&iacute;sticos. Adem&aacute;s, la regionalizaci&oacute;n de las cadenas de suministro ser&aacute; una tendencia clave, permitiendo a las empresas reducir tiempos y costos de transporte.</p>\\n<p>Enfoque en la Sostenibilidad<br>Con el auge de las normativas ambientales, las empresas est&aacute;n priorizando pr&aacute;cticas comerciales sostenibles. Esto incluye el uso de transporte m&aacute;s ecol&oacute;gico, el cumplimiento de est&aacute;ndares internacionales y la reducci&oacute;n de la huella de carbono en toda la cadena de suministro. Las pol&iacute;ticas comerciales tambi&eacute;n incentivar&aacute;n a las empresas a adaptarse a estas pr&aacute;cticas, ofreciendo beneficios como aranceles reducidos o acceso preferencial a mercados internacionales.</p>\\n<p>Alianzas Estrat&eacute;gicas y Nuevos Mercados<br>Las empresas est&aacute;n formando alianzas estrat&eacute;gicas para acceder a nuevos mercados y fortalecer su presencia global. La cooperaci&oacute;n internacional, especialmente en regiones emergentes, est&aacute; abriendo oportunidades para el crecimiento del comercio exterior. Por otro lado, el desarrollo de tratados comerciales modernos facilitar&aacute; el intercambio de bienes y servicios entre diferentes pa&iacute;ses.</p>\\n<p>En conclusi&oacute;n, 2024 ser&aacute; un a&ntilde;o de grandes desaf&iacute;os y oportunidades en el comercio exterior. Aquellas empresas que est&eacute;n preparadas para adaptarse a las nuevas tendencias tendr&aacute;n una ventaja competitiva en un mercado global en constante evoluci&oacute;n.</p>\"', '2024-12-04 21:07:10', '2024-12-05 13:38:23'),
(7, 'Transporte Nacional: Clave para la Economía Regional', 'transporte-nacional-clave-para-la-economia-regional', '2-camion-scaled_8e3ac747-f0db-498a-aede-5663fd04904c.jpg', 'El transporte nacional desempeña un papel fundamental en la economía, conectando regiones y permitiendo que los productos lleguen a los mercados locales de manera eficiente. La inversión en infraestructura y tecnología está transformando este sector.', '\"<p>El transporte nacional desempe&ntilde;a un papel fundamental en la econom&iacute;a, conectando regiones y permitiendo que los productos lleguen a los mercados locales de manera eficiente. La inversi&oacute;n en infraestructura y tecnolog&iacute;a est&aacute; transformando este sector.</p>\\n<p>Infraestructura Moderna<br>La mejora de carreteras, puentes y sistemas log&iacute;sticos asegura que las entregas sean m&aacute;s r&aacute;pidas y confiables. Esto no solo impulsa el comercio interno, sino que tambi&eacute;n facilita la integraci&oacute;n de las comunidades m&aacute;s alejadas al mercado nacional.</p>\\n<p>Sostenibilidad y Eficiencia<br>Las empresas est&aacute;n adoptando modelos de transporte m&aacute;s sostenibles, como camiones el&eacute;ctricos y sistemas de log&iacute;stica optimizados. Estas iniciativas no solo benefician al medio ambiente, sino que tambi&eacute;n reducen los costos operativos a largo plazo.</p>\"', '2024-12-04 21:09:18', '2024-12-05 13:38:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(191) NOT NULL,
  `url` varchar(200) DEFAULT NULL,
  `imagen2` varchar(200) DEFAULT NULL,
  `imagen1` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `url`, `imagen2`, `imagen1`, `created_at`, `updated_at`) VALUES
(100, 'Calaminas Galvanizadas', 'calaminas-galvanizadas', 'iconocalamina_6f2d81ba-cbfd-47e3-969a-d1bdcc1f364d.png', 'calamina-galvanizada_dc4ebba1-37c8-44c4-8fa5-e68904068f32.webp', NULL, NULL),
(103, 'Pistola Neumática', 'pistola-neumatica', 'iconopistola_a3281fdb-6699-46d8-a30d-80b117e55017.png', 'pistola-neumatica_21d0d4d7-4519-4e05-b65f-40a2daff789f.webp', NULL, NULL),
(104, 'Clavos en rollo', 'clavos-en-rollo', 'iconoclavo_e2ad3d44-296f-4b90-b749-355bd5f0ce10.png', 'clavos-en-rollo_f697bc0f-71e3-4724-8f9a-71d720d619c7.webp', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `configuraciones`
--

CREATE TABLE `configuraciones` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `titulo1` varchar(200) NOT NULL,
  `titulo2` varchar(200) NOT NULL,
  `titulo3` varchar(200) NOT NULL,
  `descripcion` varchar(600) NOT NULL,
  `imagen1` varchar(200) DEFAULT NULL,
  `imagen2` varchar(200) DEFAULT NULL,
  `telefono` varchar(191) NOT NULL,
  `celular1` varchar(191) NOT NULL,
  `correo1` varchar(191) NOT NULL,
  `correo2` varchar(191) DEFAULT NULL,
  `correo3` varchar(200) DEFAULT NULL,
  `horario1` varchar(191) NOT NULL,
  `direccion` varchar(191) NOT NULL,
  `facebook` varchar(191) DEFAULT NULL,
  `instagram` varchar(191) DEFAULT NULL,
  `twitter` varchar(191) DEFAULT NULL,
  `linkedin` varchar(191) DEFAULT NULL,
  `youtube` varchar(191) DEFAULT NULL,
  `whatsapp` varchar(191) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `configuraciones`
--

INSERT INTO `configuraciones` (`id`, `titulo1`, `titulo2`, `titulo3`, `descripcion`, `imagen1`, `imagen2`, `telefono`, `celular1`, `correo1`, `correo2`, `correo3`, `horario1`, `direccion`, `facebook`, `instagram`, `twitter`, `linkedin`, `youtube`, `whatsapp`, `created_at`, `updated_at`) VALUES
(1, 'Conexión Internacional', 'Comercio Exterior:', 'Tu Puente al Mundo', 'Formada por una corporación con mas de 15 años de experiencia en el comercio exterior, nuestro staff de colaboradores esta conformada por 58 profesionales con experiencia en el rubro', 'slide1_b10be352-550c-4518-8dd6-cca061917c47.webp', 'slide2_be4e7119-c20f-41c6-8612-9fcfd0eac188.webp', '(01) 5743645', '+51998181816', 'consultas@gruporabanal.com.pe', 'operaciones.lar@gruporabanal.com.pe', 'customer.ar@gruporabanal.com.pe', 'Lunes a Viernes: 8 a. m. - 5:30 p. m.', 'C.A.C Sector B, 1ra etapa, Mod. A Of. 215 - 216 - Callao', '#', '#', '#', '#', '#', 'https://api.whatsapp.com/send/?phone=%2B51998181816&text&type=phone_number&app_absent=0', NULL, '2024-12-05 18:48:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE `departamentos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `departamentos`
--

INSERT INTO `departamentos` (`id`, `nombre`, `created_at`, `updated_at`) VALUES
(1, 'Lima', NULL, NULL),
(5, 'PRUEBA', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `distritos`
--

CREATE TABLE `distritos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_departamento` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(191) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `distritos`
--

INSERT INTO `distritos` (`id`, `id_departamento`, `nombre`, `precio`, `created_at`, `updated_at`) VALUES
(1, 1, 'Molina vieja', 20.00, '2023-07-12 15:50:56', '2024-02-10 18:20:14'),
(2, 1, 'Comas', 50.00, '2023-07-12 19:42:17', '2023-07-12 19:42:17'),
(3, 1, 'Surco', 35.00, '2023-07-12 19:43:19', '2024-02-10 15:28:43'),
(4, 1, 'santa anita', 30.00, '2024-02-10 18:14:25', '2024-02-10 18:14:25'),
(5, 1, 'la molina constructores', 15.00, '2024-02-10 18:19:54', '2024-02-10 18:19:54'),
(6, 1, 'la molina raul ferrero', 15.00, '2024-02-10 18:20:54', '2024-02-10 18:20:54'),
(7, 1, 'miraflores', 35.00, '2024-02-10 18:21:19', '2024-02-10 18:21:19'),
(8, 1, 'manchay', 30.00, '2024-02-10 18:21:45', '2024-02-10 18:21:45'),
(9, 1, 'san juan de lurigancho', 50.00, '2024-02-10 18:23:19', '2024-02-10 18:23:19'),
(10, 1, 'san isidro', 40.00, '2024-02-10 18:24:12', '2024-02-10 18:24:12'),
(11, 1, 'san borja', 35.00, '2024-02-10 18:24:26', '2024-02-10 18:24:26'),
(12, 1, 'el augustino', 40.00, '2024-02-10 18:25:12', '2024-02-10 18:25:12'),
(13, 1, 'la molina mallorazgo', 18.00, '2024-02-10 18:26:03', '2024-02-10 18:26:03'),
(14, 1, 'chorrilos', 45.00, '2024-02-10 18:26:44', '2024-02-10 18:26:44'),
(15, 1, 'barranco', 45.00, '2024-02-10 18:26:57', '2024-02-10 18:26:57'),
(16, 1, 'villa el salvador', 50.00, '2024-02-10 18:27:11', '2024-02-10 18:27:11'),
(17, 1, 'san juan de miraflores', 40.00, '2024-02-10 18:32:49', '2024-02-10 18:32:49'),
(18, 1, 'la molina sol de la molina', 18.00, '2024-02-10 18:34:39', '2024-02-10 18:34:39'),
(21, 5, 'distrotprueba', 5.00, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_categoria` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(191) NOT NULL,
  `url` varchar(500) DEFAULT NULL,
  `imagenPrincipal` varchar(191) NOT NULL,
  `imagenesSecundarias` longtext DEFAULT NULL,
  `pdf` varchar(200) DEFAULT NULL,
  `caracteristicas` longtext DEFAULT NULL,
  `resumen` varchar(2000) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `id_categoria`, `nombre`, `url`, `imagenPrincipal`, `imagenesSecundarias`, `pdf`, `caracteristicas`, `resumen`, `precio`, `cantidad`, `created_at`, `updated_at`) VALUES
(3, 104, 'Clavos espiralados 45 mm', 'clavos-espiralados-45-mm', 'clavosespiralados_89a9e023-953f-4d2e-b6ce-cb1d46641c65.webp', '[\"recurso-1_38e676b0-658e-4b0b-8a2c-ace9d295d561.webp\",\"recurso2_09b0f9a3-18f3-4e65-b46a-77b1303590b7.webp\",\"recurso-3_7619596b-4b7f-4e17-ae0d-c5cf95ec8f86.webp\",\"recurso4_e847d5d6-050a-46b5-93ba-2c848738fbf0.webp\"]', 'ficha-tecnica-clavos-en-rollo-45-mm_78c79263-4f7e-47cb-a771-fb46227113a4.pdf', '<p><strong>Medida: 45 mm - 13/4</strong></p><p><br></p><p>Nuestros clavos son polimerizados lo que&nbsp;significa que tienen un recubrimiento especial&nbsp;que les brinda tres beneficios principales: Mayor agarre: El recubrimiento actúa como pegamento al calentarse, mejorando la sujeción en la madera.</p><p>Resistencia anticorrosiva: Protege el clavo de la oxidación, prolongando su vida útil.</p><p>Lubricación: Facilita la inserción en la madera al reducir la fricción inicial.</p><p><br></p><p><strong>USOS:</strong></p><p><br></p><ul><li>Fabricación de tarimas</li><li>Huacales</li><li>Cajas de madera</li><li>Pallets de madera</li><li>Estructuras de madera</li><li>Casas prefabricadas</li></ul>', 'Nuestros clavos son polimerizados lo que significa que tienen un recubrimiento especial que les brinda tres beneficios principales:\r\nMayor agarre: El recubrimiento actúa como pegamento al calentarse, mejorando la sujeción en la madera.', 200.00, 30, NULL, NULL),
(4, 104, 'Clavos espiralados 75 mm', 'clavos-espiralados-75-mm', 'clavosespiralados_41ed7484-940a-4b46-a983-f9c37f85bb1f.webp', '[\"recurso-1_dd4210f7-c2ac-4030-ad40-a045d5c90d96.webp\",\"recurso2_fde15a29-fad2-484c-99ce-f9893cf0af33.webp\",\"recurso-3_73291592-d703-44e1-9f13-a73e0b8b6675.webp\",\"recurso4_3abe44cc-821f-472d-bc1f-7ee48d1e04f9.webp\"]', 'ficha-tecnica-clavos-en-rollo-75-mm_493d2694-b847-4a45-b042-ee99e6fcef1d.pdf', '<p><strong>Medida: 75 mm - 3</strong></p><p><br></p><p>Nuestros clavos son polimerizados lo que&nbsp;significa que tienen un recubrimiento especial&nbsp;que les brinda tres beneficios principales: Mayor agarre: El recubrimiento actúa como pegamento al calentarse, mejorando la sujeción en la madera.</p><p>Resistencia anticorrosiva: Protege el clavo de la oxidación, prolongando su vida útil.</p><p>Lubricación: Facilita la inserción en la madera al reducir la fricción inicial.</p><p><br></p><p><strong>USOS:</strong></p><p><br></p><ul><li>Fabricación de tarimas</li><li>Huacales</li><li>Cajas de madera</li><li>Pallets de madera</li><li>Estructuras de madera</li><li>Casas prefabricadas</li></ul>', 'Nuestros clavos son polimerizados lo que significa que tienen un recubrimiento especial que les brinda tres beneficios principales:\r\nMayor agarre: El recubrimiento actúa como pegamento al calentarse, mejorando la sujeción en la madera.', 200.00, 10, NULL, NULL),
(5, 104, 'Clavos espiralados 57 mm', 'clavos-espiralados-57-mm', 'clavosespiralados_6b5bfbd3-1d3f-4b7b-a231-bc210d5df201.webp', '[\"recurso-1_a6738014-ce5c-41b3-85e3-d231112b2168.webp\",\"recurso2_b507aef5-1468-469a-9c28-a74c3729371e.webp\",\"recurso-3_9ddcf0b5-622f-4938-9672-011fd39c7cd2.webp\",\"recurso4_92bc9454-93a0-4636-be08-c44a690b111e.webp\"]', 'ficha-tecnica-clavos-en-rollo-57-mm_605c69a7-0288-45e7-9585-8a92ec262fa2.pdf', '<p><strong>Medida: 57 mm - 2</strong><sup><strong>14</strong></sup></p><p><br></p><p>Nuestros clavos son polimerizados lo que&nbsp;significa que tienen un recubrimiento especial&nbsp;que les brinda tres beneficios principales: Mayor agarre: El recubrimiento actúa como pegamento al calentarse, mejorando la sujeción en la madera.</p><p>Resistencia anticorrosiva: Protege el clavo de la oxidación, prolongando su vida útil.</p><p>Lubricación: Facilita la inserción en la madera al reducir la fricción inicial.</p><p><br></p><p><strong>USOS:</strong></p><p><br></p><ul><li>Fabricación de tarimas</li><li>Huacales</li><li>Cajas de madera</li><li>Pallets de madera</li><li>Estructuras de madera</li><li>Casas prefabricadas</li></ul>', 'Nuestros clavos son polimerizados lo que significa que tienen un recubrimiento especial que les brinda tres beneficios principales:\r\nMayor agarre: El recubrimiento actúa como pegamento al calentarse, mejorando la sujeción en la madera.', 200.00, 30, NULL, NULL),
(6, 100, 'Calaminas galvanizadas 0.18 mm', 'calaminas-galvanizadas-018-mm', 'calamina-galvanizada_6000a6f7-5a6d-4a70-ab26-94e7d1fe1c20.webp', '[\"recurso1_41488a29-e88e-4373-a586-21d9df15e00e.webp\",\"recurso2_85162e9e-1b87-436b-9f2b-70ecd5465b23.webp\",\"recurso3_cff26fb7-4e50-4723-b3c1-b93ddea296d9.webp\",\"recurso4_0873118c-8bef-4208-a3ba-db733677ee18.webp\",\"recurso5_da971584-30ef-4f30-a739-4b7caf46775f.webp\"]', 'ficha-tecnica-calamina-de-0.18_796252e4-6945-452c-ae17-b57dbb0c9ef5.pdf', '<p><strong>Medida y espesor: 800 x 3600 - 0.18 mm</strong></p><p><br></p><p>La calamina galvanizada ondulada es una lámina de acero de calidad comercial. Fabricada en frío y recubierta por ambas caras con Zinc, aplicado por proceso de inmersión en caliente o proceso electrolítico, que actúa como un agente anticorrosivo, prolongando la vida útil del producto bajo condiciones de humedad o lluvia.</p><p><br></p><p><strong>USOS:</strong></p><p><br></p><ul><li>Techado de casas</li><li>Almacenes</li><li>Plantas industriales</li><li>Revestimientos laterales</li><li>Hojalatería</li></ul>', 'La calamina galvanizada ondulada es una lámina de acero de calidad comercial. Fabricada en frío y recubierta por ambas caras con Zinc, aplicado por proceso de inmersión en caliente o proceso electrolítico, que actúa como un agente anticorrosivo, prolongando la vida útil del producto bajo condiciones de humedad o lluvia.', 200.00, 30, NULL, NULL),
(7, 100, 'Calaminas galvanizadas 0.22 mm', 'calaminas-galvanizadas-022-mm', 'calamina-galvanizada_cc03fd65-20de-40fa-9320-eff4a10227ec.webp', '[\"recurso1_34419334-5573-4fb8-bc67-a018cef0de9e.webp\",\"recurso2_b3009323-46bb-4c77-a652-84f2d8b31480.webp\",\"recurso3_ee975935-7de0-4e86-bd4b-32111b608e93.webp\",\"recurso4_de8271fe-9118-4341-a24b-a9ebb9582237.webp\",\"recurso5_e3222a93-5dca-4060-b004-f9d84a370dbf.webp\"]', 'ficha-tecnica-calamina-de-0.22_7b71e98d-9e30-41dc-9bbe-dd0594a79874.pdf', '<p><strong>Medida y espesor: 800 x 3600 - 0.22 mm</strong></p><p><br></p><p>La calamina galvanizada ondulada es una lámina de acero de calidad comercial. Fabricada en frío y recubierta por ambas caras con Zinc, aplicado por proceso de inmersión en caliente o proceso electrolítico, que actúa como un agente anticorrosivo, prolongando la vida útil del producto bajo condiciones de humedad o lluvia.</p><p><br></p><p><strong>USOS :</strong></p><p><br></p><ul><li>Techado de casas</li><li>Almacenes</li><li>Plantas industriales</li><li>Revestimientos laterales</li><li>Hojalatería</li></ul>', 'La calamina galvanizada ondulada es una lámina de acero de calidad comercial. Fabricada en frío y recubierta por ambas caras con Zinc, aplicado por proceso de inmersión en caliente o proceso electrolítico, que actúa como un agente anticorrosivo, prolongando la vida útil del producto bajo condiciones de humedad o lluvia.', 200.00, 30, NULL, NULL),
(8, 100, 'Calaminas galvanizadas 0.24 mm', 'calaminas-galvanizadas-024-mm', 'calamina-galvanizada_430c28c0-a66f-47f8-8204-889a4b5b1c43.webp', '[\"recurso1_75ad851a-1bab-4f66-bc4d-e8c4c55b1113.webp\",\"recurso2_c20cb5d7-389e-4dff-adf4-dade5b2e06df.webp\",\"recurso3_7d443dfe-f1da-4fa6-aff1-a7ac1c307fa5.webp\",\"recurso4_647fa7b3-0c03-40d9-b579-936f8bc8a3be.webp\",\"recurso5_5a8488be-17c0-4c6f-a4fe-30cd602d0acf.webp\"]', 'ficha-tecnica-calamina-de-0.24_c69d5279-870c-4564-8782-bde355cbf960.pdf', '<p><strong>Medida y espesor: 800 x 3600 - 0.24 mm</strong></p><p><br></p><p>La calamina galvanizada ondulada es una lámina de acero de calidad comercial. Fabricada en frío y recubierta por ambas caras con Zinc, aplicado por proceso de inmersión en caliente o proceso electrolítico, que actúa como un agente anticorrosivo, prolongando la vida útil del producto bajo condiciones de humedad o lluvia.</p><p><br></p><p><strong>USOS:</strong></p><p><br></p><ul><li>Techado de casas</li><li>Almacenes</li><li>Plantas industriales</li><li>Revestimientos laterales</li><li>Hojalatería</li></ul>', 'La calamina galvanizada ondulada es una lámina de acero de calidad comercial. Fabricada en frío y recubierta por ambas caras con Zinc, aplicado por proceso de inmersión en caliente o proceso electrolítico, que actúa como un agente anticorrosivo, prolongando la vida útil del producto bajo condiciones de humedad o lluvia.', 200.00, 30, NULL, NULL),
(9, 103, 'Pistola Neumática CN 70', 'pistola-neumatica-cn-70', 'pistolaneumatica_a20d40fd-e36f-4d20-b57b-73e54920d61a.webp', '[\"recurso1_67a92aeb-2341-440f-933a-760305aef8a5.webp\",\"recurso2_5714f023-1c81-4e0a-85ee-94fa6b06a74e.webp\",\"recurso3_11676e2e-8a08-43c4-812b-1943ecb038be.webp\",\"recurso4_fc91ef2e-3e34-4853-80a1-f1ff75446396.webp\",\"recurso5_985a6ffb-098e-4ac5-b730-06ea22583c75.webp\"]', NULL, '<p><strong>Medida: CN 70</strong></p><p><br></p><p>La pistola neumática CN 70 destaca por su potencia y precisión, ideal para trabajos exigentes en madera. Su diseño permite un agarre firme y su recubrimiento especial en los clavos ofrece mayor resistencia a la corrosión y fácil inserción, diferenciándola de otras pistolas neumáticas. Perfecta para construcciones de larga duración y aplicaciones industriales.</p><p><br></p><p><strong>USOS:</strong></p><p><br></p><ul><li>Fabricación de tarimas</li><li>Huacales</li><li>Cajas de madera</li><li>Pallets de madera</li><li>Estructuras de madera</li><li>Casas prefabricadas</li></ul>', 'La pistola neumática CN 70 destaca por su potencia y precisión, ideal para trabajos exigentes en madera. Su diseño permite un agarre firme y su recubrimiento especial en los clavos ofrece mayor resistencia a la corrosión y fácil inserción, diferenciándola de otras pistolas neumáticas. Perfecta para construcciones de larga duración y aplicaciones industriales.', 200.00, 30, NULL, NULL),
(10, 103, 'Pistola Neumática CN 55', 'pistola-neumatica-cn-55', 'pistolaneumatica_50e73701-0f31-4ea1-bd34-10f83f5eab51.webp', '[\"recurso1_cf74c9b0-1159-49dc-a0d1-e1c4de9f2a52.webp\",\"recurso2_9430acc7-f9a8-41e9-b9cf-f7d6eb1c2532.webp\",\"recurso3_87e88b6b-5870-4eb1-8e38-d7a772df3a15.webp\",\"recurso4_fd345e35-585f-49ec-91c6-9981b896bbaf.webp\",\"recurso5_4e8ff622-9df9-430e-bc79-dd5b5b79c130.webp\"]', NULL, '<p><strong>Medida: CN 55</strong></p><p><br></p><p>La pistola neumática CN 70 destaca por su potencia y precisión, ideal para trabajos exigentes en madera. Su diseño permite un agarre firme y su recubrimiento especial en los clavos ofrece mayor resistencia a la corrosión y fácil inserción, diferenciándola de otras pistolas neumáticas. Perfecta para construcciones de larga duración y aplicaciones industriales.</p><p><br></p><p><strong>USOS:</strong></p><p><br></p><ul><li>Fabricación de tarimas</li><li>Huacales</li><li>Cajas de madera</li><li>Pallets de madera</li><li>Estructuras de madera</li><li>Casas prefabricadas</li></ul>', 'La pistola neumática CN 55 destaca por su potencia y precisión, ideal para trabajos exigentes en madera. Su diseño permite un agarre firme y su recubrimiento especial en los clavos ofrece mayor resistencia a la corrosión y fácil inserción, diferenciándola de otras pistolas neumáticas. Perfecta para construcciones de larga duración y aplicaciones industriales.', 2.00, 100, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slug` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `slug`, `created_at`, `updated_at`) VALUES
(99, 'Administrador', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `id` bigint(20) NOT NULL,
  `titulo` varchar(200) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `imagen1` varchar(200) DEFAULT NULL,
  `resumen` varchar(500) NOT NULL,
  `descripcion` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`id`, `titulo`, `url`, `imagen1`, `resumen`, `descripcion`, `created_at`, `updated_at`) VALUES
(1, 'Transporte de Carga Nacional', 'transporte-de-carga-nacional', '2_7eb5c0ca-e8d2-4dfa-829f-20ff5049eb8e.webp', 'Ofrecemos un servicio de transporte de carga integral, gestionando todos los aspectos logísticos para asegurar que tus productos lleguen a su destino de manera segura y en el tiempo previsto. Desde cargas pequeñas hasta grandes volúmenes, proporcionamos soluciones flexibles para adaptarnos a las necesidades específicas de cada cliente.', '\"<p class=\\\"mb-3\\\">Ofrecemos un servicio de transporte de carga integral, gestionando todos los aspectos log&iacute;sticos para asegurar que tus productos lleguen a su destino de manera segura y en el tiempo previsto. Desde cargas peque&ntilde;as hasta grandes vol&uacute;menes, proporcionamos soluciones flexibles para adaptarnos a las necesidades espec&iacute;ficas de cada cliente.</p>\\n<p class=\\\"\\\">Trabajamos con una red de transportistas confiables que operan a nivel global, utilizando transporte a&eacute;reo, mar&iacute;timo y terrestre, siempre seleccionando la mejor opci&oacute;n en funci&oacute;n de las caracter&iacute;sticas de la carga y los plazos de entrega. Adem&aacute;s, ofrecemos un sistema de seguimiento en tiempo real para que los clientes puedan monitorear el estado de sus env&iacute;os en todo momento, brindando mayor seguridad y transparencia en el proceso.</p>\"', '2024-12-04 21:36:59', '2024-12-05 13:33:51'),
(2, 'Carga Internacional', 'carga-internacional', '4_9baa0ab0-9a9f-4ea5-89cf-4568c4f2b8b6.webp', 'Ofrecemos soluciones completas para la gestión de carga internacional, adaptándonos a las necesidades de cada cliente para asegurar que sus productos lleguen de manera eficiente y segura a cualquier parte del mundo. Nos encargamos de todo el proceso logístico, incluyendo el almacenamiento, embalaje y transporte, garantizando que cada envío cumpla con los más altos estándares de seguridad y normativas internacionales.', '\"<p class=\\\"mb-3\\\">Ofrecemos soluciones completas para la gesti&oacute;n de carga internacional, adapt&aacute;ndonos a las necesidades de cada cliente para asegurar que sus productos lleguen de manera eficiente y segura a cualquier parte del mundo. Nos encargamos de todo el proceso log&iacute;stico, incluyendo el almacenamiento, embalaje y transporte, garantizando que cada env&iacute;o cumpla con los m&aacute;s altos est&aacute;ndares de seguridad y normativas internacionales.</p>\\n<p class=\\\"mb-3\\\">Trabajamos con una red global de transportistas y agentes para ofrecer opciones flexibles y rentables. Ya sea que necesites transporte mar&iacute;timo, a&eacute;reo o terrestre, nos aseguramos de seleccionar la mejor opci&oacute;n en funci&oacute;n de tus necesidades espec&iacute;ficas, ya sea en t&eacute;rminos de costo, tiempo o tipo de carga. Adem&aacute;s, realizamos un seguimiento constante de tus env&iacute;os para garantizar que lleguen a su destino de manera puntual y en &oacute;ptimas condiciones.</p>\"', '2024-12-05 13:31:07', '2024-12-05 15:53:33'),
(3, 'Servicio de Aduanas', 'servicio-de-aduanas', '3_a8dcb310-42c4-4b4d-b0eb-8a4bd422516a.webp', 'Nuestro servicio de aduanas se encarga de gestionar todos los aspectos relacionados con la importación y exportación de mercancías, asegurando que los productos cumplan con las normativas locales e internacionales. Asesoramos a nuestros clientes en la correcta clasificación arancelaria, así como en la preparación y presentación de la documentación necesaria para evitar retrasos y sanciones.', '\"<p class=\\\"mb-3\\\">Nuestro servicio de aduanas se encarga de gestionar todos los aspectos relacionados con la importaci&oacute;n y exportaci&oacute;n de mercanc&iacute;as, asegurando que los productos cumplan con las normativas locales e internacionales. Asesoramos a nuestros clientes en la correcta clasificaci&oacute;n arancelaria, as&iacute; como en la preparaci&oacute;n y presentaci&oacute;n de la documentaci&oacute;n necesaria para evitar retrasos y sanciones.</p>\\n<p class=\\\"\\\">Adem&aacute;s, proporcionamos servicios de gesti&oacute;n de riesgos aduaneros, monitoreo de cambios en las regulaciones, y asesoramiento para la optimizaci&oacute;n de costos aduaneros. Con nuestra experiencia, ayudamos a las empresas a evitar posibles problemas en el proceso aduanero, garantizando un flujo de mercanc&iacute;as &aacute;gil y eficiente.</p>\"', '2024-12-05 13:31:37', '2024-12-05 13:31:37'),
(4, 'Comercio Exterior', 'comercio-exterior', '1_f42509a0-f707-47b0-9ab5-83b19b75b6ca.webp', 'Ofrecemos asesoramiento integral y soluciones personalizadas para facilitar el comercio internacional, abarcando todos los aspectos clave de los procesos de importación y exportación. Nuestro enfoque incluye la optimización de las cadenas de suministro, la gestión eficiente de la documentación aduanera, y el cumplimiento de las normativas y regulaciones globales, asegurando que cada operación se realice de manera fluida y sin contratiempos.', '\"<p class=\\\"mb-3\\\">Ofrecemos asesoramiento integral y soluciones personalizadas para facilitar el comercio internacional, abarcando todos los aspectos clave de los procesos de importaci&oacute;n y exportaci&oacute;n. Nuestro enfoque incluye la optimizaci&oacute;n de las cadenas de suministro, la gesti&oacute;n eficiente de la documentaci&oacute;n aduanera, y el cumplimiento de las normativas y regulaciones globales, asegurando que cada operaci&oacute;n se realice de manera fluida y sin contratiempos.</p>\\n<p class=\\\"\\\">Adem&aacute;s, brindamos soporte estrat&eacute;gico en la identificaci&oacute;n de oportunidades de mercado, la reducci&oacute;n de costos operativos y la maximizaci&oacute;n de la competitividad. Acompa&ntilde;amos a las empresas en la gesti&oacute;n de riesgos, la planificaci&oacute;n log&iacute;stica, y la b&uacute;squeda de soluciones innovadoras para mejorar la eficiencia y el tiempo de entrega. Con nuestra experiencia y red de contactos globales, permitimos que tu empresa se expanda a nivel internacional de manera segura, rentable y con una ventaja competitiva en los mercados globales.</p>\"', '2024-12-05 13:31:59', '2024-12-05 13:31:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transacciones`
--

CREATE TABLE `transacciones` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `paymentId` varchar(191) NOT NULL,
  `status` varchar(191) DEFAULT NULL,
  `transactionAmount` varchar(191) DEFAULT NULL,
  `paymentType` varchar(191) DEFAULT NULL,
  `paymentMethod` varchar(191) DEFAULT NULL,
  `detalle_tarjeta` longtext DEFAULT NULL,
  `detalle_comprador` longtext DEFAULT NULL,
  `additionalInfo` longtext DEFAULT NULL,
  `detalle_form` longtext DEFAULT NULL,
  `estado` int(11) NOT NULL DEFAULT 0,
  `paymentDate` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `transacciones`
--

INSERT INTO `transacciones` (`id`, `paymentId`, `status`, `transactionAmount`, `paymentType`, `paymentMethod`, `detalle_tarjeta`, `detalle_comprador`, `additionalInfo`, `detalle_form`, `estado`, `paymentDate`) VALUES
(87, '93142633335', 'approved', '2', 'debit_card', 'yape', '{\"cardholderName\":\"yape\",\"cardCountry\":\"PER\",\"expirationMonth\":1,\"expirationYear\":2025,\"firstSixDigits\":\"111111\",\"lastFourDigits\":\"3700\",\"dateCreated\":\"2024-11-15T10:40:06.000-04:00\",\"dateLastUpdated\":\"2024-11-15T10:40:06.000-04:00\"}', '{\"identificationNumber\":null,\"identificationType\":null,\"email\":\"jamiom@ucvvirtual.edu.pe\",\"phoneNumber\":null,\"phoneExtension\":null,\"phoneAreaCode\":null,\"lastName\":null,\"id\":\"1935391925\",\"entityType\":null,\"type\":null,\"firstName\":null}', '{\"authenticationCode\":null,\"availableBalance\":null,\"ipAddress\":\"38.25.10.175\",\"items\":\"[{\\\"category_id\\\":null,\\\"description\\\":null,\\\"id\\\":null,\\\"picture_url\\\":null,\\\"quantity\\\":\\\"1\\\",\\\"title\\\":\\\"prueba\\\",\\\"unit_price\\\":\\\"2\\\"}]\",\"nsuProcessadora\":null,\"payer\":{\"payerFirstName\":\"Jhosep Anthony\",\"payerPhone\":\"{\\\"number\\\":\\\"960613700\\\"}\"}}', '{\"apellidos\":\"Mio Trinidad\",\"delivery\":0,\"distrito\":\"\",\"method\":\"retiro\",\"nombre_recibe\":\"\",\"direccion\":\"\",\"cart\":\"[{\\\"id\\\":13,\\\"nombre\\\":\\\"prueba\\\",\\\"cantidad\\\":1,\\\"precio\\\":\\\"2.00\\\",\\\"imagenPrincipal\\\":\\\"pistolaneumatica_ca367632-cd7c-4b1f-b993-cb5fa1543e30.webp\\\",\\\"url\\\":\\\"clavos-en-rollo/prueba\\\",\\\"color\\\":null,\\\"stock\\\":2}]\",\"nombres\":\"Jhosep Anthony\",\"numero_recibe\":\"\",\"domain\":\"https://minacor.pe\",\"celular\":\"960613700\",\"departamento\":\"\",\"mensaje\":\"prueba\",\"email\":\"jamiom@ucvvirtual.edu.pe\"}', 1, '2024-11-15T10:40:11.000-04:00'),
(94, '93489406528', 'approved', '2', 'debit_card', 'yape', '{\"cardholderName\":\"yape\",\"cardCountry\":\"PER\",\"expirationMonth\":1,\"expirationYear\":2025,\"firstSixDigits\":\"111111\",\"lastFourDigits\":\"3700\",\"dateCreated\":\"2024-11-15T13:28:06.000-04:00\",\"dateLastUpdated\":\"2024-11-15T13:28:06.000-04:00\"}', '{\"identificationNumber\":null,\"identificationType\":null,\"email\":\"jhosepmiotrinidad@gmail.com\",\"phoneNumber\":null,\"phoneExtension\":null,\"phoneAreaCode\":null,\"lastName\":null,\"id\":\"2100136350\",\"entityType\":null,\"type\":null,\"firstName\":null}', '{\"authenticationCode\":null,\"availableBalance\":null,\"ipAddress\":\"198.7.58.79\",\"items\":\"[{\\\"category_id\\\":null,\\\"description\\\":null,\\\"id\\\":null,\\\"picture_url\\\":null,\\\"quantity\\\":\\\"1\\\",\\\"title\\\":\\\"Pistola Neumática CN 55\\\",\\\"unit_price\\\":\\\"2\\\"}]\",\"nsuProcessadora\":null,\"payer\":{\"payerFirstName\":\"Jhosep\",\"payerPhone\":\"{\\\"number\\\":\\\"960713700\\\"}\"}}', '{\"apellidos\":\"Mio\",\"delivery\":0,\"distrito\":\"Distrotprueba\",\"method\":\"retiro\",\"nombre_recibe\":\"\",\"direccion\":\"\",\"cart\":\"[{\\\"id\\\":10,\\\"nombre\\\":\\\"Pistola Neumática CN 55\\\",\\\"cantidad\\\":1,\\\"precio\\\":\\\"2.00\\\",\\\"imagenPrincipal\\\":\\\"pistolaneumatica_50e73701-0f31-4ea1-bd34-10f83f5eab51.webp\\\",\\\"url\\\":\\\"pistola-neumatica/pistola-neumatica-cn-55\\\",\\\"color\\\":null,\\\"stock\\\":100}]\",\"nombres\":\"Jhosep\",\"numero_recibe\":\"\",\"domain\":\"https://minacor.pe\",\"celular\":\"960713700\",\"departamento\":\"Prueba\",\"mensaje\":\"PRUEBA\",\"email\":\"jhosepmiotrinidad@gmail.com\"}', 1, '2024-11-15T13:28:11.000-04:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `id_rol` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `id_rol`, `email`, `password`) VALUES
(1, 'Grupo Rabanal', 99, 'admin@gruporabanal.com.pe', '$2b$10$oY.jpYRNTuFz56H7vv2KVOflsNwqefTRYTAv.8YXdnB/GVmNtdjYe');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categorias_nombre_unique` (`nombre`),
  ADD UNIQUE KEY `url` (`url`);

--
-- Indices de la tabla `configuraciones`
--
ALTER TABLE `configuraciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `distritos`
--
ALTER TABLE `distritos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `distritos_id_departamento_foreign` (`id_departamento`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `url` (`url`),
  ADD KEY `productos_id_categoria_foreign` (`id_categoria`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `transacciones`
--
ALTER TABLE `transacciones`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `transacciones_id_transaccion_unique` (`paymentId`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_id_rol_foreign` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `banners`
--
ALTER TABLE `banners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- AUTO_INCREMENT de la tabla `configuraciones`
--
ALTER TABLE `configuraciones`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `distritos`
--
ALTER TABLE `distritos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `transacciones`
--
ALTER TABLE `transacciones`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `distritos`
--
ALTER TABLE `distritos`
  ADD CONSTRAINT `distritos_ibfk_1` FOREIGN KEY (`id_departamento`) REFERENCES `departamentos` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_id_categoria_foreign` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
