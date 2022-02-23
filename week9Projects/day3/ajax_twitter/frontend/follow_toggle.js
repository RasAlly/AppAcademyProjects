class FollowToggle  {
  constructor(){
    let $followButton = $('.follow-toggle')
    this.$followButton = $followButton
    this.userId = $followButton.attr('user-id')
    this.followState = $followButton.attr('initial-follow-state')
    return this
  }
}

module.exports = FollowToggle;