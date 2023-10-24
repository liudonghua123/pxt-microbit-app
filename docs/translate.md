# Help translate

Translations of text in the editor, in blocks, and documentation managed by [Crowdin](https://crowdin.com/project/makecode), a translation management platform. It is free to join
and you can volunteer to translate parts of the web site. Translation into different languages is done by the work of people all over the world who volunteer to help MakeCode be accessible to as many people as possible.

### ~ hint

Interested in how localization works in MakeCode? Watch this video for an overview of the process.

https://youtu.be/XpdUzpBVKFU

### ~


##  #promo

### ~ hint

#### Help translate

Looking to help translate the site for **[microbit.org](http://microbit.org)**? Try http://translate.microbit.org/ to help the Microbit Foundation!
 
### ~

## Localized MakeCode

Text, or [strings](/types/string), used in the editor and documentation pages are localized into the current language for the editor (you switch languages by choosing **Language** in the **Settings** menu). Text is continually being added or changed so translations are always at a different stage of completeness. MakeCode text content is stored in files on Crowdin in [English](https://crowdin.com/project/makecode/en#). Translators choose their language in the [MakeCode Crowdin project](https://crowdin.com/project/makecode) and work on the files for the editor they want to translate for.

## Want to help?

Good! **A description of the process and general guidance is found in the [Microsoft MakeCode translation](https://makecode.com/translate) page to help you get started.**

## Crowdin files for @boardname@

The **MakeCode for @boardname@** editor uses some core translation files for it's interface, basic blocks, and documents which are common to all of the editors (they are also described in the general translation [page](https://makecode.com/translate)). There are many more string files and documents that are specific to the @boardname@ editor.

##  #target-files

When you select your language from the [MakeCode](https://crowdin.com/project/makecode) project home page, you'll find all of the localization files for MakeCode shown in a folder tree. The strings to translate for the @boardname@ are found in the files under the **microbit** folder for the current language.

![microbit strings files](/static/mb/translate/crowdin-folder.png)

Localization files are present in two different forms, JSON and markdown. The JSON files (those you see with the **.json** ending in their names) contain localizable strings related to both the editor UI and the text shown on the programming code blocks. All of the markdown files (those with **.md** at the end of their names) are documents for reference, projects, tutorials, help information, etc.

The files listed in the following sections provide a guide to how each of the translation files and folders relate to the **MakeCode for @boardname@** editor. The links here are to the [English](https://crowdin.com/project/kindscript/en#) source files just to show you the location of the files in the folder structure. Of course, you will translate in your selected language instead.

### Editor

There a a few files that are specific to the MakeCode editor itself. These contain strings for the editor UI and the simulator. They are essential to translate and should be prioritized before the other files.

| File | Description |
| - | - |
| [strings.json](https://crowdin.com/translate/kindscript/32/en-en) | Common strings that shared by all MakeCode editors. **Note**: This file is located at the MakeCode project's root folder rather than under **microbit** |
| [target-strings.json](https://crowdin.com/translate/kindscript/1922/en-en) | Strings custom to the @boardname@ editor interface |
| [sim-strings.json](https://crowdin.com/translate/makecode/1923/en-en) | Strings for the @boardname@ simulator |
<br/>

This is an example of the editor with it's interface elements localized:

![Translated editor elements](/static/mb/translate/target-strings.jpg)

### Blocks

The strings for the programming code blocks all have names in the form of '_name_-strings.json' and '_name_-jsdoc-strings.json'. The _name_ part of the filename often refers to which set of blocks or the extension tht the blocks come from. 

| File | Description |
| - | - |
| [core-jsdoc-strings.json](https://crowdin.com/translate/kindscript/66/en-en) |  Description text for code elements of the [basic](/reference/basic) and core [blocks](/blocks). **Note**: this file contains strings for the fundamental set of coding blocks and should be prioritized over the other strings files for blocks |
| [core-strings.json](https://crowdin.com/translate/kindscript/65/en-en) | Display text for the [basic](/reference/basic) and core [blocks](/reference/blocks). **Note**: this file contains strings for the fundamental set of coding blocks and should be prioritized over the other strings files for blocks |
| [radio-jsdoc-strings.json](https://crowdin.com/translate/kindscript/64/en-en) | Description text for code elements of the [radio](/reference/radio) blocks |
| [radio-strings.json](https://crowdin.com/translate/kindscript/63/en-en) | Display text for the [radio](/reference/radio) blocks |
| [radio-broadcast-jsdoc-strings.json](https://crowdin.com/translate/kindscript/5032/en-en) |  Description text for code elements of the radio broadcast blocks |
| [radio-broadcast-strings.json](https://crowdin.com/translate/kindscript/5030/en-en) | Display text for the radio broadcast blocks |
| [servo-jsdoc-strings.json](https://crowdin.com/translate/kindscript/5036/en-en) | Description text for code elements of the [servo](/reference/servos) blocks |
| [servo-strings.json](https://crowdin.com/translate/kindscript/5034/en-ens) | Display text for the [servo](/reference/servos) blocks |
| [bluetooth-jsdoc-strings.json](https://crowdin.com/translate/kindscript/60/en-en) | Description text for code elements of the [bluetooth](/reference/bluetooth) blocks
| [bluetooth-strings.json](https://crowdin.com/translate/kindscript/59/en-en) | Display text for the [bluetooth](/reference/bluetooth) blocks |
| [devices-jsdoc-strings.json](https://crowdin.com/translate/makecode/62/en-en) | Description text for code elements of the _connected devices_ blocks |
| [devices-strings.json](https://crowdin.com/translate/makecode/61/en-en) | Display text for the _connected devices_ blocks |
| [flashlog-jsdoc-strings.json](https://crowdin.com/translate/kindscript/60/en-en) | Description text for code elements of the _flashlog_ blocks |
| [flashlog-strings.json](https://crowdin.com/translate/kindscript/59/en-en) | Display text for the _flashlog_ blocks |
| [datalogger-jsdoc-strings.json](https://crowdin.com/translate/kindscript/11254/en-en) | Description text for code elements of the [datalogger](/reference/datalogger) blocks |
| [datalogger-strings.json](https://crowdin.com/translate/kindscript/11252/en-en) | Display text for the [datalogger](/reference/datalogger) blocks |
| [jacdac-jsdoc-strings.json](https://crowdin.com/translate/kindscript/7862/en-en) | Description text for code elements of the _jacdac_ blocks
| [jacdac-strings.json](https://crowdin.com/translate/kindscript/7860/en-en) | Display text for the _jacdac_ blocks |
| [color-jsdoc-strings.json](https://crowdin.com/translate/kindscript/11836/en-en) | Description text for code elements of the _color_ blocks
| [color-strings.json](https://crowdin.com/translate/kindscript/11834/en-en) | Display text for the _color_ blocks |
| [microphone-jsdoc-strings.json](https://crowdin.com/translate/kindscript/10230/en-en) | Description text for code elements of the _microphone_ blocks
| [microphone-strings.json](https://crowdin.com/translate/kindscript/10228/en-en) | Display text for the _microphone_ blocks |
| [settings-jsdoc-strings.json](https://crowdin.com/translate/kindscript/10872/en-en) | Description text for code elements of the _settings_ blocks
| [settings-strings.json](https://crowdin.com/translate/kindscript/10870/en-en) | Display text for the _settings_ blocks |
<br/>

Here are some examples of translated blocks:

![Translated block text](/static/mb/translate/block-text.jpg)

### Document pages

Document pages contain the text for any markdown page available on the MakeCode editor site. These include code block reference, projects, tutorials, how to information, etc.

| File | Description |
| - | - |
| [docs](https://crowdin.com/translate/kindscript/en#/microbit/docs) | Documentation pages for projects, courses, lessons, and code block reference |
| [libs](https://crowdin.com/translate/kindscript/en#/microbit/libs)  | Documentation pages for code block reference and other information related to built-in extensions like _servo_ and _datalogger_ |
<br/>

Here's an example of a translated document page for a course lesson:

![Translated document page](/static/mb/translate/doc-page.jpg)

