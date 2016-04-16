// // code solution here
// function User (name, email) {
//   this.name = name;
//   this.email = email;
//   this.sayHello = function() {
//     console.log("hello");
//   };
// }

// carl = new User ("carl", "sparkles@hotmail.com");

function President (name, politicalParty, yearsInOffice, homeState) {
  this.name = name;
  this.politicalParty = politicalParty;
  this.yearsInOffice = yearsInOffice;
  this.homeState = homeState;
  this.veto = function() {
    return "NO!";
  };
  this.passBill = function() {
    return "You can do that!";
  };
  this.doCharity = function() {
    return "I like to help people.";
  };
  this.conductPressInterview = function() {
    return "I am proud to be an American.";
  };
  this.sayHi = function() {
    return "Hi, my name is " + name + ". I am from " + homeState + ". I represent the " + politicalParty + "s, and was in office " + yearsInOffice + ".";
  };
}

georgeWashington = new President ("George Washington", "Dem", 8, "NC");
abrahamLincoln = new President ("Abraham Lincoln", "Rep", 5, "TN");

richardNixon = new President ("Richard Nixon", "REP", 6, "NY");
jimmyCarter = new President ("Jimmy Carter", "Dem", 4, "RI");
