
<h1 align="center">
  <img src="assets/android/logo.png" width="100" /> 
</h1>

### Como executar o GeniusGame

**1.** clone este repositório em um diretório de sua preferência utilizando o comando: `git clone https://github.com/gabrielbarth/geniusGame.git`;

**2.** instale as dependências do projeto através do comando `yarn` ou `npm install`;

**2.1.** caso esteja utilizando sistema MacOS, entre no diretório `ios` do projeto e execute o comando `pod install` para baixar e instalar a bibliotecas do projeto através do CocoaPods;

**3.** execute o comando `yarn <plataforma-aqui>` ou `npm run <plataforma-aqui>` (android/ios) para que o aplicativo seja instalado no seu dispositivo/emulador.

**4.** execute o comando `yarn start` ou `npm run start` para que o aplicativo se inicie no seu dispositivo/emulador.

### Interface do GeniusGame

<p align="center">
  <img src="assets/app.png" width="500">
</p>
<br>

### Sobre o teste

- Haverá 4 cores disponíveis para click no aplicativo. 
- O usuário irá clicar no botão começar o jogo. A partir desse momento a primeira cor irá piscar e emitir um som.
- O usuário devera tocar a cor que piscou. 
- Em seguida o sistema toca a mesma cor e mais uma randomicamente. 
- O usuário deverá tocar as cores na mesma sequencia.
- O jogo continua assim até que o usuário erre.


### Requisitos

- Deve haver um botão para iniciar o jogo.
- Quando o sistema repete a sequencia deve se tocar um som diferente para cada cor.
- Quando o usuário clica na cor o mesmo som deve ser emitido.
- Quando o usuário errar a sequencia é necessário enviar um alerta para ele o avisando. Nesse momento um botão de reiniciar o game deverá aparecer.
- Deve haver uma Splash screen quando o usuário entra no aplicativo.
- Não pode utilizar o expo.

### O aplicativo

- Não precisa ser lindo. Não iremos validar suas habilidades de UX/UI e sim como você desenvolve á sua logica.
- Os sons e cores ficam a seu critério.
- Qualquer coisa a mais que seja feita será um diferencial.


### Teste Final

- Iremos validar se todos os requisitos foram cumpridos e se o aplicativo funciona tanto para iOS quanto para Android. 
- Iremos testar em diferentes resoluções, então deverá ser responsivo.
- O App jamais poderá dar Crash.
