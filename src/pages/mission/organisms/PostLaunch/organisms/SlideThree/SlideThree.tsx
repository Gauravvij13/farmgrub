/* eslint-disable global-require */
import React, { MouseEvent } from 'react';
import { PostLaunchSlider } from '../PostLaunchSlider';

type SlideThreeProps = {
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
};
export const SlideThree = ({ onClick }: SlideThreeProps) => {
  return (
    <PostLaunchSlider
      bgTop="missiongreen.500"
      bgBottom="missiongreen.600"
      src={require('../../../../../../assets/images/mission/postlaunch-two.png')}
      titleText="mission.prelaunch.header.title"
      heading="mission.postlaunch.header.heading.slidethree"
      description="mission.postlaunch.description.slidethree"
      title="postlaunch.continue"
      logoSrc={require('../../../../../../assets/images/mission/harvest.png')}
      onClick={onClick}
    />
  );
};
