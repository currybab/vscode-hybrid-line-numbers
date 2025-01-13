import * as vscode from 'vscode';

let hybridMode = false;

export function activate(context: vscode.ExtensionContext): void {
    console.log('Hybrid Line Numbers is now active!');

    // Register toggle command
    const toggleDisposable = vscode.commands.registerCommand('hybrid-line-numbers.toggle', () => {
        hybridMode = !hybridMode;
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;

        const config = vscode.workspace.getConfiguration('editor', editor.document.uri);

        if (hybridMode) {
            // Set to relative line numbers
            config.update('lineNumbers', 'relative', vscode.ConfigurationTarget.Global);
        } else {
            // Set back to absolute line numbers
            config.update('lineNumbers', 'on', vscode.ConfigurationTarget.Global);
        }
    });

    // Register goto line command
    const gotoLineDisposable = vscode.commands.registerCommand(
        'hybrid-line-numbers.gotoLine',
        async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                return;
            }

            const currentLine = editor.selection.active.line + 1;
            const input = await vscode.window.showInputBox({
                prompt: 'Type a line number, or +N/-N for relative jump',
                placeHolder: 'Example: 5 or +10 or -5',
                validateInput: value => {
                    if (!value.match(/^[+-]?\d+$/)) {
                        return 'Please enter a number (e.g., 5) or a relative number (e.g., +10 or -5)';
                    }
                    return null;
                },
            });

            if (!input) {
                return;
            }

            let targetLine: number;
            if (input.startsWith('+') || input.startsWith('-')) {
                // Relative line number
                const offset = parseInt(input);
                targetLine = currentLine + offset;
            } else {
                // Absolute line number
                targetLine = parseInt(input);
            }

            // Ensure target line is within bounds
            targetLine = Math.max(1, Math.min(targetLine, editor.document.lineCount));

            // Move cursor to target line
            const line = editor.document.lineAt(targetLine - 1);
            const range = new vscode.Range(targetLine - 1, 0, targetLine - 1, line.text.length);
            editor.revealRange(range, vscode.TextEditorRevealType.InCenter);
            editor.selection = new vscode.Selection(targetLine - 1, 0, targetLine - 1, 0);
        }
    );

    context.subscriptions.push(toggleDisposable, gotoLineDisposable);
}

export function deactivate(): void {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        const config = vscode.workspace.getConfiguration('editor', editor.document.uri);

        // Set back to absolute line numbers
        config.update('lineNumbers', 'on', vscode.ConfigurationTarget.Global);
    }
}
