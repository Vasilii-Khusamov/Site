import {join, extname} from 'path'
import {readdir, readFile, writeFile, open} from 'fs/promises'
import {Dirent} from 'fs'
import {EOL} from 'os'

/**
 * Скрипт для поиска файлов *.js и изменения всех импортов путем добавления расширения '.js'.
 * Также скрипт ищет файлы *.html и меняет расширения .ts на .js
 *
 * Скрипт надо запускать в таком формате:
 * script <путь к папке с файлами, где надо менять расширения>
 *
 * Скрипт требует Node JS версии 18.17.0 или выше.
 */

const isFilePredicate = (
	/**
	 * @param {Dirent} item
	 */
		(item) => item.isFile()
)

async function processHtmlFile(filepath) {
	let content = await readFile(filepath, {encoding: 'utf8'})
	content = content.replaceAll('.ts', '.js')
	await writeFile(filepath, content)
}

async function processJavaScriptFile(filepath) {
	const file = await open(filepath)
	const newContentLines = []
	for await (let line of file.readLines()) {
		if (line.includes('import') && !line.includes('@param')) {
			line = line.replaceAll('\';', '.js\';')
		}
		newContentLines.push(line)
	}
	const newContent = newContentLines.join(EOL)
	await writeFile(filepath, newContent)
}

function welcome() {
	console.log('Скрипт для изменения расширений в импортах JS-файлов')
}

async function main() {
	welcome()

	if (!process.argv[2]) {
		console.log('Не указана рабочая папка.')
		console.log('Скрипт следует запускать по формату:')
		console.log('script <рабочая папка>')
		process.exit(1)
	}

	const nodeVersion = process.version.replaceAll('v', '').split('.').map(item => Number(item))
	if (!(nodeVersion[0] >= 18 || (nodeVersion[0] === 18 && nodeVersion[1] >= 17))) {
		console.log('Требуется Node JS версии 18.17.0 или выше.')
		process.exit(2)
	}

	const workDirectory = join(process.cwd(), process.argv[2])
	console.log('Рабочая папка:', workDirectory)

	const directoryContentList = await readdir(workDirectory, {
		recursive: true, // Эта опция доступна только в Node JS версии 18.17.0 или выше.
		withFileTypes: true
	})
	const fileList = directoryContentList.filter(isFilePredicate).map(file => join(file.path, file.name))

	for (const filepath of fileList) {
		switch (extname(filepath)) {
			case '.html':
				await processHtmlFile(filepath)
				break
			case '.js':
				await processJavaScriptFile(filepath)
				break
		}
	}
	console.log('Были обработаны файлы *.js и *.html в рабочей папке.')
}

main()