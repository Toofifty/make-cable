/**
 * Crawls Zap Cables' color chart for sleeving colors.
 *
 * Usage: `node scripts/crawl-zapcables.js out.csv`
 */

const fs = require('fs');
const fetch = require('node-fetch');

const url = 'https://zapcables.com/color-chart/';

const extractRegex = /title="((?:[\w-]+)).(?:jpg|png)" src="(.*)" alt="([/&-()\w\s]+)"/im;

fetch(url)
    .then(res => res.text())
    .then(body => {
        const csv = body
            .split('Newest Cords!')[1]
            .split('<a name="double-sleeve-colors">')[0]
            .split('\n')
            .map(line => extractRegex.exec(line))
            .filter(Boolean)
            .map(match => `${match[1]},${match[3]},${match[2]},zapcables,`)
            .join('\n');
        fs.writeFileSync(process.argv[2] || 'out.csv', csv);
        console.log(`Output written to ${process.argv[2] || 'out.csv'}`);
    });
