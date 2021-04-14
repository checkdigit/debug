// debug.spec.ts

import assert from 'assert';
import originalDebug from 'debug';

import debug from './index';

function capture(logger: () => void): string {
  let result = '';
  const builtInStdErrWrite = process.stderr.write.bind(process.stderr);
  process.stderr.write = (output: string | Buffer, ...args: unknown[]) => {
    result += output.toString();
    return builtInStdErrWrite(output, ...(args as BufferEncoding[]));
  };
  logger();
  process.stderr.write = builtInStdErrWrite;
  return result;
}

describe('debug', () => {
  it('logs', async () => {
    const originalLogger = originalDebug('wallaby:logs');
    const logger = debug('wallaby:logs');
    assert.ok(capture(() => logger('hello1')).includes('hello1'));
    assert.ok(capture(() => originalLogger('hello1')).includes('hello1'));
  });
});
