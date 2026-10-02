//Importación del Componente de Función Externo
import Boton from "./components/Boton";
//Importación del Componente de Clase Externo
import MensajeClase from "./components/MensajeClase";
//Componente Interno
function Saludo() {
  return <h2>¡Hola! Soy un componente interno.</h2>;
}
// Componente Principal
function App() {
  return (
    <div>
      <h1>Mi Aplicación Simple</h1>
      {/* Usamos el interno*/}
      <Saludo />
      {/* Renderizado del de función externo (dentro de components*/}
      <Boton />
       {/* Renderizado del de clase externo (dentro de components*/}  
       <MensajeClase />
    </div>
  );
}
// Exportación del componente Principal
export default App;