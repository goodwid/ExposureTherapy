/*
localStorage should store:
1. whether user has submitted evaluation (get started) form
2. user's name and panic image choice
3. results of eval form (recommended starting point)
4. whether user has begun exercises
5. image viewed when user last left page
6. previous visit dates and respective "level reached" numbers (for chart)

*/

//OBJECT THAT WILL BE STORED IN LOCALSTORAGE AND WILL TRACK USER DETAILS/PROGRESS
var userInfo {
  evalComplete: false;
  userName: '';
  panicImage: '';
  recommendedStartImage: '';
  exercisesBegun: false;
  lastViewedImage: '';
  previousVisitData: [];
}
