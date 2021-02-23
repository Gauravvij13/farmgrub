import React from 'react';
import { FarmDetail } from '.';

export default {
  title: `molecules/FarmDetailModal`,
};

export const Opened = () => <FarmDetail isVisible farmId="" onClose={() => {}} />;
