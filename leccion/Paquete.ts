
import { Etiqueta } from "./Etiqueta";

export class Paquete {

    private destinatario: string;
    private direccion: string;
    private etiqueta: Etiqueta;

    constructor(
        destinatario: string,
        direccion: string,
        codigoBarras: string,
        esFragil: boolean
    ) {

        this.destinatario = destinatario;
        this.direccion = direccion;

        // Composición
        this.etiqueta = new Etiqueta(codigoBarras, esFragil);

    }

    public mostrarGuia(): void {

        console.log("GUÍA DEL PAQUETE...");
        console.log("Destinatario:", this.destinatario);
        console.log("Dirección:", this.direccion);
        console.log("Estado:", this.etiqueta.obtenerAdvertencia());

    }

}