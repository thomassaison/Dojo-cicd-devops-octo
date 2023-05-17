import { Context, Form, HttpRequest, Logger } from '@azure/functions';

export const buildContext = (): Context => ({
  bindingData: undefined,
  bindingDefinitions: [],
  bindings: {},
  executionContext: undefined,
  invocationId: '',
  log: createLogger(),
  traceContext: undefined,
  done: () => undefined,
});

export const buildHttpRequest = (): HttpRequest => ({
  headers: undefined,
  method: undefined,
  params: undefined,
  parseFormBody(): Form {
    return undefined;
  },
  query: {},
  get: undefined,
  url: '',
  user: undefined,
});

const createLogger = (): Logger => {
  const logger = () => undefined;
  logger.error = () => undefined;
  logger.info = () => undefined;
  logger.verbose = () => undefined;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logger.warn = () => {};
  return <Logger>logger;
};