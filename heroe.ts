class Heroe {
    nombre: string;
    nivel: number;
    estaVivo: boolean;
    fechaCreacion: Date;
    habilidades: string;
    estadisticas: string;

    constructor(nombre: string, habilidades: string) {
        this.nombre = nombre;
        this.habilidades = habilidades;
        this.nivel = 1;
        this.estaVivo = true;
        this.fechaCreacion = new Date();
        this.estadisticas = "fuerza 10";
    }

    recibirDanio(puntos: number): void {

        let fuerza = parseInt(this.estadisticas.split(" ")[1]);

        fuerza -= puntos;

        if (fuerza <= 0) {
            fuerza = 0;
            this.estaVivo = false;
        }
        this.estadisticas = `fuerza ${fuerza}`;
    }
    subirNivel(): void {
        this.nivel += 1;

        console.log(`¡${this.nombre} ha subido al nivel ${this.nivel}!`);
    }
    generarFicha(): string {
        const estado = this.estaVivo ? "Vivo" : "Muerto";
        return `Héroe: ${this.nombre} - Nivel: ${this.nivel} - Estado: ${estado}`;
    }
}