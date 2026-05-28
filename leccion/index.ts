
import { Vehiculo } from "./Vehiculo";
import { Conductor } from "./Conductor";
import { Paquete } from "./Paquete";


// Crear vehículo
const vehiculo1 = new Vehiculo(
    "PBC-253",
    1200
);


// Crear conductor
const conductor1 = new Conductor(
    "Tayron Macias",
    vehiculo1
);


// Crear paquete
const paquete1 = new Paquete(
    "Jostin Alonzo",
    "Av. Principal #133",
    "BAR-990",
    true
);


// Mostrar información
conductor1.mostrarDatos();

console.log("");

paquete1.mostrarGuia();