Code203 is an epic law enforcement social drama designed to bring the raw feel of the mean streets of LA into your personal computer.

## Running Code203

Running locally:

```
$ sudo npm install http-server -g
$ http-server
```

Running via Docker:

```
docker build -t message-app .
docker run message-app
```


## Game Design

### The Stage

Project 203 takes place on a city map of Los Angeles. The map is viewed in a ¾ perspective. The game uses a pixelated style.

### Gameplay

Project 203 is a massively multiplayer game supporting thousands(?) of concurrent players interacting as police or criminals. Gameplay is based on setting your boundary and tweaking your parameters and letting the game play itself. For that reason, gameplay continues while players are not logged in (with minor changes to the rules while the player is away).

#### Starting the game

##### Choosing a Character

Players are given a choice to play as a law enforcement professional or a malefactor (criminal). Each has multiple character classes to choose from with different skills and abilities.

##### Defining Boundaries

Each player must define an arbitrary boundary on the game map. This boundary defines the range of the characters actions. Law enforcement professionals define a boundary which outlines their patrol area. Criminals define the boundary of their territory in which they perform their criminal activities.

The larger the area the less effective but the more lucrative their actions.

A law enforcement professional can not see the boundary of any criminal (though other law enforcement boundaries are visible. A criminal can not see the boundary of any law enforcement (though other criminal boundaries are visible).

#### Playing

Criminals gain $ as they successfully execute their crimes and can upgrade weapons, drug distribution tools, etc... (maybe they be rollin' in a Maserati :) ). Eventually they can recruit lieutenants and expand their territory. (should lieutenant's be AI NPCs or other players?)

Cops can (somewhat randomly) capture and incarcerate criminals whose territory overlap their patrol area. Cops gain experience (should they also gain $ ?) as they catch more criminals. Eventually they can rise through the ranks becoming Captain, Chief, etc.

### Game Details

#### Player Classes

<div class="panel table-responsive">
<table class="table table-bordered">
  <thead>
  <tr>
    <th scope="col">Law Enforcement</th>
    <th scope="col">Malefactors</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Lieutenant - </td>
    <td>Thug - General miscreant, jack-of-all-criminal-trades.</td>
  </tr>
  <tr>
    <td>Captain - </td>
    <td>Thief - Proficient in most forms of thievery</td>
  </tr>
  <tr>
    <td>Commander - </td>
    <td>Street Walker - </td>
  </tr>
  <tr>
    <td><Deputy Chief - /td>
    <td>Procurer - </td>
  </tr>
  <tr>
    <td>Assistant Chief - </td>
    <td>Pusher - </td>
  </tr>
  <tr>
    <td>Chief - </td>
    <td>Lieutenant - </td>
  </tr>
  <tr>
    <td></td>
    <td>Kingpin - </td>
  </tr>
  </tbody>
</table>
</div>

LE Parameters

* Take Bribes

Criminal Parameters

* Inform


### Timeline

#### 0.0 - Design/Definition

* ?

#### 0.1 - P.O.C

* Minimum viable product.
* Game client should be simple enough to complete in two weekends of dedicated
 work. All art should just be rectangles and blocks.
* Game server should support four simultaneous players
* Subset of game mechanics

#### 0.8 - Alpha


#### 0.9 - Beta


#### 1.0 - Release


### Notes

Other Ideas
-----------
* Detective player type who can investigate higher level criminals, possible able to see boundaries
* Cops can be on the take
* multiplayer
* game continues while you're offline
* super simple mechanics allowing people to jump in and out for 5 minutes of play
* monetization, preferably through micro transactions

Words
* "burner" = disposable pre-paid cell phone
* "re-up" or "package" = new large shipment of drugs, which is then distributed to corners
* "po-po" = police, obviously
* "lake trout" = not to do with drugs, but weird local African-American term for what I believe is carp
