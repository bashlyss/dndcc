from django.contrib import admin

from . import models

class SpellAdmin(admin.ModelAdmin):
    pass

class AttributeAdmin(admin.ModelAdmin):
    pass

class EffectAdmin(admin.ModelAdmin):
    pass

class ClassAdmin(admin.ModelAdmin):
    pass

class RaceAdmin(admin.ModelAdmin):
    pass

class BackgroundAdmin(admin.ModelAdmin):
    pass

class ItemAdmin(admin.ModelAdmin):
    pass

class FeatureAdmin(admin.ModelAdmin):
    pass

class TraitAdmin(admin.ModelAdmin):
    pass

class FeatAdmin(admin.ModelAdmin):
    pass

class LanguageAdmin(admin.ModelAdmin):
    pass

admin.site.register(models.Spell, SpellAdmin)
admin.site.register(models.Attribute, AttributeAdmin)
admin.site.register(models.Effect, EffectAdmin)
admin.site.register(models.Class, ClassAdmin)
admin.site.register(models.Race, RaceAdmin)
admin.site.register(models.Background, BackgroundAdmin)
admin.site.register(models.Item, ItemAdmin)
admin.site.register(models.Feature, FeatureAdmin)
admin.site.register(models.Trait, TraitAdmin)
admin.site.register(models.Feat, FeatAdmin)
admin.site.register(models.Language, LanguageAdmin)
