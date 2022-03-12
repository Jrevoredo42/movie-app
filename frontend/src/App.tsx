import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/listing';
import Form from 'pages/forms';
import Navbar from "components/Navbar";

function App() {
  return (
    /*Inicializa estrutura de rotas */
    <BrowserRouter>

      {/*inicializa Navbar, declarando que ele irá aparecer em todas as paginas por ter sido iniciado antes
      das rotas das paginas em si */}
      <Navbar />

      {/* Lista de rotas */}
      <Routes>

        {/*Rota de listagem (pagina princial) */}
        <Route path="/" element={<Listing />} />

        {/*Rota de formulario, que contem outra tag de rota com atributo path para mostrar que ela pode receber um codigo, 
        junto do atributo element para a page de formulario, fazendo com que possam ter varias paginas de formularios, com itens
        forms diferenciados pelo ID */}
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;