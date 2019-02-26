from flask import Flask, request
from flask_restful import Resource, Api, abort
from pony.orm import db_session, ObjectNotFound, select
from pony.orm.serialization import to_dict

from UUIDEncoder import UUIDEncoder
from db import News

app = Flask(__name__)
api = Api(app)

app.config['RESTFUL_JSON'] = {
    'cls': UUIDEncoder,
    'ensure_ascii': False
}

class NewsRes(Resource):
    @db_session
    def get(self):
        return to_dict([*News.select(lambda s: True)])

    @db_session
    def post(self):
        data = request.get_json(force=True)
        song = News(**data)
        return to_dict(song)


class SingleNewsRes(Resource):
    @db_session
    def get(self, news_id):
        try:
            news = News[news_id]
            return to_dict(news)
        except ObjectNotFound:
            return "Unrecognized News ID"

    @db_session
    def delete(self, news_id):
        try:
            news = News[news_id]
            news.delete()
            return "Song deleted!"
        except ObjectNotFound:
            return "Unrecognized Song ID"

    @db_session
    def put(self, news_id):
        data = request.get_json(force=True)
        news = News[news_id]
        for key, value in data:
            news[key] = value

        return to_dict(news)


api.add_resource(NewsRes, '/news')
api.add_resource(SingleNewsRes, '/news/<string:news_id>')

if __name__ == '__main__':
    app.run(debug=True)
