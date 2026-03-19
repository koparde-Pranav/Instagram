import React from 'react'
import StoryViewer from '../../Components/StoryComponents/StoryViewer'

const Story = () => {
  const story = [
    {
      image: "https://assets-prd.ignimgs.com/2026/02/24/call-of-duty-vanguard-zombies-review-in-progress-rhxp-1771929891444.jpg",
    }, {
      image: "https://cdn.wccftech.com/wp-content/uploads/2020/09/WCCFcallofdutyzombies.jpg"
    }, {
      image: "https://sm.ign.com/ign_pk/review/c/call-of-du/call-of-duty-black-ops-6-zombies-review_7xp2.jpg"
    }, {
      image: "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2019/10/CallofDutyZombies.png"
    }, {
      image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/10/call-of-duty-vanguard-zombie.jpg"
    }
  ]
  return (
    <div>
      <StoryViewer stories={story}></StoryViewer>
    </div>
  )
}

export default Story