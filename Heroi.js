class Heroi {

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
                break;
        }

        return `O ${this.tipo} atacou usando ${ataque}.`;
    }
}

const gandalf = new Heroi("Gandalf", 100, "mago");
console.log(gandalf.atacar());

const goku = new Heroi("Goku", 1000, "guerreiro");
console.log(goku.atacar());

const jack = new Heroi("Jack Sart", 30, "ninja");
console.log(jack.atacar());

const conan = new Heroi("Conan", 30, "guerreiro");
console.log(conan.atacar());

const desconhecido = new Heroi("Barbaro", 112313, "estranho");
console.log(desconhecido.atacar());
