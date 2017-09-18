var Deck = require('kittik');
var Cmd = require('node-cmd');

Deck.create({
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
        text: '@daniel_wagn3r / VERBUND, CoderDojo Wien',
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
        duration: 250
      }
    },
    {
      name: 'PrintSlow',
      type: 'Print',
      options: {
        duration: 2000
      }
    },
    {
      name: 'FocusX',
      type: 'Focus',
      options: {
        direction: 'shakeX',
        duration: 500
      }
    },
    {
      name: 'FocusY',
      type: 'Focus',
      options: {
        direction: 'shakeY',
        duration: 500
      }
    },
    {
      name: 'Slide In Left',
      type: 'Slide',
      options: {
        direction: 'inLeft',
        duration: 1000
      }
    },
    {
      name: 'Slide In Right',
      type: 'Slide',
      options: {
        direction: 'inRight',
        duration: 1000
      }
    },
    {
      name: 'Slide In Down',
      type: 'Slide',
      options: {
        direction: 'inDown',
        duration: 1000
      }
    },
    {
      name: 'Slide In Up',
      type: 'Slide',
      options: {
        direction: 'inUp',
        duration: 1000
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
        'nextgeneration::Slide In Left->FocusX',
        'developers::PrintSlow',
        'developers2::PrintSlow',
        'developers3::PrintSlow',
        'developers4::Slide In Right->FocusX'
      ]
    },
    // 
    // What is CoderDojo
    //
    {
      shapes: [
        {
          name: 'headline',
          type: 'FigText',
          options: {
            text: 'What is CoderDojo?',
            font: "Computer",
            x: 5,
            y: 5,
            background: 'black',
            foreground: 'green'
          }
        },
        {
          name: 'global',
          type: 'FigText',
          options: {
            text: 'Global movement',
            font: "Big",
            x: 25,
            y: 15,
            background: 'black',
            foreground: 'green'
          }
        },
        {
          name: 'volunteers',
          type: 'FigText',
          options: {
            text: 'Volunteers',
            font: "Big",
            x: 25,
            y: 25,
            background: 'black',
            foreground: 'green'
          }
        },
        {
          name: 'fun',
          type: 'FigText',
          options: {
            text: 'Fun! Fun! Fun!',
            font: "Big",
            x: 25,
            y: 35,
            background: 'black',
            foreground: 'green'
          }
        }
      ],
      animations: [
        {
          name: 'FocusY',
          type: 'Focus',
          options: {
            direction: 'shakeY',
            duration: 500
          }
        }
      ],
      order: [
        'vswd2017',
        'coderdojo',
        'headline::Slide In Right',
        'global::PrintSlow',
        'volunteers::PrintSlow',
        'fun::PrintSlow->FocusX->FocusY'
      ]
    }
  ]
}).run(); 