from graphene import ObjectType, Schema

from character_creator.basics5e.schema import Basics5eQuery


class Query(Basics5eQuery, ObjectType):
    pass


schema = Schema(query=Query)
