const dbData = {
  users: {
    0: {
      name: 'Ed',
    },
    1: {
      name: 'Spike',
    },
    2: {
      name: 'Jet',
    },
    3: {
      name: 'Faye',
    },
    4: {
      name: 'Ein',
    },
    5: {
      name: 'DJ',
    },
  },
  categories: {
    Intro: {
      posts: [
        {
          title: 'How this app works',
          text: 'I\'ll add some later',
          author: 5,
          comments: [
            { title: 'Cool', text: 'This would be easier with Sql!', author: 0, comments: [] }
          ],
          created_at: '12:12::12'
        }
      ]
    },
    'Being a cowboy': {
      posts: [
        {
          title: 'There\'s nothing to eat',
          text: 'Why is there never anything to eat on this ship?',
          author: 1,
          comments: [
            {
              title: '3 Easy Steps to Getting Food',
              text: '1. Find a bounty head. 2. Capture that bounty head. 3. Get the reward. Bonus Step! Stop complaining on the Bebop!',
              author: 2,
              comments: [
                { title: 'Jet you are boring!', text: 'And you\'re always so grumpy!', author: 3, comments: [], created_at: '13:00:00' },
                { title: 'Woof!', text: 'Woof Woof!', author: 4, comments: [], created_at: '12:59:00' }
              ]
            }
          ],
          created_at: '12:13:12'
        }
      ]
    }
  },
};

export default dbData;
