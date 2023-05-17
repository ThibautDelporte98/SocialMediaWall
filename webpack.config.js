const path = require('path'); 

module.exports = { 
    mode: 'production', 
    watch:true,
    entry: [''], 
    output: { 
        filename: 'main.js', 
        path: path.resolve(__dirname, 'dist'), 
    }, 


};

