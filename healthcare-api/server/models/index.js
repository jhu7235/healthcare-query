import db from './_db';
import User from './user-model';
import Message from './message-model';

/*
    You may not have seen the following method of association before.

    The following two lines add two additional columns to
    the `messages` table: `toId` and `fromId`.

    The `as` key in the options object is called an "alias"
    and allows for us to associate foreign keys of the same entity--
    in this case, user--more than once on a single model/table.

    These aliases will be important to remember and reference throughout
    the server portion of the checkpoint.

    http://sequelize.readthedocs.io/en/v3/docs/associations/#naming-strategy
 */
Message.belongsTo(User, { as: 'to' });
Message.belongsTo(User, { as: 'from' });

export default db;
