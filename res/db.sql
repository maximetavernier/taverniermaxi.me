CREATE TABLE `taverniegjtatav`.`privateroom_user` (
	`id` CHAR(36) NOT NULL,
	`creation_date` DATETIME DEFAULT NOW() NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

CREATE TABLE `taverniegjtatav`.`privateroom_metadata` (
	`id` CHAR(36) NOT NULL,
	`creation_userId` CHAR(36) NOT NULL,
	`creation_date` DATETIME DEFAULT NOW() NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`creation_userId`) REFERENCES privateroom_user (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

CREATE TABLE `taverniegjtatav`.`privateroom_access_level` (
	`id` CHAR(36) NOT NULL,
	`title` VARCHAR(128) NOT NULL,
	`description` TEXT NULL,
	`data_value` SMALLINT NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

CREATE TABLE `taverniegjtatav`.`privateroom_login` (
	`id` CHAR(36) NOT NULL,
	`metadataId` CHAR(36) NOT NULL,
	`userId` CHAR(36) NOT NULL,
	`login` VARCHAR(256) NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`metadataId`) REFERENCES privateroom_metadata(`id`),
	FOREIGN KEY (`userId`) REFERENCES privateroom_user(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

CREATE TABLE `taverniegjtatav`.`privateroom_shadow_passwd` (
	`id` CHAR(36) NOT NULL,
	`metadataId` CHAR(36) NOT NULL,
	`userId` CHAR(36) NOT NULL,
	`hash` CHAR(40) NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`metadataId`) REFERENCES privateroom_metadata(`id`),
	FOREIGN KEY (`userId`) REFERENCES privateroom_user(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

CREATE TABLE `taverniegjtatav`.`privateroom_user_access_level` (
	`id` CHAR(36) NOT NULL,
	`metadataId` CHAR(36) NOT NULL,
	`userId` CHAR(36) NOT NULL,
	`accessLevelId` CHAR(36) NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`metadataId`) REFERENCES privateroom_metadata(`id`),
	FOREIGN KEY (`userId`) REFERENCES privateroom_user(`id`),
	FOREIGN KEY (`accessLevelId`) REFERENCES privateroom_access_level(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

INSERT
  INTO `taverniegjtatav`.`privateroom_access_level` (`id`,`title`,`description`,`data_value`)
  VALUES ("6F6054BD-3C1C-F1F3-140D-35417DA0C06C", "admin", "", 0),
         ("53A5A7B2-82E6-81B4-FA05-D5D95FA83B92", "user", "Simple user", 1);

INSERT
  INTO `taverniegjtatav`.`privateroom_user` (`id`)
	VALUES ("B0D013C3-65FD-6C23-918C-D610AB664BE0");

INSERT
  INTO `taverniegjtatav`.`privateroom_metadata` (`id`,`creation_userId`)
	VALUES ("ED085897-9407-C1F1-BDE0-BB60E11F4CA8", "B0D013C3-65FD-6C23-918C-D610AB664BE0"),
	       ("EAD17CFD-F151-40EC-A798-E6BF61BA7B21", "B0D013C3-65FD-6C23-918C-D610AB664BE0"),
				 ("DEFA13BB-BF60-FB48-6598-269B592EB0A8", "B0D013C3-65FD-6C23-918C-D610AB664BE0");

INSERT
  INTO `taverniegjtatav`.`privateroom_login` (`id`, `metadataId`, `userId`, `login`)
	VALUES ("87910553-AA76-765E-402A-A2DE26709BB4", "ED085897-9407-C1F1-BDE0-BB60E11F4CA8", "B0D013C3-65FD-6C23-918C-D610AB664BE0", "maxlarsouille");

INSERT
  INTO `taverniegjtatav`.`privateroom_user_access_level` (`id`,`metadataId`,`userId`,`accessLevelId`)
	VALUES ("7D576C99-E0D4-495F-690E-4B3EAECED07E", "EAD17CFD-F151-40EC-A798-E6BF61BA7B21", "B0D013C3-65FD-6C23-918C-D610AB664BE0", "6F6054BD-3C1C-F1F3-140D-35417DA0C06C");

INSERT
  INTO `taverniegjtatav`.`privateroom_shadow_passwd` (`id`,`metadataId`,`userId`,`hash`)
  VALUES ("429D019D-5567-262D-4AC3-C4E0203BC425", "DEFA13BB-BF60-FB48-6598-269B592EB0A8", "B0D013C3-65FD-6C23-918C-D610AB664BE0", "a3c6d03cd0e725a123fb4841414414cca4a419f6");