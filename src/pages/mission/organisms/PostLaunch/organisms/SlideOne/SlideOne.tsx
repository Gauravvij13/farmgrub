/* eslint-disable global-require */
import React, { MouseEvent } from 'react';
import { PostLaunchSlider } from '../PostLaunchSlider';

type SlideOneProps = {
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
};
export const SlideOne = ({ onClick }: SlideOneProps) => {
  return (
    <PostLaunchSlider
      bgTop="missionblue.500"
      bgBottom="missionblue.600"
      src={require('../../../../../../assets/images/mission/prelaunch.png')}
      titleText="mission.postlaunch.header.title.slideone"
      heading="mission.postlaunch.header.heading.slideone"
      description="mission.postlaunch.description.slideone"
      title="postlaunch.continue"
      onClick={onClick}
    />
  );
};
