const FollowToggle = require('./follow_toggle')

const setEventListeners = ()  => {
  $('.follow-toggle').on('click', e => {
    e.preventDefault();

    createFollowButton();
  })
}

const createFollowButton = () => {
  
}