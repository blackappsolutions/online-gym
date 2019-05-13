CREATE SCHEMA video-fitness CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
GRANT ALL PRIVILEGES ON video-fitness.* TO 'video-fitness'@'localhost' IDENTIFIED BY 'video-fitness';
GRANT ALL PRIVILEGES ON video-fitness.* TO 'video-fitness'@'%' IDENTIFIED BY 'video-fitness';
