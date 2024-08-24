type StringDiffResult = {
  combinedString: string;
  addedLineNumbers: number[];
  removedLineNumbers: number[];
};

let addedLineNumbers: number[] = [];
let removeLineNumbers: number[] = [];
const linesToDisplay: string[] = [];
let referenceLineIndex = 0;
let newLineIndex = 0;

export default function compareStrings(
  referenceString: string,
  newString: string,
): StringDiffResult {
  const oldLines = referenceString.split("\n");
  const newLines = newString.split("\n");

  while (true) {
    const oldLine = oldLines.at(referenceLineIndex);
    const newLine = newLines.at(newLineIndex);
    if (!oldLine && !newLine) {
      break;
    }

    if (!oldLine && newLine) {
      addNewLineToResult(newLine);
      continue;
    }

    if (!newLine && oldLine) {
      addRemovedLineToResult(oldLine);
      continue;
    }

    if (oldLine == newLine) {
      addLineToResult(newLine!);
      continue;
    }

    const isNewLine = !oldLines.includes(newLine!, referenceLineIndex - 1);

    const isRemovedLine = !newLines.includes(oldLine!, newLineIndex - 1);

    if (isRemovedLine) {
      addRemovedLineToResult(oldLine!);
    }
    if (isNewLine) {
      addNewLineToResult(newLine!);
    }

    continue;
  }
  return {
    combinedString: linesToDisplay.join("\n"),
    addedLineNumbers: addedLineNumbers,
    removedLineNumbers: removeLineNumbers,
  };
}

function addLineToResult(line: string) {
  linesToDisplay.push(line);
  newLineIndex++;
  referenceLineIndex++;
}

function addNewLineToResult(line: string) {
  linesToDisplay.push(line);
  addedLineNumbers.push(linesToDisplay.length);
  newLineIndex++;
}
function addRemovedLineToResult(line: string) {
  linesToDisplay.push(line);
  removeLineNumbers.push(linesToDisplay.length);
  referenceLineIndex++;
}
