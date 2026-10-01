import { execFileSync, spawn } from 'node:child_process'

const routes = [
  '/',
  '/cv',
  '/projects/nexus',
  '/projects/myridian',
  '/projects/pedalmap',
  '/projects/pedalmap-fuel',
  '/projects/firebase-pocket-admin',
  '/projects/tcp-exam-trainer',
  '/projects/infrastructure-intelligence',
  '/projects/mcp-local-server',
]

const run = (command, args) => {
  if (isWindows) {
    const commandLine = [command, ...args].join(' ')
    execFileSync(process.env.ComSpec ?? 'cmd.exe', ['/d', '/s', '/c', commandLine], { stdio: 'inherit', shell: false })
    return
  }
  execFileSync(command, args, { stdio: 'inherit', shell: false })
}

const isWindows = process.platform === 'win32'
const npmCommand = isWindows ? 'npm.cmd' : 'npm'
run(npmCommand, ['run', 'typecheck'])
run(npmCommand, ['run', 'lint'])
run(npmCommand, ['run', 'build'])

const preview = isWindows
  ? spawn(process.env.ComSpec ?? 'cmd.exe', ['/d', '/s', '/c', 'npm run preview -- --host 127.0.0.1 --port 3099'], {
      stdio: 'ignore',
      shell: false,
    })
  : spawn(npmCommand, ['run', 'preview', '--', '--host', '127.0.0.1', '--port', '3099'], {
      stdio: 'ignore',
      shell: false,
    })

const stopPreview = () => {
  if (!preview.pid) return
  if (isWindows) {
    try {
      execFileSync('taskkill', ['/pid', String(preview.pid), '/t', '/f'], { stdio: 'ignore' })
    } catch {}
    return
  }
  preview.kill('SIGTERM')
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
try {
  let ready = false
  for (let attempt = 0; attempt < 20; attempt += 1) {
    try {
      const response = await fetch('http://127.0.0.1:3099/')
      if (response.ok) {
        ready = true
        break
      }
    } catch {}
    await wait(500)
  }

  if (!ready) throw new Error('Vite preview did not become ready.')

  for (const route of routes) {
    const response = await fetch('http://127.0.0.1:3099' + route)
    if (!response.ok) {
      throw new Error(route + ' returned HTTP ' + response.status)
    }
    const html = await response.text()
    if (!html.includes('id="root"')) {
      throw new Error(route + ' did not return the application shell.')
    }
    console.log('QA ' + route + ' -> ' + response.status)
  }

  console.log('QA passed: ' + routes.length + ' routes.')
} finally {
  stopPreview()
}
