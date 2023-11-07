import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const loadIcons = async () => {
  const personIcon = await MaterialIcons.getImageSource('person', 25);
  const settingsIcon = await MaterialIcons.getImageSource('settings', 25);
  return { personIcon, settingsIcon };
};