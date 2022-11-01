import * as Configuration from "./configuration";
import * as Formatters from "./formatters";
import { FormatterConstructor } from "./language/formatter/formatter";
import { RuleFailure } from "./language/rule/rule";
import * as Rules from "./rules";
import * as Test from "./test";
import * as Utils from "./utils";

export { Configuration, Formatters, Rules, Test, Utils };

export * from "./linter";
export * from "./language/rule/rule";
export * from "./enableDisableRules";
export * from "./formatterLoader";
export * from "./ruleLoader";
export * from "./language/utils";
export * from "./language/walker";
export * from "./language/formatter/formatter";

export interface LintResult {
    errorCount: number;
    warningCount: number;
    failures: RuleFailure[];
    fixes?: RuleFailure[];
    format: string | FormatterConstructor;
    output: string;
}

export interface ILinterOptions {
    fix: boolean;
    formatter?: string | FormatterConstructor;
    formattersDirectory?: string;
    quiet?: boolean;
    rulesDirectory?: string | string[];
}
