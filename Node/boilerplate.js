<<<<<<< HEAD
const fs = require("fs");
const folderName = process.argv[2] || "Project";
=======
const fs = require('fs');
const folderName = process.argv[2] || 'Project'
>>>>>>> e51e8ea (updated)

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!!")
//     if (err) throw err;
// });

try {
<<<<<<< HEAD
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, "");
  fs.writeFileSync(`${folderName}/app.js`, "");
  fs.writeFileSync(`${folderName}/styles.css`, "");
} catch (e) {
  console.log("SOMETHING WENT WRONG!!!");
  console.log(e);
}
=======
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')
    fs.writeFileSync(`${folderName}/styles.css`, '')
} catch (e) {
    console.log("SOMETHING WENT WRONG!!!");
    console.log(e);
}
>>>>>>> e51e8ea (updated)
