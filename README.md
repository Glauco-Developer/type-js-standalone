# type-js-standalone

A simple compiler from ts to js using terminal commands.

To create tsconfig.json
If this be empty it means to apply default config

#Terminal
# npm install typescript -g 
# tsc -v

Compile
In tsconfig.json
{
  "compileOnSave": true,
  "compilerOptions": {
    "outDir": "app/js"
  }
}

or
Compile (same folder)
# tsc -w (To watching)

Compile (specific folder)
#tsc -w 

Node
node app/js

Don't compile if has an error
"noEmitOnError": true
