# Hybrid Line Numbers for VS Code

Seamlessly switch between absolute and relative line numbers with a single command. Perfect for developers who need both numbering styles in their workflow.

![Demo](https://img.buidl.day/demo.gif)

## Features

### 🔄 Dynamic Line Number Toggle

- **One-Click Switch**: Instantly toggle between absolute and relative line numbers
- **Context-Aware**: Use absolute numbers when discussing code, relative numbers for quick navigation
- **Preserves Settings**: Remembers your original line number settings when deactivated

### 🎯 Enhanced Go to Line

- Jump to any line using absolute or relative numbers
- Use `+N` or `-N` for relative jumps (e.g., `+5` to jump 5 lines down)
- Perfect complement to relative line numbers for precise navigation

## Usage

### Toggle Line Numbers

1. Press `Cmd/Ctrl + Shift + P` to open the command palette
2. Type "Toggle Line Numbers Mode" and select the command

### Go to Line

1. Press `Alt/Option + G` (default keybinding)
2. Type a number for absolute jump (e.g., "15")
3. Or type +/- for relative jump (e.g., "+5" or "-3")

## Why Hybrid Line Numbers?

- **Code Reviews**: Use absolute numbers when referencing specific lines in pull requests
- **Efficient Navigation**: Switch to relative numbers for quick up/down movements
- **Best of Both Worlds**: No need to choose between absolute and relative - have both at your fingertips

## Installation

1. Open VS Code
2. Go to Extensions (Cmd/Ctrl + Shift + X)
3. Search for "Hybrid Line Numbers"
4. Click Install

## Extension Settings

This extension contributes the following commands:

- `hybrid-line-numbers.toggle`: Toggle between absolute and relative line numbers
- `hybrid-line-numbers.gotoLine`: Open enhanced Go to Line dialog

## Release Notes

See [CHANGELOG.md](https://github.com/currybab/vscode-hybrid-line-numbers/blob/main/CHANGELOG.md) for detailed release notes.

## Feedback & Contributions

- File issues at [GitHub repository](https://github.com/currybab/vscode-hybrid-line-numbers/issues)
- Contributions are always welcome!

## License

This extension is licensed under the [MIT License](LICENSE).
