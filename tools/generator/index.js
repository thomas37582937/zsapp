const fs = require('fs')

const argvs = process.argv

const type = argvs[2]
let name = argvs[3]
name = name.substr(0, 1).toUpperCase() + name.substr(1)

const options = {
  r: {
    path: `${__dirname}/../../src/Routes/`,
    tempPath: `${__dirname}/route.temp/`,
  },
  c: {
    path: `${__dirname}/../../src/Components/`,
    tempPath: `${__dirname}/component.temp/`,
  },
}

if (!options[type]) return

const tDir = options[type].tempPath
const gPath = `${options[type].path + name}/`

function mkdir(dir) {
  console.info(`make folder, path:${dir}`)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir)
}

function mkfile(dir, content) {
  console.info(`make folder, path:${dir}`)
  fs.writeFileSync(dir, content)
}

function generate(tempDir, genPath) {
  mkdir(genPath)
  const files = fs.readdirSync(tempDir)
  files.forEach(file => {
    const stat = fs.statSync(tempDir + file)
    if (stat.isFile()) {
      let content = fs.readFileSync(tempDir + file).toString()
      content = content.replace(/Template/g, name).replace(/template/g, name.toLowerCase())
      const suffix = file.substr(file.indexOf('.'), file.length)
      let filename
      if (/Template/.test(file)) filename = name + suffix
      else if (/template/.test(file)) filename = name.toLowerCase() + suffix
      else filename = file
      mkfile(genPath + filename, content)
    } else if (stat.isDirectory()) {
      const dir = `${genPath + file}/`
      mkdir(dir)
      generate(`${tempDir + file}/`, dir)
    }
  })
}

generate(tDir, gPath)
