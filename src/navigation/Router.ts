import Loading from '@screens/Loading';
import Room from '@screens/Room';
import SpaceX from '@screens/SpaceX';
import Detail from '@screens/Detail';

const stack = [
  {
    key: 0,
    name: 'Loading',
    components: Loading,
    header: false,
  },
  {
    key: 1,
    name: 'Detail',
    components: Detail,
    header: false,
  },
];

const tabs = [
  {
    key: 0,
    name: 'SpaceX',
    components: SpaceX,
    icon: 'rocket',
  },
  {
    key: 1,
    name: 'Room',
    components: Room,
    icon: 'key',
  },
];

export default {
  stack,
  tabs,
};
