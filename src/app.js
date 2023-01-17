import GameSavingLoader from './modules/GameSavingLoader';

export default GameSavingLoader
  .load()
  .then(
    (saving) => saving,
    (err) => new Error(err),
  );
