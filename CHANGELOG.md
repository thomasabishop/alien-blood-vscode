# Changelog

## [1.3.0] - 2022-07-17
### Added
- Support for TSX
## [1.2.0] - 2022-07-17

## Changed 
- Numerous improvements to markdown colour tokens
- Make filename Git modified/untracked colours more muted
## [1.0.1] - 2022-06-22

### Added
- Menu horizontal separator now theme colour
- Menubar foreground color no longer #fff and now theme white
- No folder status bar same as default colours.
### Changed
- Terminal background same colour as main editor
- Remove border from status bar

## [0.1.15] - 2022-02-19

### Added

- Themed Git diff view

## [0.1.14] - 2022-02-06

### Changed

- CSS class names to blue

## [0.1.13] - 2022-01-30

### Changed

- `debugToolbar.border` to muted dark
- `debugConsole.infoForeground` to muted green
- Removed current line border and instead used background alpha shade
- CSS/ SCSS/ LESS: class color to red (orange was too in yer face)

### Added

- Themed widget shadow (as base colour)
- Themed all minimap highlight colours

## [0.1.12] - 2022-01-23

### Changed

- `editor.findMatchBackground`
- `editor.wordHighlightStrongBackground`

### Added

- Completed colours for debugging mode:
  - Debug toolbar background and forground
  - Debug icon colors
  - Debug token expressions

## [0.1.11] - 2022-01-16

### Fixed

- Add punctuation.definition colour for comment (forgot)

### Changed

- Add colours for tokens `editor.snippetFinalTabstopHighlightBackground`, `editor.snippetTabstopHighlightBackground`

## [0.1.10] - 2022-01-16

### Fixed

- Selected comments are now more readable

### Changed

- Comment token color
- Reduced opacity of selection color

## [0.1.9] - 2022-01-15

### Changed

- Terminal background made consistent with other bottom panel backgrounds
- Status bar debugging mode to dark yellow

### Added

- Editor line highlight broder
- Word highlight background
- Find match background

## [0.1.8] - 2022-01-09

### Changed

- Async token back to green.

## [0.1.7] - 2022-01-09

### Changed

- Status bar colour to more muted green (felt it was too bright and distracting)
- Refinements to status bar hover and active states.

## [0.1.6] - 2022-01-08

### Changed

- Status bar colour to brighter green
- Status bar hover colour to brighter green
- Status bar debugging mode to theme orange
- Numerous tweaks to status bar hover and active states
- Use theme white for menu items (from toolbar UI)

### Fixed

- Scrollbars are now partially transparent so that gutter annotations are visible at all times.

### Added

- Darker blue for object properties for better visual demarcation (previouly object variable name and properties were identical blue), TS and JS.
- Inherited/extended classes to red
- Async modifier on functions/ methods (JS and TS) tokenised to yellow for better visual demarcation
- Active scrollbar colour

## [0.1.5] - 2021-12-31

### Changed

- Restructure theme files' json to make edits easier.

## [0.1.4] - 2021-12-21

### Changed

- Remove ui screenshot

### Fixed

- Add variant to `package.json`

## [0.1.3] - 2021-12-21

### Added

- Version without bold and italics
- Clearer screenshots

### Changed

- Cleaner icon
- Higher resolution readme banner

## [0.1.2] - 2021-12-20

### Added

- Themed matching bracket colourisation (if user-enabled)

### Changed

- Highlighting of TS types and JS built-in classes to standard grey foreground
- `this` to red
- Numbers to cyan
- Booleans to bright green

### Fixed

- Removed italicisation of function expression arrows as leads to broken ligature (if ligatures enabled). Will address similar breakages forthwith.

## [0.1.1] - 2021-12-19

### Added

- Screenshots to readme (JavaScript, TypeScript, React, Angular)

## [0.1.0] - 2021-12-19

### Added

- First pre-release
