/* eslint-disable global-require */
import React, { MouseEvent } from 'react';
import { PostLaunchSlider } from '../PostLaunchSlider';

type SlideTwoProps = {
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
};

export const SlideTwo = ({ onClick }: SlideTwoProps) => {
  return (
    <PostLaunchSlider
      bgTop="missionorange.500"
      bgBottom="missionorange.600"
      src={require('../../../../../../assets/images/mission/postlaunch-one.png')}
      titleText="mission.postlaunch.header.title.slidetwo"
      heading="mission.postlaunch.header.heading.slidetwo"
      description="mission.postlaunch.description.slidetwo"
      title="postlaunch.continue"
      onClick={onClick}
    />
  );
};
