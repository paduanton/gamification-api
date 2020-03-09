CREATE DATABASE kingplay;
USE kingplay;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
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
    'monitoria de qualidade',
    'ouvidoria'
  ) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = UTF8MB4;

CREATE TABLE IF NOT EXISTS `reports` (
  `id` int NOT NULL AUTO_INCREMENT,
  `users_id` int NOT NULL,
  `post` varchar(255) NOT NULL,
  `helpful` boolean NOT NULL,
  `description` varchar(10000) NOT NULL,
  `approved` boolean,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`users_id`) REFERENCES users (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB DEFAULT CHARSET = UTF8MB4; 