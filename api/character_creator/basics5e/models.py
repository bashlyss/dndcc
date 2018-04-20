from django.db import models

class Spell(models.Model):
    name = models.CharField(max_length=80)
    level = models.IntegerField()
    description = models.TextField()

    is_ritual = models.BooleanField(default=False)
    ritual_time = models.DurationField(null=True, blank=True)

    verbal = models.BooleanField(default=True)
    material = models.BooleanField(default=True)
    somatic = models.BooleanField(default=True)

    RANGE_TOUCH = 0
    RANGE_SELF = -1
    range = models.IntegerField(default=RANGE_SELF)
    cast_time = models.CharField(max_length=80)
    concentration_time = models.DurationField(default=0)

    damage = models.CharField(max_length=80, blank=True)
    handler_fn = models.CharField(max_length=80, blank=True)
    overpower_fn = models.CharField(max_length=80, blank=True)

    classes = models.ManyToManyField('basics5e.Class')

class Effect(models.Model):
    name = models.CharField(max_length=80)

    description = models.TextField()
    handler_fn = models.CharField(max_length=80)


class Attribute(models.Model):
    is_saving_throw = models.BooleanField(default=False)

    STRENGTH = 1
    DEXTERITY = 2
    CONSTITUTION = 3
    WISDOM = 4
    INTELLIGENCE = 5
    CHARISMA = 6

    ATTRIBUTE_CATEGORIES = (
        (STRENGTH, 'STR'),
        (DEXTERITY, 'DEX'),
        (CONSTITUTION, 'CON'),
        (WISDOM, 'WIS'),
        (INTELLIGENCE, 'INT'),
        (CHARISMA, 'CHA'),
    )

    category = models.IntegerField(choices=ATTRIBUTE_CATEGORIES)
    name = models.CharField(max_length=80)

class Background(models.Model):
    name = models.CharField(max_length=80)
    description = models.TextField()

    proficiency_1 = models.ForeignKey('basics5e.Attribute', related_name='background_proficiency_1', on_delete=models.CASCADE)
    proficiency_2 = models.ForeignKey('basics5e.Attribute', related_name='background_proficiency_2', on_delete=models.CASCADE)

class Race(models.Model):
    name = models.CharField(max_length=80)

    ability_1 = models.ForeignKey('basics5e.Attribute', related_name='ability_increases_1', on_delete=models.CASCADE)
    ability_2 = models.ForeignKey('basics5e.Attribute', related_name='ability_increases_2', on_delete=models.CASCADE)
    ability_3 = models.ForeignKey('basics5e.Attribute', related_name='ability_increases_3', null=True, on_delete=models.SET_NULL)
    ability_4 = models.ForeignKey('basics5e.Attribute', related_name='ability_increases_4', null=True, on_delete=models.SET_NULL)

    TINY = 1
    SMALL = 2
    MEDIUM = 3
    LARGE = 4
    HUGE = 5
    GARGANTUAN = 6

    SIZE_CHOICES = (
        (TINY, 'Tiny'),
        (SMALL, 'Small'),
        (MEDIUM, 'Medium'),
        (LARGE, 'Large'),
        (HUGE, 'Huge'),
        (GARGANTUAN, 'Gargantuan'),
    )

    size = models.IntegerField(choices=SIZE_CHOICES)
    speed = models.IntegerField()

    darkvision = models.IntegerField(verbose_name='Feet of darkvision. 0 if no darkvision')

    languages = models.ManyToManyField('basics5e.Language')
    traits = models.ManyToManyField('basics5e.Trait')


class Language(models.Model):
    name = models.CharField(max_length=80)


class Item(models.Model):
    name = models.CharField(max_length=80)

    TYPE_GENERIC = 0
    TYPE_WEAPON = 1
    TYPE_ARMOR = 2
    TYPE_CLOTHING = 3
    TYPE_INTERACTIVE = 4

    TYPE_CHOICES = (
        (TYPE_GENERIC, 'Generic'),
        (TYPE_WEAPON, 'Weapon'),
        (TYPE_ARMOR, 'Armor'),
        (TYPE_CLOTHING, 'Clothing'),
        (TYPE_INTERACTIVE, 'Interactive'),
    )

    type = models.IntegerField(choices=TYPE_CHOICES, default=TYPE_GENERIC)
    description = models.TextField(blank=True)

    handler_fn = models.CharField(max_length=80)


class Class(models.Model):
    name = models.CharField(max_length=80)

    SPELLS_NONE = 0
    SPELLS_HALF = 1
    SPELLS_FULL = 2
    SPELLS_TRICKSTER = 3
    SPELLS_WARLOCK = 4
    SPELL_CHOICES = (
        (SPELLS_NONE, 'No spellcasting ability'),
        (SPELLS_HALF, 'Half caster'),
        (SPELLS_FULL, 'Full caster'),
        (SPELLS_TRICKSTER, 'Arcane trickster'),
        (SPELLS_WARLOCK, 'Warlock'),
    )
    spells_type = models.IntegerField(choices=SPELL_CHOICES, default=SPELLS_NONE)
    hit_dice = models.IntegerField(verbose_name='sides on hit dice for this class')
    proficiencies = models.ManyToManyField('basics5e.Attribute', related_name='class_proficiencies')

    def get_spell_slots_for_level(self, player_level, spell_level):
        pass

    def get_cantrip_count(self, level):
        pass

    def get_spell_count(self, level):
        pass


class Feature(models.Model):
    level = models.IntegerField()
    class_for = models.ForeignKey('basics5e.Class', on_delete=models.CASCADE)
    trait = models.ForeignKey('basics5e.Trait', on_delete=models.CASCADE)


class Trait(models.Model):
    name = models.CharField(max_length=80)
    description = models.TextField()


class Feat(models.Model):
    name = models.CharField(max_length=80)
    description = models.TextField()

    handler_fn = models.CharField(max_length=80)
