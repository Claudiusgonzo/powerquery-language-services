// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import type { DocumentUri, TextDocument, TextDocumentContentChangeEvent } from "vscode-languageserver-textdocument";
import type {
    CompletionItem,
    Diagnostic,
    DiagnosticRelatedInformation,
    DocumentSymbol,
    Hover,
    Position,
    Range,
    SignatureHelp,
} from "vscode-languageserver-types";
import { CompletionItemKind, DiagnosticSeverity, SymbolKind } from "vscode-languageserver-types";

export type {
    CompletionItem,
    Diagnostic,
    DiagnosticRelatedInformation,
    DocumentSymbol,
    DocumentUri,
    Hover,
    Position,
    Range,
    SignatureHelp,
    TextDocument,
    TextDocumentContentChangeEvent,
};
export { CompletionItemKind, DiagnosticSeverity, SymbolKind };

export interface IDisposable {
    dispose(): void;
}
