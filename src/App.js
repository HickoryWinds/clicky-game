// import react
import React, { Component } from "react";
// import components
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Instructions from "./components/Instructions";
import CurrentScore from "./components/CurrentScore";
import TopScore from "./components/TopScore";
import Message from "./components/Message";
// import friends.json to populate cards
import friends from "./friends.json";

class App extends Component {
  // set initial states for scoring variables message and friends array
  state = {
    friends,
    cscore: 0,
    tscore: 0,
    initial: true,
    message: 'Let the game begin!'
  };

  // function reorderFriends moves three cards to random positions in array
  reorderFriends = friends => {
    // use Math.random to determine position of card to be removed
    const random1 = Math.floor(Math.random()* 12);
    // store friend object that will be removed
    const tempFriend1 = friends[random1];
    // remove friend object from array
    friends.splice(random1, 1);
    // put object in first position of array
    friends.unshift(tempFriend1);
    // perform similar operations for second and third friends objects
    const random2 = Math.floor(Math.random()* 12);
    const tempFriend2 = friends[random2];
    friends.splice(random2, 1); 
    friends.unshift(tempFriend2);
    const random3 = Math.floor(Math.random()* 12);
    const tempFriend3 = friends[random3];
    friends.splice(random3, 1); 
    friends.unshift(tempFriend3);
    // set state for friends array;
    this.setState(friends);
  }

  // function removeFriend changes state of friend object from false to true when 'x' is clicked,
  // checks for game over conditions if image is clicked a second time, 
  // and increases cscore for current game and tscore for highest session score as needed
  removeFriend = (id, guessed) => {
    // create variable initial to track if first game being played
    var initial = this.state.initial;
    if (initial) {}
    this.setState({message: 'Good Luck!'});
    // create copies of states for use in function
    var friends = this.state.friends;
    // var cscore = this.state.score;
    // check if object specified by id has already been guessed
    if (guessed === 'true' && this.state.cscore < 11) {
      this.setState({message: 'Game Over'});
      this.setState({cscore: 0});
      // set all friends object guessed value to false to restart game
      for (var j = 0; j < friends.length; j++) {
        friends[j].guessed = 'false';
      }
      // break out of function to restart game
      return
    }
    // change state of friends object with specified id to true
    function checkId(id, friends) {
      for (var i = 0; i < friends.length; i++) {
        if (friends[i].id === id) {
          friends[i].guessed = 'true';
        }
      }
    }
    checkId(id, friends);
    // set state of score variables
    this.setState({ cscore: this.state.cscore + 1});
    // set state of high session score if greater than current game score
    if (this.state.cscore >= this.state.tscore) {
      this.setState({tscore: this.state.cscore + 1});
      this.setState({message: 'New High Score!'});
    }
    // check for game win
    if (this.state.cscore === 11) {
      this.setState({message: 'You Win!'});
      this.setState({cscore: 0});
      // set all friends object guessed value to false to restart game
      for (var k = 0; k < friends.length; k++) {
        friends[k].guessed = 'false';
      }
      // break out of function to restart game
      return
    }
    // set state of friends arrays after correct guess
    this.setState({friends});
    // randomize order of images
    this.reorderFriends(friends);
  }
  // create variable to hold instruction text
  // set order of rendering for page
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <Instructions>Instructions</Instructions>
        <CurrentScore>Current Score: {this.state.cscore}</CurrentScore>
        <TopScore>Top Score: {this.state.tscore}</TopScore>
        <Message>{this.state.message}</Message>
        {this.state.friends.map(friend => (
          <FriendCard
          removeFriend={this.removeFriend}
          image={friend.image}
          key={friend.id}
          id={friend.id}
          guessed = {friend.guessed}
          />
          ))}
      </Wrapper>
    );
  }

}

export default App;
