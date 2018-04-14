export default () => ({

  // PopForm
  popForm: {
    isShow: false,
    formName: ""
  },

  // Notification
  notifications: [
    // {
    //   title: string,
    //   description: string,
    //   type: string,
    //   survivalTime: number
    // },
  ],

  // UserInfo
  isLogIn: false,
  userInfo: {
    // name: string,
    // rank: number,
    // score: number,
  },

  // challenges
  challenges: [
    // [
    //   {
    //     'category': string,
    //     'challenges': challenges,
    //   }
    //   , ...
    // ]
    // challenges = [
    //   {
    //     "id": number,
    //     "type": string,
    //     "title": string,
    //     "description": string,
    //     "hint": string,
    //     "attachments": string[],
    //     "points": number,
    //     "is_solved": boolean,
    //     "pwned_times": number,
    //     "early_pwner": string[],
    //   }
    //   , ...
    // ]
  ],

  // scoreboard
  ranks: [
  // [
  //   {
  //     'index': number,
  //     'userid': number,
  //     'username': string,
  //     'comment': string,
  //     'points': number,
  //   }
  //   , ...
  // ]
  ],

  // about & news
  announcements: [
    // [
    //   string,   // time
    //   string,   // title
    //   string,   // announcement body
    // ]
    // ,...
  ],

})
