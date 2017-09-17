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
    }, {
      name: 'Slide In Down',
      type: 'Slide',
      options: {
        direction: 'inDown',
        duration: 1000
      }
    }, {
      name: 'Slide In Up',
      type: 'Slide',
      options: {
        direction: 'inUp',
        duration: 1000
      }
    }
  ],
  slides: [
    // 
    // Filling the gap
    //
    {
      shapes: [
        {
          name: 'headline',
          type: 'FigText',
          options: {
            text: 'How does it work?',
            font: "Computer",
            x: 5,
            y: 5,
            background: 'black',
            foreground: 'green'
          }
        },
        {
          name: 'demo',
          type: 'FigText',
          options: {
            text: 'Just do IT',
            font: "Big",
            x: 25,
            y: 15,
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
        'demo::PrintSlow'
      ]
    }
  ]
}).run(); 