// debugger.ts

import util from 'util';

export interface Debugger {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (formatter: any, ...args: any[]): void;
  color: string;
  enabled: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log: (...args: any[]) => any;
  namespace: string;
  extend: (namespace: string, delimiter?: string) => Debugger;
}

const createDebugger = (namespace: string): Debugger =>
  Object.assign(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (formatter: any, ...args: any[]): void => {
      // eslint-disable-next-line no-console
      console.log(namespace, formatter, ...args);
      process.stderr.write(`${namespace} ${util.format(formatter, ...args)}\n`);
    },
    {
      color: '',
      enabled: true,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      log: (...args: any[]): any => process.stderr.write(`${util.format(...args)}\n`),
      namespace: '',
      // eslint-disable-next-line no-shadow
      extend: (namespace: string, delimiter?: string): Debugger => {
        // eslint-disable-next-line no-console
        console.log(namespace, delimiter);
        return (undefined as unknown) as Debugger;
      },
    }
  );

export default createDebugger;
