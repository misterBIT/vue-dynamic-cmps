
export default {
  getById
}

function getById() {
  return survey;
}

var survey =
{
  title: 'Robots Shopping',
  cmps: [
      {
          type: 'textBox',
          info: {
              label: 'Your name:'
          }
      },
      {
          type: 'selectBox',
          info: {
              label: 'How was it:',
              opts: ['Great', 'Fine', 'Crap']
          }
      },
      {
          type: 'textBox',
          info: {
              label: 'Type:',
              opts: ['CleanDude', 'FeedMeBob', 'misterPleasure']
          }
      },
      {
          type: 'linearScale',
          info: {
              label: 'Quality:',
              max: 5
          }
      },
      {
          type: 'photoTuner',
          info: {
              label: 'Tune your photo:',
              // imgUrl: 'https://res.cloudinary.com/daahi2yaz/image/upload/v1557175588/Robots/Crypto-robots.jpg'
              // imgUrl: 'https://res.cloudinary.com/daahi2yaz/image/upload/v1547889015/Robots/spotmini-975475584.jpg'
              imgUrl: 'https://res.cloudinary.com/daahi2yaz/image/upload/v1555521791/Robots/maxresdefault.jpg'
              // imgUrl: 'https://res.cloudinary.com/demo/image/upload/lady.jpg'
          }
      },

  ]
}