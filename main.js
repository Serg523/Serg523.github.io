* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
    font-size: 15pt;
    font-family: 'Comfortaa';
    background: #202833;
}
#aboutCont {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.4);
  display: none;
  justify-content: center;
  align-items: center;
}
#aboutCont.active {
  display: flex;
}
.aboutMe {
  width: 60vw;
  height: 40vh;
  background: #202833;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.75);
}
.aboutMe h3 {
  font-size: 3.5vh;
  font-weight: bold;
}
.dev {
  color: #fff;
  letter-spacing: 2px;
  font-size: 2.5vh;
}
.aboutMe button {
  width: 15vw;
  height: 7vh;
  border: none;
  color: #fff;
  font-size: 2vh;
  outline: none;
  border-radius: 5px;
  background: #024b54;
  letter-spacing: 2px;
}
.header {
  width: 100vw;
  height: 10vh;
   background: #083B6F;
   box-shadow: 0 0 10px rgba(0,0,0,0.75);
   display: flex;
   justify-content: space-between;
   align-items: center;
 
}
h1 {
  letter-spacing: 5px;
  font-weight: lighter;
  color: #fff;
  margin-left: 20px;
  font-size: 2.8vh;
 
}
.header button {
  margin-right: 20px;
  background: none;
  border: none;
  outline: none;
  color: #fff;
  font-size: 2.8vh;
}
.test {
  width: 95vw;
  height: 10vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}