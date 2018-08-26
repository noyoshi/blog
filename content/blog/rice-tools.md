---
title: "Ricing Tools"
description: "Look at all these shiny things!"
date: "2018-08-21T22:22:50+01:00"
weight: 20
draft: false
fa: "fas fa-paint-brush"
---

Howdy! This will be a post outlining some of the available tools for ricing Linux distros. This list is by no means exhaustive and I will 
create posts about each item, so check for those as well!

### TLDR:  
> In case you are in a hurry

- [dylanaraps/pywal](https://github.com/dylanaraps/pywal)
  - pip
- [karlstav/cava](https://github.com/karlstav/cava)
- [Airblader/i3](https://github.com/Airblader/i3)
- [jaagr/polybar](https://github.com/jaagr/polybar)
  - apt 
- [dylanaraps/neofetch](https://github.com/dylanaraps/neofetch) 
  - apt
- [DaveDavenport/rofi](https://github.com/DaveDavenport/rofi)
  - apt
- [derf/feh](https://github.com/derf/feh)
  - apt
- [chjj/compton](https://github.com/chjj/compton)
  - apt


### pywal 
`pywal` is a python script that sets your desktop wallpaper and changes various
colorscheme config files based on the wallpaper. It finds the most common colors
from the wallpaper to do this. It currently supports many different programs,
and outputs the colorscheme into many different formants, so all you have to do
is to symlink the output files to the appropriate directory, and then pywal can
handle the rest. 

### cava
`cava` is a terminal audio visualizer. Very simple and elegant.

### i3-gaps
The link above is for `i3-gaps`, a fork of the `i3` window manager. Unlike
common window managers that facilitate the user dragging windows around, `i3`
creates 'tiles' for new windows, and sets them to not overlap with existing
windows. It also has a lot of hotkeys for resizing, bringing windows forward and
backward, and switching between desktops. While there is a small learning curve,
I find it very productive and try to emulate it even on my MacbookPro. `i3-gaps`
differs only in the fact that you can create gaps between tiles, where in `i3`
all tiles are flush with eachother.

### polybar
One of many status bars, I chose this one as it seemed like the most popular. It
lets you customize almost everything about it, and you can even add scripting
and event triggers when you scroll, click, or hover parts of the bar. The
baseline is very minimal but once you get it customized, it can look amazing.
And isn't this what ricing is about?

### neofetch
Made by the creator of `pywal`, it is a super basic program that displays system
information in the terminal. You can customize what gets displayed and what logo
shows up, and is nice when showing off your specs to other people. Truly
aesthetic with no practical uses.

### rofi
`rofi` is a application launcher that can be customized. When you have very few
icons to click on to run programs, `rofi` comes in handy for launching
non-command line applications. I have a heavily riced version called `rofia`
running on my machine which looks very good, you can find the configs in my
dotfiles.

### feh
I use `feh` to set my desktop background. I will admit I do not know how it
works or why I need to use it when I switch WM's, but if you do not use it or
something like it you will not have a background.

### compton 
`compton` is a composition manager that helps reduce screen tearing (which I
found happen a lot when watching videos). It also facilitates your tiles from
`i3` having dropshadows and supports setting opacity for different applications.
I also use it to highlight my active window in `i3`, which is a nice touch.

I will keep this list updated, so make sure to check back for the latest ricing
tools I discover!
