# Hybrid Line Numbers

A VS Code extension that implements Vim-style hybrid line numbers. Shows absolute line number for the current line and relative line numbers for other lines.

## Features

- Toggle hybrid line numbers using the command palette (`Hybrid Line Numbers: Toggle`)
- Current line shows absolute line number in yellow
- Other lines show relative distance from current line in gray
- Configuration persists between sessions

## Usage

1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS) to open the command palette
2. Type "Toggle Hybrid Line Numbers" and press Enter
3. The line numbers will switch to hybrid mode

## Configuration

You can enable/disable hybrid line numbers in your VS Code settings:

```json
{
    "hybridLineNumbers.enabled": true
}
```

## Requirements

VS Code version 1.84.0 or higher

## Extension Settings

This extension contributes the following settings:

* `hybridLineNumbers.enabled`: Enable/disable hybrid line numbers
