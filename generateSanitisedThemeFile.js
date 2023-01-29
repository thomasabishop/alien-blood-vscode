const fs = require("fs");
const path = require("path");
const package = require("./package.json");

function generateSanitisedThemeFile() {
  // Get theme from command line args
  const themeFile = path.resolve(process.argv[2]);
  const fixedFileName = path.parse(path.basename(themeFile)).name;
  let collatedTokens = {};
  let fontStyleTokens = [];

  //  Delete old back-up
  // fs.readdirSync(`${__dirname}/themes`).forEach((file) => {
  //   if (file.includes("bak")) {
  //     fs.unlinkSync(path.join(__dirname, "/themes/", file), (err) => {
  //       if (err) throw err;
  //     });
  //   }
  // });

  // Create new backup
  fs.copyFile(
    themeFile,
    `themes/${fixedFileName}_v${package.version}.bak.json`,
    (err) => {
      if (err) throw err;
    }
  );

  // Parse dirty previous theme file
  fs.readFile(themeFile, "utf-8", (err, jsonData) => {
    if (err) throw err;
    const data = JSON.parse(jsonData);
    const tokens = data?.tokenColors;

    // Parse colour and font-style tokens
    tokens.map((token) => {
      if (token.name.includes("#")) {
        if (token?.settings?.foreground) {
          if (collatedTokens.hasOwnProperty(token.settings.foreground)) {
            collatedTokens[token.settings.foreground].push(...token.scope);
          } else {
            collatedTokens[token.settings.foreground] = [...token.scope];
          }
        }
      } else {
        fontStyleTokens.push(token);
      }
    });

    //  Generate `tokenColors` field on new theme object
    let tokenColors = Object.keys(collatedTokens).map((newToken, i) => ({
      name: newToken,
      scope: collatedTokens[newToken],
      settings: {
        foreground: newToken,
      },
    }));

    // Sort `colors` field alphabetically
    let sortedColors = Object.keys(data.colors)
      .sort()
      .reduce((accumulator, key) => {
        accumulator[key] = data.colors[key];
        return accumulator;
      }, {});

    // Generate new theme object
    let dataToWrite = {
      name: data.name,
      type: data.type,
      colors: sortedColors,
      tokenColors: tokenColors,
    };
    dataToWrite.tokenColors.push(...fontStyleTokens);

    //  Write to disk
    fs.writeFile(
      `themes/${fixedFileName}.json`,
      JSON.stringify(dataToWrite, null, 2),
      (err) => {
        console.error(err);
      }
    );
  });
}

generateSanitisedThemeFile();
