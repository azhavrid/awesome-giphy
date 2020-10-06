import React from 'react';
import { StatusBar } from 'react-native';

const AppStatusBar: React.FC = () => <StatusBar backgroundColor="transparent" barStyle="light-content" />;

export default React.memo(AppStatusBar);
