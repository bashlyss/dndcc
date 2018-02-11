from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db import models

class Player(models.Model):

    details = models.ForeignKey('player.Details', related_name='players', on_delete=models.CASCADE)
    combat_player = models.OneToOneField('player.CombatPlayer', related_name='player', null=True, on_delete=models.SET_NULL)

    hit_points = models.IntegerField(default=0)
    armor_class = models.IntegerField(default=10)
    spell_dc = models.IntegerField(default=8)
    movement = models.IntegerField(default=30)

    # If I support multi classing in the future, should add in new field as ManyToMany for multi_classes
    base_class = models.ForeignKey('player.Class', on_delete=models.CASCADE)
    race = models.ForeignKey('basics5e.Race', related_name='players', on_delete=models.CASCADE)
    spells = models.ManyToManyField('basics5e.Spell')

    proficiencies = models.ManyToManyField('basics5e.Attribute')
    languages = models.ManyToManyField('basics5e.Language')
    feats = models.ManyToManyField('basics5e.Feat')

    def __str__(self):
        return self.details.name


class CombatPlayer(models.Model):

    current_max = models.IntegerField(default=0)
    current_hp = models.IntegerField(default=0)
    death_save_passes = models.IntegerField(default=0)
    death_save_fails = models.IntegerField(default=0)

    initiative = models.IntegerField(default=10)

    last_attack_name = models.CharField(max_length=80)
    last_attack_damage = models.CharField(max_length=20)

    hit_die_6 = models.IntegerField(default=0)
    hit_die_8 = models.IntegerField(default=0)
    hit_die_10 = models.IntegerField(default=0)
    hit_die_12 = models.IntegerField(default=0)

    spell_slot_1 = models.IntegerField(default=0)
    spell_slot_2 = models.IntegerField(default=0)
    spell_slot_3 = models.IntegerField(default=0)
    spell_slot_4 = models.IntegerField(default=0)
    spell_slot_5 = models.IntegerField(default=0)
    spell_slot_6 = models.IntegerField(default=0)
    spell_slot_7 = models.IntegerField(default=0)
    spell_slot_8 = models.IntegerField(default=0)
    spell_slot_9 = models.IntegerField(default=0)

    class_combat_type = models.ForeignKey(ContentType, on_delete=models.CASCADE, null=True)
    class_combat_id = models.PositiveIntegerField(null=True)
    class_combat_details = GenericForeignKey('class_combat_type', 'class_combat_id')

    # Convenience methods to get some current items for the player
    equipped_weapon = models.ForeignKey('player.Item', null=True, related_name='player_for_weapon', on_delete=models.CASCADE)
    equipped_offhand_weapon = models.ForeignKey('player.Item', null=True, related_name='player_for_offhand_weapon', on_delete=models.CASCADE)
    worn_armor = models.ForeignKey('player.Item', null=True, related_name='player_for_armor', on_delete=models.CASCADE)


class Effect(models.Model):
    player = models.ForeignKey('player.CombatPlayer', on_delete=models.CASCADE)
    effect = models.ForeignKey('basics5e.Effect', related_name='instances', on_delete=models.CASCADE)

    duration_scale = models.CharField(max_length=80)
    duration_time = models.IntegerField(null=True)


class Details(models.Model):

    name = models.CharField(max_length=80)
    alignment = models.CharField(max_length=80)
    background = models.ForeignKey('basics5e.Background', on_delete=models.CASCADE)
    experience = models.IntegerField(default=0)

    backstory = models.TextField(blank=True)
    flaw = models.TextField(blank=True)
    bond = models.TextField(blank=True)
    strength = models.TextField(blank=True)

    age = models.CharField(max_length=20)
    height = models.CharField(max_length=20)
    weight = models.CharField(max_length=20)


class Class(models.Model):
    origin = models.ForeignKey('basics5e.Class', related_name='instances', on_delete=models.CASCADE)

    level = models.IntegerField(default=1)


class Attribute(models.Model):
    player = models.ForeignKey('player.Player', related_name='attributes', on_delete=models.CASCADE)
    attribute_type = models.ForeignKey('basics5e.Attribute', related_name='instances', on_delete=models.CASCADE)
    base_value = models.IntegerField(default=10)
    modifier = models.IntegerField(default=0)

    @property
    def value(self):
        return self.base_value + self.modifier

    @property
    def is_saving_throw(self):
        return self.attribute_type.is_saving_throw


class Item(models.Model):
    player = models.ForeignKey('player.Player', related_name='items', on_delete=models.CASCADE)
    item_type = models.ForeignKey('basics5e.Item', related_name='instances', on_delete=models.CASCADE)
    equipped = models.BooleanField(default=False)

    modifier = models.CharField(max_length=80, blank=True)
