<div align="center">
  <h1><strong><i>snts-mdpdf</i></strong></h1>
</div>

<div align="center">
  <img src="assets/sntscollective-high-resolution-logo-color-on-transparent-background.svg" />
</div>

<div align="center">
  <p>
    <i>
      A CLI-tool that converts Markdown documents into a PDF format.
      <br />
      Courtesy of the <strong>snts'collective</strong>.
    </i>
  </p>
  <table>
    <td align="center">
      <img src="assets/banner_01.jpg" />
    </td>
    <td align="center">
      <img src="assets/banner_02.jpg" width="62%" />
    </td>
    <td align="center">
      <img src="assets/banner_01.jpg" />
    </td>
  </table>
</div>

---

<br />

<h2 align="center">
  <i>Installation</i>
</h2>

<div align="center">
  <i><strong>NB: Assumes NodeJS is installed on your machine.</i></strong>
</div>

<br />

<h3 align="center">
  <i>Install from source:</i>
</h3>


```bash
git clone https://github.com/snts-collective/snts-mdpdf
```

```bash
cd snts-mdpdf
```

```bash
npm run build
```

```bash
npm i -g
```

<br />

<h2 align="center">
  <i>Usage:</i>
</h2>

```bash
snts-mdpdf <options>
```

<table align="center">
  <tr align="center">
    <td align="center">
      <h3 align="center">
        <i>Options</i>
      </h3>
    </td>
    <td>
      <div align="center">
        <table align="center">
          <tr width="50%" align="center">
            <td width="50%" align="center"><strong>:</strong></td>
            <td width="50%" align="center"><i>Required</i></td>
          </tr>
          <tr width="50%" align="center">
            <td width="50%" align="center"><strong>?:</strong></td>
            <td width="50%" align="center"><i>Optional</i></td>
          </tr>
        </table>
      </div>
    </td>
  </tr>
</table>

<div align="center">

  * `-s` or `--src`: The source path of the Markdown file

  * `-d` or `--dest`?: The destination file of the PDF file. If a destination path isn't provided; the PDF will be saved in the same path as *`--src`*, with the file extension **".pdf"** instead of **".md"**

  * `-f` or `--format`?: The format of the PDF being generated. If none is provided, the default *`A4`* will be used. The available options are:

    1. *`A3`*

    2. *`A4`*

    3. *`A5`*

    4. *`Legal`*

    5. *`Letter`*

    6. *`Tabloid`*

  * `-l` or  `--logoType`?: The size and position of the ***snts'collective*** logo being prepended. If no argument is provided; the PDF generator will convert the document without any logo attached at all. The available options are:

    1. *`LargeCenter`*

    2. *`SmallCenter`*

    3. *`LargeLeft`*

    4. *`SmallLeft`*

    5. *`LargeRight`*

    6. *`SmallRight`*

    7. *`BottomLargeCenter`*

    8. *`BottomSmallCenter`*

    9. *`BottomLargeLeft`*

    10. *`BottomSmallLeft`*

    11. *`BottomLargeRight`*

    12. *`BottomSmallRight`*

</div>

<br />

<h4 align="center">
  <i>Example:</i>
</h4>

```bash
snts-mdpdf -s ./doc.md -d ./doc.pdf -f A4
```

<div align="center">

  Running the `snts-mdpdf` command will convert the entered Markdown and generate a PDF document in the destination path with the ***snts'collective*** logo optionally prepended.

</div>

<br />

- - - -

<h2 align="center">
  <i>Author</i>
</h2>

<div align="center">

  👤 **Sihle (*snts'abode*) Masebuku <snts.abode@gmail.com>**

</div>

<br />

<h2 align="center">
  <i>Show your support</i>
</h2>

<div align="center">

  Give a ⭐️ if this project helped you!

</div>

- - - -
