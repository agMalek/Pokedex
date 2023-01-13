import { Pokemon, Pokemon_abilities } from './pokemon/interfaces/interfaces';
import { User } from './users/interfaces/intefaces';


export const pokemons: Pokemon[] = [
  {
    lvl: 4,
    name: "Bulbasaur",
    id: 1,
    evolutionId: 2,
    type: [
      "grass"
    ],
    image: "assets/images/bulbasaur.png",
    abilities: [
      {
        name: "Latigo cepa",
        description: "Latigo cepa causa daño y no tiene ningún efecto secundario."
      },
      {
        name: "Polvo veneno",
        description: "Polvo veneno envenena al objetivo."
      }
    ]
  },
  {
    lvl: 21,
    name: "Ivysaur",
    id: 2,
    evolutionId: 3,
    type: [
      "grass"
    ],
    image: "assets/images/ivysaur.png",
    abilities: [
      {
        name: "Hoja afilada",
        description: "Hoja afilada causa daño."
      },
      {
        name: "Polvo veneno",
        description: "Polvo veneno envenena al objetivo."
      }
    ]
  },
  {
    lvl: 35,
    name: "Venusaur",
    id: 3,
    evolutionId: null,
    type: [
      "grass"
    ],
    image: "assets/images/venusaur.png",
    abilities: [
      {
        name: "Latigo cepa",
        description: "Latigo cepa causa daño y no tiene ningún efecto secundario."
      },
      {
        name: "Polvo veneno",
        description: "Polvo veneno envenena al objetivo."
      },
      {
        name: "Rayo solar",
        description: "Recoge la luz y la transforma en un rayo poderoso con una fuerza súper potente."
      }
    ]
  },
  {
    lvl: 4,
    name: "Charmander",
    id: 4,
    evolutionId: 5,
    type: [
      "fire"
    ],
    image: "assets/images/charmander.png",
    abilities: [
      {
        name: "Ascuas",
        description: "Ascuas causa daño."
      },
      {
        name: "Garra metal",
        description: "Garra metal causa daño y tiene una probabilidad del 10% aumentar el ataque."
      }
    ]
  },
  {
    lvl: 25,
    name: "Charmeleon",
    id: 5,
    evolutionId: 6,
    type: [
      "fire"
    ],
    image: "assets/images/charmeleon.png",
    abilities: [
      {
        name: "Furia",
        description: "Furia causa daño y no tiene ningún efecto secundario."
      },
      {
        name: "Cuchillada",
        description: "Cuchillada causa daño y tiene una alta probabilidad de causar un golpe crítico."
      }
    ]
  },
  {
    lvl: 44,
    name: "Charizard",
    id: 6,
    evolutionId: null,
    type: [
      "fire"
    ],
    image: "assets/images/charizard.png",
    abilities: [
      {
        name: "Furia dragón",
        description: "Furia dragón quita siempre 40 PS al objetivo, sin tener en cuenta la efectividad de tipos."
      },
      {
        name: "Lanzallamas",
        description: "Lanzallamas causa daño y tiene una probabilidad del 10% de quemar al objetivo."
      }
    ]
  },
  {
    lvl: 4,
    name: "Squirtle",
    id: 7,
    evolutionId: 8,
    type: [
      "water"
    ],
    image: "assets/images/squirtle.png",
    abilities: [
      {
        name: "Ascuas",
        description: "Ascuas causa daño."
      },
      {
        name: "Garra metal",
        description: "Garra metal causa daño y tiene una probabilidad del 10% aumentar el ataque."
      }
    ]
  },
  {
    lvl: 25,
    name: "Wartortle",
    id: 8,
    evolutionId: 9,
    type: [
      "water"
    ],
    image: "assets/images/wartortle.png",
    abilities: [
      {
        name: "Furia",
        description: "Furia causa daño y no tiene ningún efecto secundario."
      },
      {
        name: "Cuchillada",
        description: "Cuchillada causa daño y tiene una alta probabilidad de causar un golpe crítico."
      }
    ]
  },
  {
    lvl: 44,
    name: "Blastoise",
    id: 9,
    evolutionId: null,
    type: [
      "water"
    ],
    image: "assets/images/blastoise.png",
    abilities: [
      {
        name: "Furia dragón",
        description: "Furia dragón quita siempre 40 PS al objetivo, sin tener en cuenta la efectividad de tipos."
      },
      {
        name: "Lanzallamas",
        description: "Lanzallamas causa daño y tiene una probabilidad del 10% de quemar al objetivo."
      }
    ]
  },
  {
    lvl: 14,
    name: "Caterpie",
    id: 10,
    evolutionId: 11,
    type: [
      "bug"
    ],
    image: "assets/images/caterpie.png",
    abilities: [
      {
        name: "Furia dragón",
        description: "Furia dragón quita siempre 40 PS al objetivo, sin tener en cuenta la efectividad de tipos."
      },
      {
        name: "Lanzallamas",
        description: "Lanzallamas causa daño y tiene una probabilidad del 10% de quemar al objetivo."
      }
    ]
  },
  {
    lvl: 52,
    name: "Metapod",
    id: 11,
    evolutionId: 12,
    type: [
      "bug"
    ],
    image: "assets/images/metapod.png",
    abilities: [
      {
        name: "Furia dragón",
        description: "Furia dragón quita siempre 40 PS al objetivo, sin tener en cuenta la efectividad de tipos."
      },
      {
        name: "Lanzallamas",
        description: "Lanzallamas causa daño y tiene una probabilidad del 10% de quemar al objetivo."
      }
    ]
  },
  {
    lvl: 33,
    name: "Butterfree",
    id: 12,
    evolutionId: null,
    type: [
      "bug", "flying"
    ],
    image: "assets/images/butterfree.png",
    abilities: [
      {
        name: "Furia dragón",
        description: "Furia dragón quita siempre 40 PS al objetivo, sin tener en cuenta la efectividad de tipos."
      },
      {
        name: "Lanzallamas",
        description: "Lanzallamas causa daño y tiene una probabilidad del 10% de quemar al objetivo."
      }
    ]
  },
  {
    lvl: 19,
    name: "Weedle",
    id: 13,
    evolutionId: 14,
    type: [
      "bug", "poison"
    ],
    image: "assets/images/weedle.png",
    abilities: [
      {
        name: "Furia dragón",
        description: "Furia dragón quita siempre 40 PS al objetivo, sin tener en cuenta la efectividad de tipos."
      },
      {
        name: "Lanzallamas",
        description: "Lanzallamas causa daño y tiene una probabilidad del 10% de quemar al objetivo."
      }
    ]
  },
  {
    lvl: 41,
    name: "Kakuna",
    id: 14,
    evolutionId: 15,
    type: [
      "bug", "poison"
    ],
    image: "assets/images/kakuna.png",
    abilities: [
      {
        name: "Furia dragón",
        description: "Furia dragón quita siempre 40 PS al objetivo, sin tener en cuenta la efectividad de tipos."
      },
      {
        name: "Lanzallamas",
        description: "Lanzallamas causa daño y tiene una probabilidad del 10% de quemar al objetivo."
      }
    ]
  },
  {
    lvl: 27,
    name: "Beedrill",
    id: 15,
    evolutionId: null,
    type: [
      "bug", "poison"
    ],
    image: "assets/images/beedrill.png",
    abilities: [
      {
        name: "Furia dragón",
        description: "Furia dragón quita siempre 40 PS al objetivo, sin tener en cuenta la efectividad de tipos."
      },
      {
        name: "Lanzallamas",
        description: "Lanzallamas causa daño y tiene una probabilidad del 10% de quemar al objetivo."
      }
    ]
  },
  {
    lvl: 48,
    name: "Pidgey",
    id: 16,
    evolutionId: 17,
    type: [
      "normal", "flying"
    ],
    image: "assets/images/pidgey.png",
    abilities: [
      {
        name: "Furia dragón",
        description: "Furia dragón quita siempre 40 PS al objetivo, sin tener en cuenta la efectividad de tipos."
      },
      {
        name: "Lanzallamas",
        description: "Lanzallamas causa daño y tiene una probabilidad del 10% de quemar al objetivo."
      }
    ]
  },
  {
    lvl: 8,
    name: "Pidgeotto",
    id: 17,
    evolutionId: 18,
    type: [
      "normal", "flying"
    ],
    image: "assets/images/pidgeotto.png",
    abilities: [
      {
        name: "Furia dragón",
        description: "Furia dragón quita siempre 40 PS al objetivo, sin tener en cuenta la efectividad de tipos."
      },
      {
        name: "Lanzallamas",
        description: "Lanzallamas causa daño y tiene una probabilidad del 10% de quemar al objetivo."
      }
    ]
  },
  {
    lvl: 13,
    name: "Pidgeot",
    id: 18,
    evolutionId: null,
    type: [
      "normal", "flying"
    ],
    image: "assets/images/pidgeot.png",
    abilities: [
      {
        name: "Furia dragón",
        description: "Furia dragón quita siempre 40 PS al objetivo, sin tener en cuenta la efectividad de tipos."
      },
      {
        name: "Lanzallamas",
        description: "Lanzallamas causa daño y tiene una probabilidad del 10% de quemar al objetivo."
      }
    ]
  }
]

