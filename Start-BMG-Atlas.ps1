param(
    [switch]$Server
)

$ErrorActionPreference = 'Stop'
$projectRoot = $PSScriptRoot
$url = 'http://127.0.0.1:3016/'

if ($Server) {
    Set-Location -LiteralPath $projectRoot
    & npm.cmd run dev
    exit $LASTEXITCODE
}

$ready = $false
try {
    $null = Invoke-WebRequest -UseBasicParsing -Uri $url -TimeoutSec 2
    $ready = $true
} catch {
    $powerShellExe = Join-Path $env:WINDIR 'System32\WindowsPowerShell\v1.0\powershell.exe'
    $arguments = "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`" -Server"
    Start-Process -FilePath $powerShellExe -ArgumentList $arguments -WorkingDirectory $projectRoot -WindowStyle Hidden
}

if (-not $ready) {
    for ($attempt = 0; $attempt -lt 60; $attempt++) {
        Start-Sleep -Seconds 1
        try {
            $null = Invoke-WebRequest -UseBasicParsing -Uri $url -TimeoutSec 2
            $ready = $true
            break
        } catch {
            # Keep waiting for Vite to start.
        }
    }
}

if (-not $ready) {
    Add-Type -AssemblyName System.Windows.Forms
    [System.Windows.Forms.MessageBox]::Show(
        'BMG Atlas did not start. Confirm Node.js 22.13 or newer is installed, then run npm ci in the BMG Atlas folder.',
        'BMG Atlas',
        'OK',
        'Error'
    ) | Out-Null
    exit 1
}

Start-Process $url
