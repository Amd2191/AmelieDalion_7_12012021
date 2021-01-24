-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : Dim 24 jan. 2021 à 18:48
-- Version du serveur :  10.4.17-MariaDB
-- Version de PHP : 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `database_development_groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `postId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `likes`
--

CREATE TABLE `likes` (
  `id` int(11) NOT NULL,
  `postId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `likes` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `posts`
--

INSERT INTO `posts` (`id`, `userId`, `title`, `content`, `attachment`, `likes`, `createdAt`, `updatedAt`) VALUES
(6, 31, 'Bravo tout le monde', 'Super semaine', 'http://localhost:3000/images/posts/well_done.gif1611495925064.gif', 0, '2021-01-24 13:45:25', '2021-01-24 13:45:25'),
(7, 32, 'Petite pause?', 'Je vais prendre un café en salle de pause si d\'autres personnes veulent de joindre à moi :)', 'http://localhost:3000/images/posts/coffee.gif1611496452370.gif', 0, '2021-01-24 13:54:12', '2021-01-24 13:54:12'),
(11, 34, 'Bonjour', 'C\'est mon premier jour parmi vous, hâte de faire la connaissance de tout le monde', 'null', 0, '2021-01-24 15:03:26', '2021-01-24 15:03:26');

-- --------------------------------------------------------

--
-- Structure de la table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20210119093545-create-user.js'),
('20210119093713-create-post.js'),
('20210120150045-create-likes.js'),
('20210120150232-create-comments.js');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `picture`, `bio`, `isAdmin`, `createdAt`, `updatedAt`) VALUES
(24, 'Comcom', 'communication@groupomania.fr', '$2b$05$jWupDM.J7N7q/4kpO7b4G.qhIhKk5mKwOayVz08a2F5swokIpjjOW', 'http://localhost:3000/images/users/logo.png1611400075653.png', 'Partager.. la bonne info ou un bon gâteau', 1, '2021-01-23 11:07:55', '2021-01-23 11:07:55'),
(25, 'Margot', 'margot@groupomania.fr', '$2b$05$75c3pAAVkHPjA61Rtdr.meDTSPU/5ze0hJQ1THO/KrNqyxGahg6i6', 'http://localhost:3000/images/users/AvatarMaker.png1611400196717.png', 'null', 0, '2021-01-23 11:09:56', '2021-01-23 11:09:56'),
(26, 'Paul', 'paul@groupomania.fr', '$2b$05$C1HXZd5T1VWEstBov/dYiOT1QTLGf3v9XWiWmWvZNJbuSn71Zpyp6', 'http://localhost:3000/images/users/AvatarMaker_(5).png1611400343900.png', 'les machines ont pris le pouvoir', 0, '2021-01-23 11:12:24', '2021-01-23 11:12:24'),
(28, 'Alexis', 'alexis@groupomania.fr', '$2b$05$jFxRzjYOKAo3Qn.hitpllezYjTsL.rUFnc4HEVptbq5UrvTy1OJPS', 'http://localhost:3000/images/users/AvatarMaker_(7).png1611417940884.png', 'null', 0, '2021-01-23 16:05:40', '2021-01-23 16:05:40'),
(31, 'Guillaume', 'guillaume@groupomania.fr', '$2b$05$Lj/k5sIJuSqxXMeMtgVopemILm7a1PltwqwEnAlHfTt0JDp/BqF36', 'http://localhost:3000/images/users/AvatarMaker_(8).png1611424165812.png', 'null', 0, '2021-01-23 17:49:25', '2021-01-23 17:49:25'),
(32, 'Catherine', 'catherine@groupomania.fr', '$2b$05$iIHWn.edi3UMhMVdhY/C1uoE2eFzlrQucDVUAOxskv4kyj5AkT3kW', 'http://localhost:3000/images/users/AvatarMaker.png1611496388216.png', 'null', 0, '2021-01-24 13:53:08', '2021-01-24 13:53:08'),
(34, 'Sharon', 'sharon@groupomania.fr', '$2b$05$D7m5Qs5vs7mxQHButoJV/ONe9cmLwc3ttlx.Ka.Vm7dRSc4CAkavy', 'http://localhost:3000/images/users/AvatarMaker_(1).png1611496961024.png', 'null', 0, '2021-01-24 14:02:41', '2021-01-24 14:02:41');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `postId` (`postId`),
  ADD KEY `userId` (`userId`);

--
-- Index pour la table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `postId` (`postId`),
  ADD KEY `userId` (`userId`);

--
-- Index pour la table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Index pour la table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`),
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
