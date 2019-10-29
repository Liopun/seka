# Seka

A memory game for children developed using HTML-5, CSS3 and Javascript, in which you have to match a pair of cards that contain the same Rwandan cultural graphics. i.e by flipping a card, then try to find another card that has the same image as the first. The flipped cards will flip back with the face down if you can't find a pair. This game help improve memory, concentration and thinking skills.
 
 ![Seka](https://i.imgur.com/9b3bY61.jpg)

## What is it made of?

The app uses the following:

- v2.1.0 of [jQuery](https://code.jquery.com/jquery/)
- v1.4.0 of [jQuery Mobile](https://blog.jquerymobile.com/2013/12/23/jquery-mobile-1-4-0-released/)
- v0.5.2 of [soundJs](https://github.com/CreateJS/SoundJS/releases) is being used for loading game sounds
- [jQuery Flippy](https://github.com/yemM/flippy) for flipping the cards

## What does it contain?

Apart from its flexible design achieved through the use of HTML-5, CSS3 and jQuery Mobile, there are also some nested javascript functions to handle the game's flow and complex functionalities.
All graphics were designed to meet the standards of this project.

## How to Setup?

### Download
Simply clone the repository and install "Seka.apk" on [A Genymotion Emulator](https://www.genymotion.com/).


### Compile and Run
This is app was compiled using [The PhoneGap framework](https://phonegap.com/)
You may visit the [PhoneGap docs](http://docs.phonegap.com/references/developer-app/custom-build/ios/) for a more in-depth guide or follow the steps below.

1. create a phonegap demo app using the instructions from the [PhoneGap docs](http://docs.phonegap.com/getting-started/3-create-your-app/desktop/)
2. clone the repository and copy all the files into "wwww" of the new phonegap demo app created

Or you can just clone the repository and access the `index.html` in the route directory through your browser using [ripple emulator](https://www.npmjs.com/package/ripple-emulator). 

```shellsession
$ git clone https://github.com/Liopun/seka.git
$ cd seka/
$ npm install -g ripple-emulator
$ ripple emulate
```
