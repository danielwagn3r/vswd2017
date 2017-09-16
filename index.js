var deck = require('kittik');
deck.create({
  shapes: [
    {
      name: 'vswd2017',
      type: 'Text',
      options: {
        text: 'VÖSI Softwar Day 2017',
        font: 'Star Wars',
        x: "right",
        y: "bottom",
        foreground: "white",
        background: "black"
      }
    },
    {
      name: 'coderdojo',
      type: 'Text',
      options: {
        text: 'CoderDojo',
        font: 'Star Wars',
        x: "left",
        y: "bottom",
        foreground: "white",
        background: "black"
      }
    }
  ],
  animations: [
    {
      name: 'PrintFast',
      type: 'Print',
      options: {
        duration: 200
      }
    },
    {
      name: 'PrintSlow',
      type: 'Print',
      options: {
        duration: 2000
      }
    }
  ],
  slides: [
    {
      shapes: [
        {
          name: 'nextgeneration',
          type: 'FigText',
          options: {
            text: 'The next generation',
            font: "Star Wars",
            x: 5,
            y: 5,
            foreground: "yellow",
            background: "black"
          }
        },
        {
          name: 'developers',
          type: 'FigText',
          options: {
            text: 'Developers',
            font: "Avatar",
            x: 22,
            y: 17,
            foreground: "yellow",
            background: "black"
          }
        },
        {
          name: 'developers2',
          type: 'FigText',
          options: {
            text: 'Developers',
            font: "Doom",
            x: 27,
            y: 22,
            foreground: "blue",
            background: "black"
          }
        },
        {
          name: 'developers3',
          type: 'FigText',
          options: {
            text: 'Developers',
            font: "DOS Rebel",
            x: 34,
            y: 29,
            foreground: "green",
            background: "black"
          }
        },
        {
          name: 'developers4',
          type: 'FigText',
          options: {
            text: 'DEVELOPERS',
            font: "Bloody",
            x: 45,
            y: 39,
            foreground: "red",
            background: "black"
          }
        }
      ],
      order: [
        'vswd2017',
        'coderdojo',
        'nextgeneration',
        'developers::PrintSlow',
        'developers2::PrintSlow',
        'developers3::PrintSlow',
        'developers4::PrintSlow'
      ]
    }
  ]
}).run();