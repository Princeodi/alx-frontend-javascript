import ClassRoom from './0-classroom';

function initializeRooms() {
  const _maxStudentsSize = [19, 20, 34];
  const rooms = _maxStudentsSize.map((_maxStudentsSize) => new ClassRoom(size));
  return rooms;
}

const rooms = initializeRooms();
console.log(rooms);
