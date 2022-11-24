import {ObjectId} from 'bson';

export const Teams = [
  {
    _id: new ObjectId('631b3ace0c7e00937e2a77de'),
    name: 'Reds',
    roster: [
      {
        _id: new ObjectId('631cf12245b094c37c5bb906'),
        name: 'Manny Costa',
      },
      {
        _id: new ObjectId('6321310d186fdd4355f940e3'),
        name: 'Emanol Costa',
      },
      {
        _id: new ObjectId('632244f00752d531bf1160fd'),
        name: 'Brandon Gomez',
      },
    ],
  },
];

/*
things that need to happen when i click on a base
1. find out what type of hit occured
2. update the hit on that players object
3. go to next player
*/
