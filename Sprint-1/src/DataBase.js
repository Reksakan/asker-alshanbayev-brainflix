import { v4 as uuidv4 } from 'uuid';
import dog1 from './assets/Images/dog1.jpg';
import dog2 from './assets/Images/dog2.jpg';
import dog3 from './assets/Images/dog3.jpg';
import video1 from './assets/Images/video-list-1.jpg';
import video2 from './assets/Images/video-list-2.jpg';
import video3 from './assets/Images/video-list-3.jpg';
import video4 from './assets/Images/video-list-4.jpg';
import video5 from './assets/Images/video-list-5.jpg';
import video6 from './assets/Images/video-list-6.jpg';
import video7 from './assets/Images/video-list-7.jpg';
import video8 from './assets/Images/video-list-8.jpg';

export const commentsHistory = [ 
  {
    id: uuidv4(),
    userAvatar: dog1,
    date: '12/18/2018',
    name: 'Michael Lyons',
    comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed. '
  },
  {
    id: uuidv4(),
    userAvatar: dog2,
    date: '12/12/2018',
    name: 'Gary Wong',
    comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
  },
  {
    id: uuidv4(),
    userAvatar: dog3,
    date: '11/15/2018',
    name: 'Theodore Duncan',
    comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
  }
];

export const videoList = [

  {
    id: uuidv4(),
    img: video1,
    title: 'Become A Travel Pro In Easy Lesson',
    channel: 'Todd Welch'
  },
  {
    id: uuidv4(),
    img: video2,
    title: 'Les Houches The Hidden Gem Of The Chamonix',
    channel: 'Todd Welch'
  },
  {
    id: uuidv4(),
    img: video3,
    title: 'Travel Health Useful Medical Information For',
    channel: 'Glen Harper'
  },
  {
    id: uuidv4(),
    img: video4,
    title: 'Cheap Airline Tickets Great Ways To Save',
    channel: 'Emily Harper'
  },
  {
    id: uuidv4(),
    img: video5,
    title: 'Take A Romantic Break In A Boutique Hotel',
    channel: 'Ethan Owen'
  },
  {
    id: uuidv4(),
    img: video6,
    title: 'Choose The Perfect Accommodations',
    channel: 'Lydia Perez'
  },
  {
    id: uuidv4(),
    img: video7,
    title: 'Cruising Destination Ideas',
    channel: 'Timothy Austin'
  },
  {
    id: uuidv4(),
    img: video8,
    title: 'Tain Travel On Track For Safety',
    channel: 'Scotty Cranmer'
  }
]

