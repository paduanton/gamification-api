CREATE DATABASE gamification;
USE gamification;

CREATE TABLE IF NOT EXISTS `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` enum(
    'especialist',
    'admin',
    'default'
    ) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = UTF8MB4; 

CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `roles_id` int NOT NULL,
  `name` varchar(30) NOT NULL,
  `last_name` varchar(70) NOT NULL,
  `intranet_login` varchar(25) UNIQUE NOT NULL,
  `department` enum(
    'n1',
    'n2',
    'desenvolvimento',
    'infraestrutura',
    'cobrança',
    'comercial',
    'financeiro',
    'marketing',
    'sucesso do cliente',
    'administrativo',
    'departamento pessoal',
    'recursos humanos',
    'jurídico',
    'manutenção',
    'processos e qualidade',
    'monitoria de qualidade',
    'ouvidoria'
  ) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`roles_id`) REFERENCES roles (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB DEFAULT CHARSET = UTF8MB4;

CREATE TABLE IF NOT EXISTS `reports` (
  `id` int NOT NULL AUTO_INCREMENT,
  `users_id` int NOT NULL,
  `post_url` varchar(255) NOT NULL,
  `provider` enum(
    'wiki interna',
    'wiki externa'
    ) NOT NULL,
  `helpful` boolean NOT NULL,
  `description` varchar(10000) NOT NULL,
  `approved` boolean,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`users_id`) REFERENCES users (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB DEFAULT CHARSET = UTF8MB4; 

CREATE TABLE IF NOT EXISTS `users_reports_score` (
  `id` int NOT NULL AUTO_INCREMENT,
  `users_id` int NOT NULL,
  `reports_id`int NOT NULL,
  `value` enum(
    '50',
    '70',
    '60',
    '80'
    ) NOT NULL, 
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`users_id`) REFERENCES users (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  FOREIGN KEY (`reports_id`) REFERENCES reports (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB DEFAULT CHARSET = UTF8MB4; 

CREATE TABLE IF NOT EXISTS `leaderboards` (
  `id` int NOT NULL AUTO_INCREMENT,
  `users_id` int NOT NULL UNIQUE,
  `total_score` int NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`users_id`) REFERENCES users (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB DEFAULT CHARSET = UTF8MB4;

CREATE TABLE IF NOT EXISTS `scores_history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `users_id` int NOT NULL,
  `type` enum(  
    'reports'
    ) NOT NULL,
  `value` enum(
    '50',
    '70',
    '60',
    '80'
    ) NOT NULL,  
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`users_id`) REFERENCES users (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB DEFAULT CHARSET = UTF8MB4;

DELIMITER $$
CREATE TRIGGER set_leaderboards
  AFTER INSERT
  ON users
  FOR EACH ROW
  BEGIN
    INSERT INTO leaderboards (users_id, total_score)
    VALUES (NEW.id, '0');
  END$$
DELIMITER ;

INSERT INTO `roles` (`id`, `name`) VALUES (NULL, 'especialist');
INSERT INTO `roles` (`id`, `name`) VALUES (NULL, 'admin');
INSERT INTO `roles` (`id`, `name`) VALUES (NULL, 'default');