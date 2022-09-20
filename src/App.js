import "./App.css";
import Testimonio from "./components/Testimonio";
import { testimonios } from "./testimonios";

function App() {
	return (
		<div className="App">
			<div className="contenedor-principal">
				<h1>¿Cómo cambió tu vida estudiar programación?</h1>
				{testimonios &&
					testimonios.map((e) => {
						return (
							<Testimonio
								key={e.nombre}
								nombre={e.nombre}
								pais={e.pais}
								imagen={e.imagen}
								cargo={e.cargo}
								empresa={e.empresa}
								testimonio={e.testimonio}
							></Testimonio>
						);
					})}
			</div>
		</div>
	);
}

export default App;
