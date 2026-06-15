-- Inserir filmes de exemplo no catálogo PedroCine

INSERT INTO `movie` (titulo, genero, descricao, diretor, elenco, duracao, anoLancamento, classificacao, imagem, nota, disponivel, createdAt, updatedAt) VALUES

('Inception', 'Ficção Científica', 'Um ladrão especializado em roubar segredos corporativos dos inconscientes durante o sono é oferecido a chance de ter seu registro criminal apagado como recompensa.', 'Christopher Nolan', 'Leonardo DiCaprio, Marion Cotillard, Ellen Page', 148, 2010, 12, 'https://images.unsplash.com/photo-1489599849228-bed96c3f3eff?w=400&h=600&fit=crop', 8.8, true, NOW(), NOW()),

('The Shawshank Redemption', 'Drama', 'Dois homens presos em uma penitenciária formam uma amizade de longa duração, encontrando consolo e redenção através de atos de decência comum.', 'Frank Darabont', 'Tim Robbins, Morgan Freeman', 142, 1994, 12, 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=600&fit=crop', 9.3, true, NOW(), NOW()),

('The Dark Knight', 'Ação', 'Quando o Coringa, um criminoso caótico, causa terror em Gotham, Batman enfrenta seu maior desafio para restaurar a ordem à cidade.', 'Christopher Nolan', 'Christian Bale, Heath Ledger, Aaron Eckhart', 152, 2008, 12, 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop', 9.0, true, NOW(), NOW()),

('Pulp Fiction', 'Crime', 'As vidas de dois assassinos da máfia, uma boxer, a esposa de um chefe do crime e um casal de bandidos se entrelaçam de forma não-linear.', 'Quentin Tarantino', 'John Travolta, Samuel L. Jackson, Uma Thurman', 154, 1994, 14, 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop', 8.9, true, NOW(), NOW()),

('Forrest Gump', 'Drama', 'A vida é como uma caixa de chocolates, você nunca sabe o que vai conseguir. A história extraordinária de um homem com um QI baixo mas com grande determinação.', 'Robert Zemeckis', 'Tom Hanks, Sally Field, Gary Sinise', 142, 1994, 12, 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop', 8.8, true, NOW(), NOW()),

('The Matrix', 'Ficção Científica', 'Um hacker descobre a verdade sobre sua realidade e seu papel no conflito global entre humanos e uma raça de máquinas inteligentes.', 'Lana Wachowski, Lilly Wachowski', 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss', 136, 1999, 14, 'https://images.unsplash.com/photo-1533613220915-609f21a91335?w=400&h=600&fit=crop', 8.7, true, NOW(), NOW()),

('Interstellar', 'Ficção Científica', 'Um time de exploradores viaja através de um buraco de minhoca no espaço para tentar garantir a sobrevivência humana.', 'Christopher Nolan', 'Matthew McConaughey, Anne Hathaway, Jessica Chastain', 169, 2014, 12, 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop', 8.6, true, NOW(), NOW()),

('Gladiador', 'Ação', 'Um general romano falsamente acusado de traição luta pela sua liberdade na arena como gladiador enquanto busca vingança.', 'Ridley Scott', 'Russell Crowe, Joaquin Phoenix, Lucilla', 155, 2000, 14, 'https://images.unsplash.com/photo-1479918419535-c41f63e51c75?w=400&h=600&fit=crop', 8.5, true, NOW(), NOW()),

('Toy Story 4', 'Animação', 'Quando um novo brinquedo chamado Forky entra em seu grupo, Woody deve embarcar em uma aventura emocionante com seus amigos.', 'Josh Cooley', 'Voz: Tom Hanks, Tim Allen, Annie Potts', 100, 2019, 6, 'https://images.unsplash.com/photo-1535016120754-fd394db0dda6?w=400&h=600&fit=crop', 8.3, true, NOW(), NOW()),

('Avengers: Endgame', 'Ação', 'Após os eventos devastadores com Thanos, os Vingadores restantes devem encontrar uma maneira de derrotá-lo e reverter seus atos.', 'Anthony Russo, Joe Russo', 'Robert Downey Jr., Chris Evans, Mark Ruffalo', 181, 2019, 12, 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop', 8.4, true, NOW(), NOW()),

('La La Land', 'Romance', 'Enquanto perseguem seus sonhos em Los Angeles, um pianista e uma aspirante a atriz se encontram e se apaixonam.', 'Damien Chazelle', 'Ryan Gosling, Emma Stone', 128, 2016, 12, 'https://images.unsplash.com/photo-1489599849228-bed96c3f3eff?w=400&h=600&fit=crop', 8.0, true, NOW(), NOW()),

('Titanic', 'Romance', 'Um viajante pobre ganha uma passagem de primeira classe em um navio de luxo e se apaixona por uma jovem noiva.', 'James Cameron', 'Leonardo DiCaprio, Kate Winslet', 194, 1997, 12, 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=600&fit=crop', 7.9, true, NOW(), NOW()),

('The Godfather', 'Crime', 'O patriarca de uma dinastia do crime organizado transfere o controle de seu império clandestino para seu filho mais jovem relutante.', 'Francis Ford Coppola', 'Marlon Brando, Al Pacino, James Caan', 175, 1972, 14, 'https://images.unsplash.com/photo-1489599849228-bed96c3f3eff?w=400&h=600&fit=crop', 9.2, true, NOW(), NOW()),

('Jurassic Park', 'Ficção Científica', 'Um magnata cria um parque repleto de dinossauros recriados geneticamente, mas tudo sai do controle quando eles escapam.', 'Steven Spielberg', 'Sam Neill, Laura Dern, Jeff Goldblum', 127, 1993, 12, 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop', 8.1, true, NOW(), NOW()),

('Avatar', 'Ficção Científica', 'Um paralítico marinheiro recebe a chance de habitar um corpo alienígena enquanto os humanos tentam colonizar um planeta extraterrestre.', 'James Cameron', 'Sam Worthington, Zoe Saldana', 162, 2009, 12, 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop', 7.8, true, NOW(), NOW());
