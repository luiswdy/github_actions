const fs = require('fs')
const path = require('path')

// Get the input file path from the environment variable
const filePath = process.env['INPUT_FILE-PATH']; // GitHub Actions automatically uses `INPUT_` prefix with input names
const outputPath = 'results.txt';
const resolvedPath = path.resolve(outputPath);
const outputFilePath = process.env.GITHUB_OUTPUT;

try {
    // Read the contents of the input file
    const data = fs.readFileSync(filePath, 'utf8');

    // Example processing: convert content to uppercase
    const result = data.toUpperCase();

    // Write the result to the output file
    fs.writeFileSync(resolvedPath, result);

    // Set the output variable to be used in the workflow
    fs.appendFileSync(outputFilePath, `results-file=${resolvedPath}\n`, { encoding: 'utf8' });
} catch (error) {
    console.error(`Error processing file: ${error.message}`);
    process.exit(1);
}