export const abilities: Pokemon_abilities[] = [
  {
    name: "Latigo cepa",
    description: "Latigo cepa causa daño y no tiene ningún efecto secundario."
  },
  {
    name: "Polvo veneno",
    description: "Polvo veneno envenena al objetivo."
  },
  {
    name: "Hoja afilada",
    description: "Hoja afilada causa daño."
  },
  {
    name: "Rayo solar",
    description: "Recoge la luz y la transforma en un rayo poderoso con una fuerza súper potente."
  },
  {
    name: "Ascuas",
    description: "Ascuas causa daño."
  },
  {
    name: "Garra metal",
    description: "Garra metal causa daño y tiene una probabilidad del 10% aumentar el ataque."
  },
  {
    name: "Furia",
    description: "Furia causa daño y no tiene ningún efecto secundario."
  },
  {
    name: "Cuchillada",
    description: "Cuchillada causa daño y tiene una alta probabilidad de causar un golpe crítico."
  },
  {
    name: "Furia dragón",
    description: "Furia dragón quita siempre 40 PS al objetivo, sin tener en cuenta la efectividad de tipos."
  },
  {
    name: "Lanzallamas",
    description: "Lanzallamas causa daño y tiene una probabilidad del 10% de quemar al objetivo."
  }
]


export const users: User[] = [
  { userID: 1, username: 'trainer', password: 'password', pokemons: pokemons.slice(0, 9) },
  { userID: 2, username: 'master', password: 'password', pokemons: pokemons.slice(9) }
]