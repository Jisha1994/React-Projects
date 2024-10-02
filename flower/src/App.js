import Images from './Images'
import Flower from './Flower';
import './App.css'; 



function App() {
  return (
    <div>
      <h1>VERDISSIMO</h1>
      <p>The bluebell is a herb that grows from a bulb. It has linear leaves and a flowering stem that grows up to 50 cm tall and droops to one side. The sweet-scented, nodding heads of flowers are bell-shaped and can be violet-blue and sometimes white or pastel pink.</p>
      <Flower />
      <center>
      <p>Beauty and cosmetics:Bluebell-inspired scents are added to soaps and hand creams.</p>
      <p>Cultural:Bluebells make stunning ornamental displays in woodland or semi-shaded gardens, among trees or in herbaceous borders.</p></center>
      <Images/>
      <center><p>Health:The bulb of bluebells has been used in traditional medicine as a diuretic (increases urination) or styptic (stops bleeding).</p>
      <p>Materials and fuels:The sap from bluebells can be used as an adhesive. It was traditionally used to bind pages into the spines of books and during the Bronze Age it helped stick feathers onto arrows.

</p></center>
    </div>
  );
}

export default App;