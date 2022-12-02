import markdownpdf from 'markdown-pdf'
import fs from 'fs'
import { Argv } from '../argv'
import { join } from 'path'
import SNTSCOLLECTIVE_LOGO, { SNTSCOLLECTIVE_LOGO_SIZE } from './snts\'collective-logo'
import { CWD } from './consts'
import { FileAbstraction } from './types'

export function main(argv: Argv): Promise<void> {
  return new Promise((resolve) => {
    markdownpdf({
      paperFormat: argv.format,
      remarkable: { html: true }
    })
      .from.string(
        !!argv.logoType
          ? attachLogo(fetchMarkdown(argv), argv).file
          : fetchMarkdown(argv).file
      ).to(argv.dest ?? CWD, resolve)
  })
}

function fetchMarkdown(argv: Argv): FileAbstraction {
  const file = fs.readFileSync(join(CWD, argv.src)).toString()
  return { file }
}

function attachLogo(file: FileAbstraction, argv: Argv): FileAbstraction {
  if (!argv.logoType) { return file }

  const logoSize = SNTSCOLLECTIVE_LOGO_SIZE(argv.logoType)

  // (<= 100) = Logo is on the top
  // (>= 100) = Logo is on the bottom
  if (argv.logoType <= 100) {
    file.file = `${SNTSCOLLECTIVE_LOGO(argv.logoType, logoSize)}\n\n` + file.file
  } else {
    file.file = file.file + `\n\n${SNTSCOLLECTIVE_LOGO(argv.logoType, logoSize)}`
  }

  return file
}
