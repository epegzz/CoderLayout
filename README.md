# CoderLayout

#### A keyboard layout specially designed for ~~coders~~ myself.

I started setting up a website that will explain the details: http://www.coderlayout.com

For now it does not explain much I suppose, but I'll add some more info when I find the time 😅

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

## App Configuration

### Navigation Layer Plus (M1 + Space)

The following keys are used for moving the cursor around.

* `L` is mapped to `option + up`
* `R` is mapped to `option + down`
* `N` is mapped to `option + left` (move word left) 
* `S` is mapped to `option + right` (move word right)

Note: In IDEA (IntelliJ, WebStorrm, etc.) you may want to switch to CamelHump mode instead of moving whole words.
To do that, simply re-map the following keyboard shortcuts:

`Move Caret to Next/Previous Word`  -> `Move Caret to Next/Previous Word in Different "CamelHumps" Mode`
`Move Caret to Next/Previous Word with Selection`  -> `Move Caret to Next/Previous Word with Selection in Different "CamelHumps" Mode`

### Editing Layer (M4)

The following keys are used for moving text blocks around.

* `L` is mapped to `control + option + up` (move text block up)
* `R` is mapped to `control + option + down` (move text block down)
* `N` is mapped to `control + option + left` (move text block left / un-indent) 
* `S` is mapped to `control + option + right` (move text block up / indent)

To make this work with your editor you have to configure keyboard shortcuts accordingly.
In IDEA (IntelliJ, WebStorrm, etc.) those are:

`Indent Line or Selection`
`Unindent Line or Selection`
`Move Line Up`
`Move Line Down`

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
