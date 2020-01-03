# CoderLayout

A keyboard layout specially designed for ~~coders~~ myself.

I'll add some more details here when I find the time 😅

## Installation

1. Install [Karabiner-Elements](https://pqrs.org/osx/karabiner/)

2. Copy the karabiner.json
```bash
$ cp dist/karabiner.json ~/.config/karabiner
```

3. Copy the keylayout files:
```bash
$ sudo cp dist/CoderLayout.icns /Library/Keyboard\ Layouts
$ sudo cp dist/CoderLayout.keylayout /Library/Keyboard\ Layouts
```

4. Add "CoderLayout" as input source in the Keyboard settings dialog

## Implementation Overview

CoderLayout uses Karabiner-Elements in combination with its own MacOS keyboard layout.


## Development

To make changes to the layout, edit the yml files in the `config` directory.

Mainly the file `karabinerLayers` will be of interest here.

When adding new unicode characters in that file, make sure you also add them to `keylayoutOutputMapping`.
Otherwise MacOS will not be able to produce those.

After making changes, run:

```bash
$ yarn generate:karabiner
```

```bash
$ yarn generate:keylayout
```

```bash
$ yarn generate:icns
```
