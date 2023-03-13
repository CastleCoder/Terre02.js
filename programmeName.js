
function pathname(){

  const path = require('path');

  const filename = path.basename(process.argv[1]);
  console.log(filename);
}

pathname();