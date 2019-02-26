from uuid import UUID

from pony.orm import Database, Required, PrimaryKey, Set, Optional

import config

db = Database()


class News(db.Entity):
    news_id = PrimaryKey(UUID, auto=True)
    title = Required(str)
    content = Required(str)
    author = Required(str)

db.bind(
    provider='postgres',
    user=config.POSTGRES_USER,
    password=config.POSTGRES_PASSWORD,
    host=config.POSTGRES_HOST,
    port=config.POSTGRES_PORT,
    database=config.POSTGRES_DB
)
db.generate_mapping(create_tables=True)
