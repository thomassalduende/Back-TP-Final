INSERT INTO provincia(id_provincia, nombre)
VALUES(1, 'Entre Rios'),(2, 'Misiones'),(3, 'Corrientes'),(4, 'Buenos Aires'),(5, 'Santa fe'),(6, 'San Luis'),
(7, 'Cordoba'),(8, 'Catamarca'),(9, 'San Juan'),
(10, 'Jujuy'),(11, 'Salta'),(12,'Chubut'),
(13, 'Tucuman'),(14, 'Neuquen'),(15, 'Santa Cruz');

INSERT INTO ciudad(cod_postal, nombre, id_provincia)
VALUES(3260,'Concepcion del Uruguay',1), (2854, "Larroque", 1), (3261,'Posadas',2),(3262,'Corrientes', 3),
(3263,'Caba',4),(3264,'Rosario',5),(3265,'Merlo',6),
(3266,'Rio Tercero',7),(3267,'San Fernardo del valle de catamarcar',8),(3268,'San Juan',9),
(3269,'Tilcara',10),(3270,'Salta',11),(3271,'Rawson',12),
(3272,'San Miguel de Tucuman',13),(3273,'Neuquen',14),(3274,'Rio Gallegos',15);

INSERT INTO autor(id_autor, nombre)
VALUES(43267890,'Carlos Maire'),(43267891,'Carlos Miguel'),(43267892,'Florencia Sanchez'),
(43267893,'Miriam Sanchez'),(43267894,'Ester Lujan'),(43267895,'Jorge Sanchez'),
(43267896,'Esteban Wilson'),(43267897,'Maike Sanchez'),(43267898,'Jimmy Sanchez');


INSERT INTO editorial(id_editorial, nombre)
VALUES (1, 'Morango'),(2, 'Dinarl'),(3, 'Carto'),(4, 'Luke'),(5, 'Nest'),(6, 'Niron'),(7, 'Rayos');

INSERT INTO books(isbn, url_imagen, nombre, precio, stock, descripcion, fecha_ingreso, descuento, valoracion, id_editorial)
VALUES('123', 'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg','Android in Action, Second Edition', 500, 10, 'Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond  this fast-paced book puts you in the drivers seat as you learn important architectural concepts and implementation strategies. You', '13/04', 8, 1, 3),
('124','https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg', 'Unlocking Android', 250, 5,'Unlocking Android: A Developers Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout', '12/07', 5 , 7, 4),
('125','https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg','Specification by Example',2000,12,'nada','2/09',8,2,5,4, 5),
('126','https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg','Flex 3 in Action',2530,13,'New web applications require engaging user-friendly','13/04',8,4,6,3, 3),
('127','https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg','Flex 4 in Action',2150,4,'Using Flex, you can create high-quality, effective, and interactive Rich Internet Applications','13/04',8,1,7,6, 2),
('128','https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alag.jpg','Collective Intelligence in Action', 2159, 14,'s a great deal of wisdom in a crowd','22/02',1,5,1,6,4),
('129','https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg', 'Unlocking Android', 250, 5,'Unlocking Android: A Developers Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout', '12/07', 5 , 7, 4),
('130','https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg','Specification by Example',2000,12,'nada','12/09',8,2,5,4, 5),
('131','https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg','Flex 3 in Action',2530,13,'New web applications require engaging user-friendly','13/04',8,4,6,3, 3),
('132','https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg','Flex 4 in Action',2150,4,'Using Flex, you can create high-quality, effective, and interactive Rich Internet Applications','13/04',8,1,7,6, 2),
('133','https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alag.jpg','Collective Intelligence in Action',2159,14,'eres a great deal of wisdom in a crowd','22/02',1,5,1,6,4),
('134','https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg', 'Unlocking Android', 250, 5,'Unlocking Android: A Developers Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout', '12/07', 5 , 7, 4),
('135','https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg','Specification by Example',2000,12,'nada','12/09',8,2,5,4, 5),
('136','https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg','Flex 3 in Action',2530,13,'New web applications require engaging user-friendly','13/04',8,4,6,3, 3),
('137','https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg','Flex 4 in Action',2150,4,'Using Flex, you can create high-quality, effective, and interactive Rich Internet Applications','13/04',8,1,7,6, 2),
('138','https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alag.jpg','Collective Intelligence in Action',2159,14,'eres a great deal of wisdom in a crowd','22/02',1,5,1,6,4)



INSERT INTO genero(id_genero, nombre, url_imagen)
VALUES (1, 'Fantasia', 'https://cdn.pixabay.com/photo/2016/04/04/20/34/treehouse-1308108_960_720.jpg'),
        (2, 'Ciencia ficcion', 'https://cdn.pixabay.com/photo/2018/03/13/15/57/steampunk-3222894_960_720.jpg'),
        (3, 'Ficcion', 'https://cdn.pixabay.com/photo/2016/09/18/08/45/science-fiction-1677542_960_720.jpg'),
        (4, 'Comedia','https://cdn.pixabay.com/photo/2017/02/24/07/45/woman-2094172_960_720.jpg'),
        (5, 'Suspenso', 'https://cdn.pixabay.com/photo/2019/09/22/16/50/tunnel-4496526_960_720.jpg');


INSERT INTO direccion (nombre, dni, direccion, "infoAdicional",telefono, id_user, cod_postal)
VALUES ('Thomas Salduende', 44152717, 'Mario Lound 268', 'casa 7', 3446476809, 1, 2854);


INSERT INTO autor_book(isbn, id_autor)
VALUES 
        ('123', 43267890),
        ('124', 43267890),
        ('125', 43267891),
        ('126', 43267892),
        ('127', 43267897),
        ('128', 43267897),
        ('129', 43267897),
        ('130', 43267897),
        ('131', 43267896),
        ('132', 43267896),
        ('133', 43267897),
        ('134', 43267898),
        ('135', 43267898),
        ('136', 43267896),
        ('137', 43267896),
        ('138', 43267898),
      

INSERT INTO public.genero_book(isbn, id_genero)
VALUES
        ('8418174072', 2),
        ('8478885196', 2),
        ('1644736136', 1),
        ('1644736136', 5),
        ('8423362477', 4),
        ('8423362477', 3),
        ('8466349294', 4),
        ('8466349294', 3),
        ('8497930010', 5),
        ('8466356894', 1),
        ('8466356894', 2),
        ('8417854312', 1),
        ('8417854312', 2),
        ('8417854363', 1),
        ('8417854363', 2),
        ('1644735814', 1),
        ('8417347003', 1),
        ('8417347003', 2),
        ('8466672478', 3),