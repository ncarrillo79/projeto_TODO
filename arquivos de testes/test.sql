--CREATE TABLE usuarios (
    --nome VARCHAR(50), 
    --email varchar(100),
    --idade INT
--)

---INSERT INTO usuarios (nome, email, idade) VALUES (
  --  "Maria Clara",
  --  "email@gmail.com",
  --  26
 --   );

 SELECT * FROM usuarios WHERE idade=8;

 SELECT * FROM usuarios WHERE nome = 'Maria Clara';

  SELECT * FROM usuarios WHERE idade >= 18;

 DELETE FROM usuarios WHERE nome = 'Joçao';

 UPDATE usuarios SET nome = "Nome de Teste" WHERE nome="Maria Clara";
 

