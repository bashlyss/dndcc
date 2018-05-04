import graphene
from graphene_django import DjangoObjectType

from character_creator.basics5e import models

class SpellNode(DjangoObjectType):
    class Meta:
        model = models.Spell
        filter_fields = ['name', 'level', 'is_ritual', 'classes']


class EffectNode(DjangoObjectType):
    class Meta:
        model = models.Effect
        filter_fields = ['name']


class AttributeNode(DjangoObjectType):
    class Meta:
        model = models.Attribute
        filter_fields = ['name', 'is_saving_throw', 'category']


class Basics5eQuery(graphene.AbstractType):
    spell = graphene.Field(SpellNode, id=graphene.Int(), name=graphene.String())
    all_spells = graphene.List(SpellNode)

    effect = graphene.Field(EffectNode)
    all_effects = graphene.List(EffectNode)

    attribute = graphene.Field(AttributeNode)
    all_attributes = graphene.List(AttributeNode)
