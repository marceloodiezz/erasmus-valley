const roomInteractions = [
    {
        id: "bookshelf",
        name: "Estantería",
        x: 165, y: 380,
        promptX: 110, promptY: 300,
        hitbox: {
            x: 110,
            y: 380,
            width: 80,
            height: 130
        },
        action: "Examinar",
        speaker: "Marcelo",
        text: "Una colección de libros de Física. Algunos incluso parecen haber sido abiertos."
    },
    {
        id: "bed",
        name: "Cama",
        x: 210, y: 260,
        promptX: 210, promptY: 115,
        hitbox: {
            x: 210,
            y: 175,
            width: 150,
            height: 105
        },
        action: "Examinar",
        speaker: "Marcelo",
        text: "La cama de Amanda. Probablemente lo que más va a echar de menos cuando empiece el Erasmus."
    },
    {
        id: "desk",
        name: "Portátil",
        x: 680, y: 220,
        promptX: 680, promptY: 110,
        hitbox: {
            x: 680,
            y: 155,
            width: 145,
            height: 65
        },
        action: "Examinar",
        lines: [
            {
                speaker: "Marcelo",
                text: "Amy abre el portátil. Hay 37 pestañas abiertas."
            },
            {
                speaker: "Amanda",
                text: "Vale, tengo que preparar el Learning Agreement antes de irme."
            },
            {
                speaker: "Amanda",
                text: "¿Qué hago primero?",
                decisionId: "learning_agreement",
                choices: [
                    {
                        id: "responsable",
                        text: "Organizarme y revisar las asignaturas.",
                        speaker: "Marcelo",
                        response: "Amanda abre una hoja de cálculo y empieza a comparar asignaturas. Esto promete ser una tarde larga."
                    },
                    {
                        id: "improvisar",
                        text: "Mirar primero los vuelos a Italia.",
                        speaker: "Marcelo",
                        response: "Amanda termina viendo fotos de la costa amalfitana. Las convalidaciones pueden esperar un poquito."
                    }
                ]
            },
            {
                speaker: "Amanda",
                text: "Sea como sea, esto del Erasmus va a dar mucho trabajo."
            }
        ]
    },
    {
        id: "wardrobe",
        name: "Armario",
        x: 805, y: 450,
        promptX: 805, promptY: 250,
        hitbox: {
            x: 805,
            y: 330,
            width: 95,
            height: 145
        },
        action: "Examinar",
        speaker: "Amanda",
        text: "¿De verdad tengo que decidir qué ropa llevarme para tantos meses?"
    },
    {
        id: "suitcase",
        name: "Maleta",
        x: 690, y: 510,
        promptX: 690, promptY: 410,
        hitbox: {
            x: 690,
            y: 440,
            width: 64,
            height: 45
        },
        action: "Examinar",
        speaker: "Marcelo",
        text: "Una maleta vacía. En unas horas intentará contener toda una vida. Y probablemente un secador."
    },
    {
        id: "door",
        name: "Puerta",
        x: 480, y: 480,
        promptX: 480, promptY: 515,
        hitbox: {
            x: 480,
            y: 540,
            width: 90,
            height: 35
        },
        action: "Abrir",
        speaker: "Marcelo",
        text: "¿Ya quieres marcharte? Todavía tienes algunas cosas pendientes antes de comenzar el Erasmus."
    }
];