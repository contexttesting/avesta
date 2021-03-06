# avesta

[![npm version](https://badge.fury.io/js/avesta.svg)](https://npmjs.org/package/avesta)

<img src="doc/avesta.jpg" align="right">

`avesta` is to Read Zoroastrian Avesta Via CLI And Track Progress.

```sh
yarn add avesta
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`avesta(chapter?: number, paragraph: number): string`](#avestachapter-numberparagraph-number-string)
  * [`_avesta.Config`](#type-_avestaconfig)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import avesta from 'avesta'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `avesta(`<br/>&nbsp;&nbsp;`chapter?: number,`<br/>&nbsp;&nbsp;`paragraph: number,`<br/>`): string`

Returns the required chapter from Avesta.

```js
import avesta from 'avesta'

const res = avesta({
  chapter: 7,
})
console.log(res)
```
```
PRESENTATION OF OFFERINGS BY THE PRIEST WITH THE OBJECT OF PROPITIATION
NAMED.

1. With a complete and sacred offering [Ashi] I offer and I give
this meat-offering, and (with it) Haurvatat (who guards the water),
and Ameretatat (who guards the plants and the wood), and the flesh
of the Kine of blessed gift¹, for the propitiation of Ahura Mazda,
and of the Bountiful Immortals (all, and) for the propitiation
of Sraosha (Obedience) the blessed, endowed with sanctity, who
smites with the blow of victory, and who causes the settlements
to advance.

   + NOTE: 1. Hum 93: "truthfully I offer integrity and immortality and
  (the flesh of) the munificent cow";
  Hum2 98 (daD&mi qare+em myazdem haurvata ameretAta gAuc hud@):
  "as sacrificial repast and food I offer integrity [water],
  immortality [plants], and the munificent cow [flesh]"


2. And I offer the Haoma and Haoma-juice with a complete and
sacred offering for the propitiation of the Fravashi of Zarathushtra
Spitama the saint, and I offer the wood-billets with the perfume
for Thy propitiation, the Fire's, O Ahura Mazda's son!

3. And I offer the Haomas with a complete and sacred offering
for propitiation [to the good waters] for the good waters Mazda-made.
And I offer this Haoma-water with scrupulous exactness and with
sanctity, and this fresh milk, and the plant Hadhanaepata uplifted
with a complete and sacred offering for the propitiation of the
waters which are Mazda-made.

4. And I offer this Baresman with its Zaothra (and with its binding)
for a girdle spread with complete sanctity and order for the propitiation
of the Bountiful Immortals, and I offer with my voice the thoughts
well-thought, the words well-spoken, and the deeds well-done,
and the heard recital of the Gathas, the Mathras well-composed
and well-delivered, and this Lordship, and this Sanctity, and
this ritual mastership, and the timely Prayer for blessings, with
a complete and sacred offering for the propitiation of the holy
Yazads, heavenly and earthly, and for the contentment of the individual
soul!

5. And I offer to the Asnya with a complete and sacred offering,
as lords of the ritual order, and to Havani, and to Savanghi and
Visya, holy lords of the ritual order, and to Mithra of the wide
pastures, of the thousand ears, and myriad eyes, the Yazad of
the spoken name, and to Raman Hvastra.

6. And I offer with a complete and sacred offering to Rapithwina,
the holy lord of the ritual order; and I offer to Fradat-fshu
and to the Zantuma, and to Asha Vahishta (who is Righteousness
the Best) and to Ahura Mazda's Fire.

7. And I offer with a complete and sacred offering to Uzayeirina,
Fradat-vira, and to the Dahvyuma*, the holy lord of the ritual
order, and to that lofty Ahura Napat-apam, and to the waters which
Mazda created.

8. And I offer with a complete and sacred offering to Aiwisruthrima,
the life-furtherer, and to Fradat-vispam-hujyaiti, and to the
Zarathushtrotema, and to the Fravashis of the saints, and to the
women who have many sons, and to the Prosperous home-life which
endures (without reverse) throughout the year, and to Force, the
well-shaped and stately, and to the Blow which smites with victory
Ahura-given, and to the Victorious Ascendency (which it secures).

9. And I offer with a complete and sacred offering to Ushahina,
the holy lord of the ritual order, and to Berejya, and Nmanya,
and to Sraosha (Obedience) the blessed, endowed with sanctity,
who smites with the blow of victory, and makes the settlements
advance, and to Rashnu the most just, and to Arshtat who furthers
the settlements and causes them to increase.

10. And I offer with a complete and sacred offering to the Mahya,
lords of the ritual order, to the new and the waning moon (the
moon within), and to the full moon which scatters night, holy
lords of the ritual order.

11. And I offer with a complete and sacred offering to the Yearly
festivals, the lords of the ritual order, to Maidhyo-zaremaya,
and Maidhyo-shema, to Paitishahya, and to Ayathrima the furtherer
(the breeder), the spender of the strength of males, and to Maidhyairya
and Hamaspathmaedhaya, holy lords of the ritual order, and I offer
with sanctity to the several seasons, the lords of the ritual
order.

12. And I offer with a complete and sacred offering to all those
lords who are the thirty and three, who approach the nearest round
about our Havani, and who are the lords of Asha (the ritual by-eminence),
of Righteousness who is (the Best), whose observances are inculcated
as precepts by Mazda, and uttered forth by Zarathushtra. 13. And
I offer with a complete and sacred offering to Ahura and Mithra,
the lofty and imperishable, and holy two, and to the stars which
are the creatures of Spenta Mainyu, and to the star Tishtrya,
the radiant, the glorious, and to the Moon which contains the
seed of cattle in its beams, and to the resplendent Sun of the
fleet horses, the eye of Ahura Mazda, and to Mithra, the lord
of the provinces. And I offer with a complete and sacred offering
to Ahura Mazda, the resplendent, the glorious, (who rules this
day), and to the Fravashis of the saints (who name the month).

14. And I offer with a complete and sacred offering to thee, the
Fire, O Ahura Mazda's son! together with all the fires, and to
the good waters, even to the waters which are Mazda-made, and
to all the plants which Mazda made.

15. And I offer with a complete and sacred offering to the Mathra
Spenta, the holy, the effective, revealed against the Daevas,
the Zarathushtrian law, and to the long descent of the good Religion,
of the Mazdayasnian faith.

16. And I offer with a complete and sacred offering to Mount Ushi-darena,
the Mazda-made, brilliant with holiness, and to all the mountains
shining with holiness, of abundant brightness, and which Mazda
made, and to the Royal glory unconsumed and Mazda-made. And I
offer with a complete and sacred offering to Ashi Vanguhi, and
to Chishti Vanguhi, and to Erethe, and to Rasastat, and to the
Glory (and the) Benefit which Mazda made.

17. And I offer with a complete and sacred offering to the good
and pious Prayer for blessings of the pious man, and to that Yazad,
the swift and dreadful Curse of the wise.

18. And I offer with a complete and sacred blessing to these places,
districts, pastures, and abodes with their springs of water, and
to the waters and the lands, and the plants, and to this earth
and yon heaven, and to the holy wind, and to the stars, and the
moon, even to the stars without beginning (to their course), the
self-appointed, and to all the holy creatures of Spenta Mainyu,
be they male or female, regulators (as they are) of the ritual
order.

19. And I offer with a complete and sacred blessing to that lofty
lord who is Righteousness (the Best) and the Day-lords, the lords
of the days during their duration, and to those of the days during
daylight, and to the Month-lords, and the Year-lords, and to those
of the seasons, the lords who are lords of the ritual, and at
the time of Havani.

20. And I offer the Myazda meat-offering with a complete and sacred
offering, and Haurvatat (who guards the water), and Ameretatat
(who guards the wood), and the flesh of the Kine of blessed gift,
for the propitiation of Sraosha (Obedience) the blessed, whose
body is the Mathra, him of the daring spear, the lordly, the Yazad
of the spoken name.

21. And I offer the Haoma and the Haoma-juice for the propitiation
of the Fravashi of Zarathushtra Spitama the saint, the Yazad of
the spoken name.
And I offer the wood-billets with the perfume for Thy propitiation,
the Fire's, Ahura Mazda's son, the Yazad of the spoken name.

22. And I offer with a complete and sacred offering to the Fravashis
of the saints, the mighty and overwhelming, to those of the saints
of the ancient lore, and to those of the next of kin.

23. And I offer with a complete and sacred offering to all the
lords of the ritual order, and to all the good Yazads heavenly
and earthly who are (meet) for sacrifice and homage because of
Asha who is Vahishta (of Righteousness who is the Best).

24. May that approach to us, and with a sacred blessing (O Lord!)
whose benefits the offerers are seeking for. Thy praisers and
Mathra-speakers, O Ahura Mazda! may we be named; we desire it,
and such may we be. What reward, O Ahura Mazda! adapted to myself
Thou hast appointed unto souls,

25. Of this do Thou Thyself bestow upon us for this world and
for that of mind; (yea, do Thou bestow) so much of this as that
we may attain to Thy ruling protection and to that of Righteousness
for ever.

26. We sacrifice to the Ahuna-vairya and to the veracious word
correctly uttered, and to the good and pious prayer for blessings,
and to the dreadful curse of the wise, the Yazad, and to Haurvatat
and Ameretatat, and to the flesh of the Kine of blessed gift,
and to the Haoma and Haoma-juice, and to the wood-billets, and
the perfume, for the praise of the pious and good prayer for blessings.

(THE YENGHE HATAM:)

27. (To that one) of beings do we sacrifice whose superior (fidelity)
in the sacrifice Ahura Mazda knows through his Righteousness (within
him, yea, even to those female saints do we sacrifice) whose (superior
sanctity is thus known. We sacrifice to all) both males and females
whose (superiority is such).

(The Ratu speaks.) As an Ahu (revered and) to be chosen, he who is the Zaotar speaks
forth to me.
(The Zaotar.) So let the Ratu from his Righteousness, holy and learned, speak
forth!
```

__<a name="type-_avestaconfig">`_avesta.Config`</a>__: Options for the program.

|     Name     |      Type       |      Description       |
| ------------ | --------------- | ---------------------- |
| __chapter*__ | <em>number</em> | The chapter to read.   |
| paragraph    | <em>number</em> | The paragraph to read. |


<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

The text was made available via [http://avesta.org](http://avesta.org) made by [Joseph H. Peterson](https://twitter.com/twilit_grotto?lang=en). Translated by L. H. Mills (from Sacred Books of the East, American Edition, 1898) except as noted.


  (c) [Context Testing](https://contexttesting.com) 2019


<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>