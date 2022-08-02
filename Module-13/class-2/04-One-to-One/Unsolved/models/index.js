const Reader = require('./Reader');
const LibraryCard = require('./LibraryCard');



Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  // TODO: Add a comment describing the functionality of this property
  // When a reader is deleted, a library card that has a foreign key referencing that reader will
  // also be deleted
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// TODO: Add a comment describing the functionality of this statement
// Exports the two models to be used elsewhere
module.exports = { Reader, LibraryCard };
