import json

from pony.orm import db_session

from db import News

with open('data/posts.json', encoding='utf8') as f:
    data = json.load(f)


@db_session
def post_news(title, content, author):
    News(title=title, content=content, author=author)


for post in data:
    post_news(post['title'], post['body'], post['user_id'])