import { PaperFormat } from 'markdown-pdf'
import yargs from 'yargs'

export type LogoTypeString =
  | 'LargeCenter'
  | 'SmallCenter'
  | 'LargeLeft'
  | 'SmallLeft'
  | 'LargeRight'
  | 'SmallRight'
  | 'BottomLargeCenter'
  | 'BottomSmallCenter'
  | 'BottomLargeLeft'
  | 'BottomSmallLeft'
  | 'BottomLargeRight'
  | 'BottomSmallRight'

export enum LogoType {
  'LargeCenter' = 1,
  'SmallCenter' = 2,
  'LargeLeft' = 3,
  'SmallLeft' = 4,
  'LargeRight' = 5,
  'SmallRight' = 6,
  'BottomLargeCenter' = 100,
  'BottomSmallCenter' = 101,
  'BottomLargeLeft' = 102,
  'BottomSmallLeft' = 103,
  'BottomLargeRight' = 104,
  'BottomSmallRight' = 105
}

export interface Argv {
  src: string
  dest?: string
  format: PaperFormat
  logoType?: LogoType
}

const argv = yargs
  .option('src', {
    alias: 's',
    type: 'string',
    requiresArg: true,
    describe: 'The source path of the markdown file'
  }).option('dest', {
    alias: 'd',
    type: 'string',
    requiresArg: false,
    default: undefined,
    describe: 'The destination path for the pdf file'
  }).option('format', {
    alias: 'f',
    type: 'string',
    requiresArg: true,
    describe: 'The format of the PDF. Supported options: A3, A4, A5, Legal, Letter or Tabloid'
  }).option('logoType', {
    alias: 'l',
    type: 'string',
    describe: 'Logo type',
    choices: [
      'LargeCenter', 'SmallCenter',
      'LargeLeft', 'SmallLeft',
      'LargeRight', 'SmallRight',
      'BottomLargeCenter', 'BottomSmallCenter',
      'BottomLargeLeft', 'BottomSmallLeft',
      'BottomLargeRight', 'BottomSmallRight'
    ],
    default: undefined,
    coerce: (p) => LogoType[p]
  }).argv as Argv

export default argv
