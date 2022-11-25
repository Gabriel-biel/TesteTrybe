
<h1 align="center"> TRYBE <> NG.CASH | TECH CHALLENGE</h1>

  ![logo_ng](https://user-images.githubusercontent.com/61027045/203921990-17452006-20de-4d88-8031-74bc9e3a7125.png)

<h4 align="center"> :zap:Projeto finalizado:zap:</h4>

![Badge em Finalizado](http://img.shields.io/static/v1?label=LICENSE&message=%20MIT&color=GREEN&style=for-the-badge)

## Descrição
<p>Projeto criado com o propósito Estruturar uma aplicação web fullstack, dockerizada, cujo objetivo seja possibilitar que usuários da NG consigam realizar transferências internas entre si.</p>
  
<h4 align="center"> :construction: Pré requisitos :construction:</h4>

- `Nodejs`: https://nodejs.org/en/
- `docker`: https://docs.docker.com/desktop/install/windows-install/
- `Visual Studio Code ou Editor de código de sua preferência`: https://code.visualstudio.com/
- `Beekeeper ou um outro gerenciador de BD de sua preferência`: https://www.beekeeperstudio.io/

### Tela de Registro onde será possivel cadastrar novo usuário
![image](https://user-images.githubusercontent.com/61027045/203929449-83bda86d-cc8c-48ee-ab2c-9cfeaf2ae264.png)

### Login
![image](https://user-images.githubusercontent.com/61027045/203931129-b7dd4dcd-c8df-48d2-b50f-4222b03e90bd.png)

### Dashboard
![image](https://user-images.githubusercontent.com/61027045/203932026-2323de4c-6ca3-4c21-b1a6-f5b7dbbdacd4.png)
<!-- ![TesteTrybe](https://user-images.githubusercontent.com/61027045/203659213-c7e756e3-9cc7-4995-9cc6-953d1f581619.png) -->

<p>Nessa área é possivel não apenas visualizar o saldo e as saídas, como também realizar novas transações, além disso e possivel realizar o filtro das transações por data, entradas ou saídas, respeitando as regras de negócio</p>

  
## Instalação
  <p>Após clonar o repositório ou baixar-lo via .zip para que o projeto funcione corretamente deve-se seguir as seguintes instruções de instalação</p>
  
   ###  Primeiro instalar todas as depedências do projeto
   <p>para isso vá ate a pasta TesteTrybe/server e no seu terminal rode: </p>
  

```bash
npm i
```
  
 <p>ou <p>
  
```bash
yarn
```

<p>Em seguida vá até a pasta TesteTrybe/web e rode: </p>

 ```bash
npm i
```
  
  <p>ou</p>
  
```bash
yarn
```
  
  ##
  
  ### Tambem é preciso criar um conteiner docker 
  <p> Rode o seguinte comando no seu terminal: </p>

```bash
docker run --name nome_do_container -p 5432:5432 -e POSTGRES_PASSWORD=senha_de_acesso -d postgres
```

<p>Depois para deixa-lo rodando em segundo plano</p>

```bash
docker start ng_trybe_container 
```
  
  ##
  
  ### Deve-se Ccriar um banco de dados no container, eu uso o Beekeeper para essa tarefa
  
  ![Criando database](https://user-images.githubusercontent.com/61027045/204053531-dae4f716-63aa-40a6-a125-c5306f9b3b8e.png)
  
  ##
  
  ### Configs de coneção o Banco de dados
  
  <p>Na raiz do projeto renomear `.env.dev` para `.env`</p>
  <p>Adicionar as credeciais de acesso ao banco de dados no arquivo `.env` </p>
  <p>Gerar uma Auth_Secret apartir de um gerador de MD5 de sua preferência
    
  ##
    
  ### Criar as tabelas do banco de dados
  <p>Na pasta TesteTrybe/server rodar o seguinte comando no seu terminal: </p>

```bash
yarn prisma migrate dev
```

  <p>Sua resposta deve ser algo parecido com isso</p>

  ![Saida do terminal](https://user-images.githubusercontent.com/61027045/204056041-c5308051-db88-44cf-b5d1-961561c6f43d.png)

  ##
  
  ### Hora de dar start na aplicação
  <p>Rodar na pasta TesteTrybe/server o seguinte comando: </p>
  
```bash
yarn dev:server
```

  <p>Rodar na pasta TesteTrybe/web o seguinte comando: </p>
  
```bash
yarn dev
```

