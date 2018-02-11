"""
This module contains functions referenced by ``Spell.handler_fn`` to calculate behavior of spells under normal conditions
"""

def cantrip_damage(spell, player):
    level_to_dice_map = {
        1: 1,
        5: 2,
        11: 3,
        17: 4,
    }
    num_dice = 1 + (player.level + 1) // 6
    return str(num_dice) + spell.damage[1:]
