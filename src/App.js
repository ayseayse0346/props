
// default exportun importu, istediğimiz isimle import edebiliriz.
import Cat from './components/Cat';

function App() {
  return (
    <div className="App">
   <Cat 
   name = "Cenitin"
   img= "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"
   color = "yellow"

   />
   <Cat/>
   <Cat/>
    </div>
  );
}

export default App;
