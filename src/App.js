
// default exportun importu, istediğimiz isimle import edebiliriz.
import Cat from './components/Cat';

function App() {
  return (
    <div className="App">
   <Cat 
   name = "Cenitin"
   img= "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"
   color = "yellow"
   isBlueEyed= {true}

   />
   <Cat
      name = "Garfield"
      img= "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg"
      color = "yellow"
      isBlueEyed={false}
   />
   <Cat
      name = "Şerafettin"
      img= "https://cdn.pixabay.com/photo/2013/04/01/03/45/cat-98359_1280.jpg"
      color = ""
      isBlueEyed={false}
   />
    </div>
  );
}

export default App;
