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
    image: "assets/bulbasaur.png",
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
    image: "assets/ivysaur.png",
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
    image: "assets/venusaur.png",
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
    image: "assets/charmander.png",
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
    name: "Charmaleon",
    id: 5,
    evolutionId: 6,
    type: [
      "fire"
    ],
    image: "assets/charmaleon.png",
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
    image: "assets/charizard.png",
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
    image: "assets/squirtle.png",
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
    image: "assets/wartortle.png",
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
    image: "assets/blastoise.png",
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
  /* {name:"Rapido", description:"Muy Rápido"},
  {name:"Fuerte", description:"Muy Fuerte"},
  {name:"Inteligente", description:"Muy inteligente"},
  {name:"Astuto", description:"Muy astuto"},
  {name:"Leal", description:"Muy leal"},
  {name:"Volador", description:"Puede volar"},
  {name:"Listo", description:"Muy Listo"}, */
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
  { userID: 1, username: 'trainer', password: 'password', pokemons: pokemons.slice(0, 6) },
  { userID: 2, username: 'master', password: 'password', pokemons: pokemons.slice(6, 12) }
]
  /* {
  id: 1,
  name: 'Picachu 1',
  lvl: 1,
  evolutionId: 1,
  abilities: [
    {name:"Rapido", description:"Muy Rapido"},
    {name:"Fuerte", description:"Muy Fuerte"},
    {name:"Listo", description:"Muy Listo"}
  ],
  type: ["Tipo1"],
  image: 'img'
},
{
  id: 2,
  name: 'Picachu 2',
  lvl: 2,
  evolutionId: 2,
  abilities: [
    {name:"Rapido", description:"Muy Rapido"},
    {name:"Fuerte", description:"Muy Fuerte"},
    {name:"Listo", description:"Muy Listo"}
  ],
  type: ["Tipo2"],
  image: 'img'
},
{
  id: 3,
  name: 'Picachu 3',
  lvl: 3,
  evolutionId: 3,
  abilities: [
    {name:"Rapido", description:"Muy Rapido"},
    {name:"Fuerte", description:"Muy Fuerte"},
    {name:"Listo", description:"Muy Listo"}
  ],
  type: ["Tipo3"],
  image: 'img'
},
{
  id: 4,
  name: 'Picachu 4',
  lvl: 4,
  evolutionId: 4,
  abilities: [
    {name:"Rapido", description:"Muy Rapido"},
    {name:"Fuerte", description:"Muy Fuerte"},
    {name:"Listo", description:"Muy Listo"}
  ],
  type: ["Tipo4"],
  image: 'img'
},
{
  id: 5,
  name: 'Picachu 5',
  lvl: 5,
  evolutionId: 5,
  abilities: [
    {name:"Rapido", description:"Muy Rapido"},
    {name:"Fuerte", description:"Muy Fuerte"},
    {name:"Listo", description:"Muy Listo"}
  ],
  type: ["Tipo5"],
  image: 'img'
},
{
  id: 6,
  name: 'Picachu 6',
  lvl: 6,
  evolutionId: 6,
  abilities: [
    {name:"Rapido", description:"Muy Rapido"},
    {name:"Fuerte", description:"Muy Fuerte"},
    {name:"Listo", description:"Muy Listo"}
  ],
  type: ["Tipo6"],
  image: 'img'
},
{
  id: 7,
  name: 'Pokemon 7',
  lvl: 7,
  evolutionId: 7,
  abilities: [
    {name:"Rapido", description:"Muy Rapido"},
    {name:"Fuerte", description:"Muy Fuerte"},
    {name:"Listo", description:"Muy Listo"}
  ],
  type: ["Tipo7"],
  image: 'img'
},
{
  id: 8,
  name: 'Pokemon 8',
  lvl: 8,
  evolutionId: 8,
  abilities: [
    {name:"Rapido", description:"Muy Rapido"},
    {name:"Fuerte", description:"Muy Fuerte"},
    {name:"Listo", description:"Muy Listo"}
  ],
  type: ["Tipo8"],
  image: 'img'
},
{
  id: 3,
  name: 'Pokemon 3',
  lvl: 3,
  evolutionId: 3,
  abilities: [
    {name:"Rapido", description:"Muy Rapido"},
    {name:"Fuerte", description:"Muy Fuerte"},
    {name:"Listo", description:"Muy Listo"}
  ],
  type: ["Tipo3"],
  image: 'img'
},
{
  id: 4,
  name: 'Pokemon 4',
  lvl: 4,
  evolutionId: 4,
  abilities: [
    {name:"Rapido", description:"Muy Rapido"},
    {name:"Fuerte", description:"Muy Fuerte"},
    {name:"Listo", description:"Muy Listo"}
  ],
  type: ["Tipo4"],
  image: 'img'
},
{
  id: 5,
  name: 'Pokemon 5',
  lvl: 5,
  evolutionId: 5,
  abilities: [
    {name:"Rapido", description:"Muy Rapido"},
    {name:"Fuerte", description:"Muy Fuerte"},
    {name:"Listo", description:"Muy Listo"}
  ],
  type: ["Tipo5"],
  image: 'img'
},
{
  id: 6,
  name: 'Pokemon 6',
  lvl: 6,
  evolutionId: 6,
  abilities: [
    {name:"Rapido", description:"Muy Rapido"},
    {name:"Fuerte", description:"Muy Fuerte"},
    {name:"Listo", description:"Muy Listo"}
  ],
  type: ["Tipo6"],
  image: 'img'
}, */