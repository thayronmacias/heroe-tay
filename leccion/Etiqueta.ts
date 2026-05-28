
export class Etiqueta {

    private codigoBarras: string;
    private esFragil: boolean;

    constructor(codigoBarras: string, esFragil: boolean) {

        this.codigoBarras = codigoBarras;
        this.esFragil = esFragil;

    }

    public obtenerAdvertencia(): string {

        if (this.esFragil) {

            return "¡CUIDADO FRÁGIL!";

        } else {

            return "Paquete Estándar";

        }

    }

}