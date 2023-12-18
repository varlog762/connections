export interface MessageResponseInterface {
  authorID: {
    S: 'string'; // id of the author of the message
  };
  message: {
    S: 'string'; // message text
  };
  createdAt: {
    S: 'string'; // unix timestamp when message was sent
  };
}
