---
layout: post
title: "Making Brahmin Italic"
image: bi-cover.png
theme: paper
accent: "#b4003c"
description: I challenged myself to cut 270+ glyphs in one week.
---

{% include
  fig.html
  img="bi-cover.png"
  alt="a sample of brahmin italic one"
  class="slim"
  %}
{% if page.description %}

<p class="description">{{ page.description }}</p>
{% endif %}

---

{% include
fig.html
img="bi-range.png"
class="max"
action="zoom"
caption="<span style='color: var(--x)'>Regular bolds are reproportioned.</span> <span style='color: var(--z)'>Italic range has been added.</span>"
%}

This is the new Brahmin family. I may give the italic a new 'related identity' in the Ergata system (such as the related identities of [Canticle & Candor](/ergata.html#canticle)), or just treat it as an alternate mode of the Roman (the 4i, 5i, 6i... system I'm using now)

{% include
fig.html
action="zoom"
img="bi-52-4i.png"
class="max"
%}

I cut the regular first. At TypeCon Xx, I saw Nina Stössinger's excellent work on [Conductor](https://frerejones.com/families/conductor). She showed that the 'italic' look is all about triangularity: the upstroke, which cuts across rectangular letter interiors diagonally, creates a motif of slanted triangle wedges. Since Brahmin meaty around its skeleton, I subtly weighted the upstroke angle (~46°) as the italic's central axis of contrast, evoking the modern comic hands: the marker, the pencil.

{% include
fig.html
img="bi-palindrome.png"
action="zoom"
class="bloq"
%}

_a d p b q g n h m u_ • Here I focused on the placement of the upstroke, its sharp curve where it begins from the left stem, its slow, relaxed transition into the right stem.

{% include
fig.html
img="bi-viewport.png"
class="bloq"
%}

_v w y_ • The _v_ is a _u_ without a right stem. The _w_ and _y_ are directly derived. Note the slight leftward flex of the upper stem. Helps with hinting while preserving the angle made with the upstroke.

{% include
fig.html
img="bi-certificate.png"
class="bloq"
%}

_c s r t f_ • strokes are cut off at the angles that allow them to be chunky, rather than sharp.

{% include
fig-2.html
left="bi-52-6i.png"
right="bi-52-2i.png"
%}

Next I cut the bold, then the light. (The above weights are adjacent interpolations of the dark and light masters, 7i and 0i.)

{% include
fig-1-2.html
top="bi-52-S.png"
left="bi-regular-weights.png"
right="bi-italic-weights.png"
%}
This brings the total number of fonts in the Brahmin set to seventeen. Italics still need some testing before release.
