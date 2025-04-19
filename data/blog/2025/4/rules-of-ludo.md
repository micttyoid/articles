---
title: 'Rules of Ludo'
date-published: null
date-drafted: 2025-04-17
date-modified: null
author:
  - name: Luke Yoo
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - 'Ludo'
  - 'Board Game'
  - 'Game Rule'
---

# Rules of Ludo

Unlike chess or cricket, Ludo has no official rulebook. This document defines 
the game rules.

![Ludo Board](https://codeberg.org/mictty/articles/raw/branch/main/static/images/2025/ludo-board.jpg)

## Table of Content

- [Forwardability](#forwardability)  
- [_The Rule of Six_](#the-rule-of-six)
- [Pair](#pair)
- [Discard of roll](#discard-of-roll)
- [Capture](#capture)

## Forwardability

The forwardability is defined by following:

1. If the value of die is more than the number of squares left to a pawn on
   square before its Destination, the pawn is **not forwardable**.

2. If the value of die is even and the half is more than the number of squares
   left to a Pair before its Destination, the Pair is **not forwardable**.

3. If an opponent's blockade presents in _N_ squares, front of a pawn
   on square, owned by the player and the value of die is more than 
   _N_ - 1, the pawn is **not forwardable**.

4. If an opponent's blockade presents in _N_ squares, front of a Pair, 
   owned by the player and the even value of die, whose half is more than 
   _N_ - 1, is made, the Pair is **not forwardable**.

5. Any other pawn(s) on square or Pair that are under none of the 
   conditions of the past statements, the pawn or Pair is **forwardable**.

**Example: _Rule of Six_**

If a player makes six, a second time in its turn, and all player's pawn(s) 
on square and Pair(s) cannot forward since the number of squares before 
its Destination is less than six for each pawn on square and the number
of square before its Destination is less than three for each Pair, and the 
player's Base is  empty, **none** of the players pawn(s) on square and
Pair(s) is **forwardable**. Therefore, the player takes the last roll.

## The Rule of Six

If a player makes a die of six, **the first, the second, or the third time** 
in its turn, the player has following options:

1. If an idle pawn exists in the player's Base, the player may enter it and
   take another roll.

2. Forward one of the player's forwardable pawn(s) on square<sup>1</sup> by
   six and take another roll.

3. Forward one of the player's forwardable Pair(s) by three and take 
   another roll.

4. If the player's Base is empty and the player has neither forwardable pawn,
   nor forwardable Pair, the player takes another roll.

If a player makes **the four consecutive sixes** in its turn, at the last
roll, the turn is terminated and the next player takes a turn.

<sup>1</sup> This includes a pawn who is part of a pair since the split is 
allowed.

## Pair

**Formation**

When a player's pawn, after move, shares the same square with another pawn of
the player, the two pawns form a pair.

**Blockade**

A pair acts as a blockade and affects the forwardability of opponent's pawn(s)
behind.

**Split: withdrawal of Blockade**

If a roll makes a Pair not forwardable, but a pawn of the Pair is forwardable,
the player can forward a pawn of the pair and they no longer form
a pair.

**Split by force**

1. (By odd roll) If an odd roll is made where a pawn of the Pair is forwardable,
    the player's Base is empty, and no other forwardable option is found,
    the Pair **must split** by forwarding one of the two pawns.

2. (By forwardability) If a roll makes a Pair not forwardable, but a pawn
    of the Pair is forwardable, the player's Base is empty, and the no other
    forwardable option is found, the Pair **must split** by forwarding one of 
    the two pawns.

**Forward as a Pair**

If a roll of **even** number, **other than six**, in a player's turn, who owns 
a forwardable Pair(Jota), is made, the Pair can forward by _M_ squares, where 
_M_ is the die number divided by two.

## Discard of roll

If neither forwardable pawn on square nor forwardable Pair given to a player 
and the Base is empty, the turn is terminated.

## Capture

If a pawn or a Pair is forwarded to a non-safe square where an opponent's
pawn presents, the opponent's pawn is sent back to its Base.
