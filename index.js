class BoardMember {
  constructor (name, homeState, training){
    this.name = name;
    this.homeState =homeState;
    this.training = training;
  }
  
  BoardMember.prototype.veto = Function () {
    return "No, I must disagree"
  }
  
  BoardMember.prototype.approve = Function(){
    return "You can do that!"
  }
  
  BoardMember.prototype.doCharity = Function () {
    return "I like to help people"
  }
  
  BoardMember.prototype.re
  
  
  
}