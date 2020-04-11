const fs        = require('fs');
const path      = require('path');

module.exports = {
    // Obtener el nombre del directorio de la carpeta actual
    getCurrentDirectoryBase: () => {
        return path.basename(process.cwd());
    },

    // Verificar si un archivo existe
    directoryExists: (filePath) => {
        return fs.existsSync(filePath);
    }
}
