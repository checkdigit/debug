// debug.ts

import util from 'util';

import createDebugger, { Debugger } from './debugger';

export interface Formatters {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [formatter: string]: (v: any) => string;
}

export interface Debug {
  (namespace: string): Debugger;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  coerce: (val: any) => any;
  disable: () => string;
  enable: (namespaces: string) => void;
  enabled: (namespaces: string) => boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log: (...args: any[]) => any;
  names: RegExp[];
  skips: RegExp[];
  formatters: Formatters;
}

const debug: Debug = Object.assign(createDebugger, {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  coerce(val: any): any {
    // eslint-disable-next-line no-console
    console.log(val);
  },
  disable(): string {
    return '';
  },
  enable(namespaces: string): void {
    // eslint-disable-next-line no-console
    console.log(namespaces);
  },
  enabled(namespaces: string): boolean {
    // eslint-disable-next-line no-console
    console.log(namespaces);
    return false;
  },
  formatters: (undefined as unknown) as Formatters,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log(args: any): any {
    return process.stderr.write(`${util.format(...args)}\n`);
  },
  names: [],
  skips: [],
});

export default debug;
