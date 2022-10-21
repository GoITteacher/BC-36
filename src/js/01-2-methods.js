/*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],

  changeName(newName) {
    this.name = newName;
  },
  addTrack(track) {
    return this.tracks.push(track);
  },
  getTrackCount() {
    return this.tracks.length;
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
};

console.log(playlist.getTrackCount());

playlist.changeName('Новое имя');

playlist.addTrack('новый трек 1');
console.log(playlist.getTrackCount());

console.log(playlist.addTrack('новый трек 2'));

playlist.updateRating(3);

console.log(playlist);

playlist.updateRating(4);

console.log(playlist);
