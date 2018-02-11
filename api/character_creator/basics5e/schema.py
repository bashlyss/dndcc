from graphene import relay, ObjectType, AbstractType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from character_creator.basics5e import models

class SpellNode(DjangoObjectType):
    class Meta:
        model = models.Spell
        filter_fields = ['name', 'level', 'is_ritual', 'classes']
        interfaces = (relay.Node,)


class EffectNode(DjangoObjectType):
    class Meta:
        model = models.Effect
        filter_fields = ['name']
        interfaces = (relay.Node,)


class AttributeNode(DjangoObjectType):
    class Meta:
        model = models.Attribute
        filter_fields = ['name', 'is_saving_throw', 'category']
        interfaces = (relay.Node,)


class Basics5eQuery(AbstractType):
    spell = relay.Node.Field(SpellNode)
    all_spells = DjangoFilterConnectionField(SpellNode)

    effect = relay.Node.Field(EffectNode)
    all_effects = DjangoFilterConnectionField(EffectNode)

    attribute = relay.Node.Field(AttributeNode)
    all_attributes = DjangoFilterConnectionField(AttributeNode)
