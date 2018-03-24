# dndcc
D&amp;D 5th Edition Character Manager

In my experience playing 5th edition dungeons and dragons, I have come across a few pain points with all of the character sheets I have come across that I aim to resolve with this.

1. They are hard to manage once I take damage in a session or have used something
2. There are too many pieces of information that I need to keep convenient or look for on my sheet

This project aims to provide a solution to those problems while keeping as many of the benefits of existing character sheets.

The abilities I want to provide are:
- Easily track remaining uses of something between rests. Primarily for spell slots but also Barbarian rage, sorcery points, bardic inspiration as well as examples. Support this for the main abilities of all major classes
- Easily track current HP, temp HP, max HP and hit die remaining
- track ammunition (if you want, leave it to the DM whether you want to hand wave over that)
- provide easy access to more detailed information on things like spells and abilities in views that are relevant to your current actions so that you have what you want available at your fingertips when you want.
- Provide tools for taking short/long rests
- Tools around levelling up a character and creating a new one
- allow users to help build the library of options available for spells, items, other equipment. Especially when it comes to tracking random equipment, there are nearly infinite different options, especially in the world of D&D and it would be impossible for me to have everything. This should help to kickstart the data processing. Especially helpful for non standard magic items that may be campaign specific.

Some more web app features to provide
- Allow someone to have an account with many different character sheets for playing in different campaigns
- Provide an API with the fundamentalsso their data can be stored on a server. Alternatively, provide a localstorage option if you don't want it available on other devices.
- Provide applications for accessing it in different form factors. Intially for web on mobile devices (easiest, most useful approach), eventually for desktop web and potentially iOS or Android if things go well and I can justify using this project to try learning it in a new context.

For now, data is just a single character sheet always. Eventually build the localhost and server implementations and use those as the MVP for realeasing and announcing this to a larger group of people. Without an account, allow someone to use localstorage for their characters and with an account, allow sharing across devices

In order for this project to become more than just a fun side project for me to try out new technologies, I'm going to need some help, first in working on formalizing a design and generating SVG images.
